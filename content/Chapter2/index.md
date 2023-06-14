---
Title: Program Structure 
---

## expressions and statements 

1. an expression :
- a fragment of code that produdes a value 
- think of it a sentence fragment
    - 22
    - 'psychoanalysis'

2. a statement: corresponds to a full sentence 
- the simplest statement can be an expression with a ; at the end 
    - 1;
    - !false;
- we can omit the semicolon in some cases 
- but better to have one since the rules for and omitting the ; are complex !

## Bindings

1. To catch and hold values JS provides variables (bindings)

```js 

let caught = 5 * 5 ; // statement

caught // expression

console.log(caught * caught) ; // we use the expression else where

```

2. bindings do not point at a value for ever 

```js 
let mood = "light";
console.log(mood); // → light

mood = "dark";
console.log(mood); // → dark
```

3. therefore bindings do not contain values , they grasp them ( like tentacles!)

    - two bindings can refer to the same value 

```js 
let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt); // → 105

```

4. a let statement can define many bindings 

``` js 

let one = 1, two = 2;
console.log(one + two);
// → 3
```

5. words `var` and `const` can also be used to define bindings 
    - var was used to declare bindings pre-2015 js 
    - const is constant ,so points at the same value as long as it exists 

```js
var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);
// → Hello Ayda

```

### Binding names

1. can be any word 
2. can have digits but cannot start with a digit
3. can have $ or _ 
4. no other special or punctuation characters allowed
5. no keywords allowed
6. results in a syntax error 

```js 
const let = 5 ;
console.log(let)

SyntaxError: let is disallowed as a lexically bound name

```

### Environment 

The collection of bindings and their values that exist at  a given time is called the *environment*.

1. When a program starts up, this environment is not empty. It always contains bindings that are part of the language standard, and most of the
time, it also has bindings that provide ways to interact with the surrounding
system. For example, in a browser, there are functions to interact with the
currently loaded website and to read mouse and keyboard input


## Functions

A function is a piece of program wrapped in a value. Such values can be applied
in order to run the wrapped program. 

example :

- console.log() function

### return values 

1. writing text to a screen
2. showing a dialog box 

These are some of the side effects of a function

3. functions also produce values 
    - this is called *return value*
    - anything that produces a value is an expression in JS
    - therefore we can use functions in larger expressions
    - example ues the Math.min() and add return value to a 100

```js 
console.log(Math.min(2, 4) + 100);

```

### Flow Control 

1. straight flow  
    - go from point 1 to point 2 in a straight line

```js
let theNumber = 5 ;
console.log("Your Number is the square root of " + theNumber * theNumber)

```

2. conditional execution 
    - travel from point 1 to point 2 can have 2 or more paths 
    - each path depends on a condition
    - if condition is true we go on that path 
    - if statement works only if condition is true

```js 
let num = 25;

if (num < 10) {
console.log("Small");
} else if (num < 100) {
console.log("Medium");
} else {
console.log("Large");
}



```

3. looping 

- a while loop: runs until condition becomes false 

```js 
let number = 0 

while(number <= 12){
    console.log(number);
    number += 2;
}

// output 2^10 
let result = 1;
let counter = 0 ;
while (counter<10){
    result = result * 2 ; 
    counter += 1 ; // we always iterate counter to ensure no infinite loop 
}
console.log(result); // outputs only 2^10

```

- for loop : runs when condition is true

```js

let result = 1;

// the for condition is for the counter not the result
// it is initialized, gives an endpoint to createa false condition, gives an iteration
for (let counter = 0; counter < 10; counter = counter + 1) {
    result = result * 2;
}
console.log(result);

```

#### breaking out of loop 

```js
for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
    console.log(current);
    break;
    }
}

```
Here there is no part that checks for the end of the for loop 
but we add an if statement with a  break statement which stops the loop


