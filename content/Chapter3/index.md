---
Title: Functions
---

## Defining a function 

A function definition is regular binding where the value of the binding is function.

For example the code below defines square to refer to a function that produces a square of a given number 

```js 
const square = function(x){ return x*x};

console.log(square(10));

// we can also write this as 

function square2(x){
    return x*x
};
console.log(square2(9));

```

1. defined by the keyword `function`
2. has parameters in this case `x`, but it can have many or zero parameters
3. the body is contained within braces {}
4. the body contains statements that are executed 


```js 

// functions can have effects

const makeNoise = function(){console.log("Pling!")}; 
makeNoise(); 


// or they can return some value 

const power = function (base, exponent){
    let result = 1;
    for(let count=0;count<exponent; count++){
        result *= base;
    }
    return result;
}

console.log(power(2,10));

```

## Local vs global scope 

1. bindings defined outside a function are available everywhere

2. bindings defined inside function are only available inside the function

3. bindings declare using let and const are local to the function block they are declared 

```js
let x = 10;

if(true) {
    let y = 20;
    var z = 30;
    console.log(x+y+z); // x is global
}

console.log(z); // visible
console.log(y); // not visible

```

The exception is when multiple bindings have the same name
- in that case, code can see only the innermost one. 

For example, when the code inside the halve function refers to n, it is seeing its own n, not the global n.

```js 
const halve = function(n){
    return n/2;
}

let n = 10 ; 

console.log(halve(100)); // 50

console.log(n); // 10

```

### nested scope 

This function—which outputs the ingredients needed to make
a batch of hummus—has another function inside it

```js

const hummus = function(factor){
    const ingredient = function(amount,unit,name){
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1){
            unit += 's';
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    //second function calls
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
}

hummus(5);

```

The code inside the `ingredient` function can see the `factor` binding from the outer `hummus` function

 But its local bindings, such as `unit` or `ingredientAmount`, are not visible in the outer function.

```note
 Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope.
 This approach to binding visibility is called lexical scoping.
```

## Functions as Values 


## Function declaration

```js

function square(x){
    return x*x ;
}
```
- earlier a binding `const square` refered to a function

- now we start statement with the `function` keyword 

- this is a function declaration



### arrow functions 
Earlier we defined functions like so:

```js 
const square = function(x){return x*x};

//or

function square(x){ return x*x ; }

```
now with arrow functions we remove the function keyword and add an arrow from the parameter to the code block 

```js

const square = (x) => {return x*x}

//or if there is a single parameter
// and a single statement inside block

const square = x => x*x ;

// for no paramaters

const horn = () => {
    console.log('toot!');
}

```

if there are 2 parameters, and multiple statements

```js 
const power = (base,exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
    result *= base;
    }
    return result;
};

```

## The call stack 

```js 

function greet(who) {
console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

```

in the above function control flow :
1. call to greet causes control to jump to the start of the function (line2)
2. function calls console.log which takes control, does its jon, and then returns control to line 2
3. there it reaches the end of the greet function and returns to the place that called it line 4
4. the line after that (5) calls console.log again

Flow control of the program is

```
not in function
    in greet
        in console.log
    in greet
not in function
    in console.log
not in function
```

since the function has to jump back to the place it called , the computer must remember the context from which the call happened. 
The *call stack* is where this context is stored 

When a function is called the current context is stored on top of this stack 

when a function returns it remves the top context from the stack and uses that context to continue execution 

## Optional Arguments 

extra arguments do not produce an error, while passing too few will cause an undefined error 

``` js
function square(x) {return x*x}
console.log(square(4,true,"hedgehog")); // -> 16
```
therefore we can use this to our advantage and call a function with more than one argument
```js
function minus(a,b){
    if (b === undefined) return -a;
    else return a-b;
}

console.log(minus(10));

console.log(minus(10,5));
```

### default argument

we can pass a value to a a parameter so that in case we do not pass the argument the default value will take its place 

```js
function power(base, exponent =2){
    let result =1;
    for(let count=0;count<exponent;count++){
        result *= base
    }
    return result;
}

console.log(power(4));
console.log(power(2,6));

```

## Closure

1. local bindings ( inside the function) are recreated everytime a function is called 


IN the following function  there is a local binding. 
the function return a function that accesses and returns this local binding

```js
function wrapValue(n){
    let local = n ;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

console.log(wrap1()); // 1
console.log(wrap2()); // 2

```

```js 
// const square = (x) => {return x*x}
// can also be 
// const square = x => x*x ;

function multiplier(factor){
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5)); // 10

```
1.  we call the multiplier function with argument = 2

2. this returns `number => number * 2` and is assigned to twice. 

3. therefore twice is now a function like const square :
    `let twice = number => number* 2 `

4. this takes so pracrice to get used too ! 

## Recursion

it is okay for a function to call itself as long as it doesnot overflow the call stack 

a function that calls itself is *recursive*

recursion allows functions to be written in a different style 

```js 
const power = function (base, exponent){
    let result = 1;
    for(let count=0;count<exponent; count++){
        result *= base;
    }
    return result;
}


// recursion 

function power(base, exponent){
    if (exponent == 0){
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

console.log(power(2,10));
```
in this case looping might be better than recursion due to readability 

```js 




## Growing Functions

say we have this code :

```js 

function printFarmInventory(cows,chicken){
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`)

    let chickenString = String(chicken);
    while(chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`)
}

printFarmInventory(2,10);

```

but we want to count the another animal so we could just add pigs as a parameter

```js

function printFarmInventory(cows,chicken,pigs){
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`)

    let chickenString = String(chicken);
    while(chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`)

    let pigsString = String(pigs);
    while(pigsString.length < 3) {
        pigsString = "0" + pigsString;
    }
    console.log(`${pigsString} Pigs`)
}

printFarmInventory(2,10,5);
```

BUT !
instead of copying and pasting the previous lines of code, we can :
1. have 2 seprate functions

```js 
function printZeroPaddedWithLabel(number, label){
    let numberString = String(number);
    while (numberString < 3) {
        numberString = '0' + numberString
    }
    console.log(`${numberString} ${label}`)
}

function printFarmInventory(cows,chicken,pigs){
    printZeroPaddedWithLabel(cows,"Cows")
    printZeroPaddedWithLabel(chicken,"Chicken")
    printZeroPaddedWithLabel(pigs,"Pigs")
}

printFarmInventory(7,50,6);

```

2. modified it a bit, by removing the label and return the `String number` with the correct amount of 0 attached. 

```js

function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
    string = "0" + string;
    }
    return string;
}

function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}
    
    
printFarmInventory(7, 16, 3);

```

3. since we know the default width is 3 , so we don't have to pass 3 all the time, and we can pass a custom width if we want too 

```js
function zeroPad(number, width=3) {
    let string = String(number);
    while (string.length < width) {
    string = "0" + string;
    }
    return string;
}

function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows)} Cows`);
    console.log(`${zeroPad(chickens)} Chickens`);
    console.log(`${zeroPad(pigs)} Pigs`);
}
    
    
printFarmInventory(7, 16, 3);
```

BUT resist the urge to add too many features unless we are absoluteluy sure we need it.

## Functions and their side effects

functions either return values or have side effects

in the previous section we had 2 functions where zeroPad() return a value while printFarmInventory() had a side effect 

1. a pure function:
    - produces a value 
    - has no side effects
    - is not affected by side effects from other code ie changes in global variables from other functions
    - always produces the same results for the same arguments

## Summary 

```js 

// define f to hold a function value 
const f = function(a) {
    console.log(a+2);
}

// Declare g to be a function

function g(a,b) {
    return a * b * 3.5;
}

// arrow functions 

let h = a => a % 3;

// where h is the binding
// a is the parameter
// a%3 is the code block

```
1. each code block creates a new scope 
2. parameters and bindings declared in a given scope are local and not visible from the outside 
3. bindings declared with var behave differently 
    - they end up in the nearest function scope or the global scope 
4. separating the tasks of the programs into different functions are helpful 
