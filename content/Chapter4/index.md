## Data Structures : Objects and Arrays 

### Arrays 

```js
let listOfNumbers = [2,3,4,5,6,7] ;

console.log(listOfNumbers[2]);
// → 5
console.log(listOfNumbers[0]);
// → 2
console.log(listOfNumbers[2 - 1]);
// → 3

```

#### Accesing properties 

All values in javascript have properties except for `null` and `undefined`:
    - length property
    - max property in Math 

the main ways to access properties are:
    - value.property

    - value[property]

in `value.property`, the name after the dot is the literal name of the property

in `value[property]`, the expression inside the [] is evaluated to get the property name

for example : 
- `value.x` fetches the property x of value
- whereas `value[x]` tries to evaluate x and uses the result converted to a string as the property name

therefore:
- if you know the property name is length use `value.length`
- if you want to extract the property named by the value held in binding i use `value[i]`

property names are strings 
- but dot notation works only with names that look like valid bindings ( recall naming convention)
- therefore use [] notation for names that do not according to naming convention 
    - ex: 2 or John Doe 
    - `value[2]`
    - `value["John Doe"]`


- elements in an array are stored as its properties 

- we have to use [] notation to get at the numbers in arrays

#### Methods

- Methods are properties that contain functions

- some JS array methods [click here](https://www.w3schools.com/js/js_array_methods.asp)

some important methods for arrays 

- push : adds values to the end of the array

- pop : removes last value and returns it 

These names are traditional terms for operations of a stack. A stack is data structure which we can push and pop values so that the last added value is removed first !

```js
let sequence = [1,2,3]
sequence.push(4);
sequence.push(5);
console.log(sequence);
console.log(sequence.pop());
console.log(sequence);

x = sequence.pop()
console.log(`x is ${x}`)
console.log(sequence);

```


### Objects 

Values of the type object are arbitrary collections of properties 

```js 

let day1 = {
    squirrel : false, 
    events: ["work", "touched tree", "pizza", "running"]
}; 

console.log(day1.squirrel); // false

console.log(day1.wolf); // undefined

console.log(day1.events)

console.log(day1.events[0])

```

1. objects are created using {}

2. contains properties separated by commas

3. each property is made up of a name and value separated by a :

4. property names that are not valid binding names are written within quotes

#### Add/Change a property/property value

 we can change the value of a property of create a new property if one did not exist using the = operator 
```js
day1.wolf= "Grey wolf";

console.log(day1.wolf)

```

#### delete operator 

if you want to remove a property use the unary `delete` operator 

```js 
let anObject = {
    left: 1, 
    right: 2
};

delete anObject.left; 

console.log(anObject.left);

```

#### check if a property exists

use the binary `in` operator which returns `true` or `false`

```js
let anObject = {
    left: 1, 
    right: 2
};

delete anObject.left; 

console.log('left' in anObject); 

console.log('right' in anObject);

```

#### see all properties of an object 

we can use the function Object.keys()

```js 
let someObject = {
    x: 0,
    y: 0,
    z: 2
};

console.log(Object.keys(someObject));

//OR

console.log(Object.keys({
    x: 0,
    y: 0,
    z: 2
}))

```

#### copy all properties from one object to another 
assign properties from object B to object A 

```js 
let objectA = {
    a:1,
    b:2
};

let objectB = {
    b:3, 
    c:4
}

Object.assign(objectA, objectB);

// or type in the object values at once

Object.assign(objectA, {b:3, c:4});


console.log(objectA)

```


#### Arrays are just a kind of object

They are specialized for storing sequences of things

```js 
let journal = [
{events: ["work", "touched tree", "pizza",
"running", "television"],
squirrel: false},
{events: ["work", "ice cream", "cauliflower",
"lasagna", "touched tree", "brushed teeth"],
squirrel: false},
{events: ["weekend", "cycling", "break", "peanuts",
"beer"],
squirrel: true},
/* and so on... */
];


console.log(journal[0]) // information inside index 0

console.log(journal[1]['events']) // access evnts object in index 1

console.log(journal[1]['squirrel']) // access index 1 squirrel status

```

### Mutability 

1. recall that object values can be modified 

2. if there are two numbers 120 and 120 they are precisely the same number, whether or not they refer to the same physical bits 

3. with objects there is difference between :
    - having references to the same object
    - having two objects that contain the same properties 

4. consider the following code :
    
```js 

let object1 = {value: 10};

let object2 = object1;

let object3 = {value: 10};

console.log(object1 == object2); // true

console.log(object1 == object3); //false

object1.value = 15; 

console.log(object1 == object2); // true

console.log(object2.value); //15

```

5. the object1 binding and the object2 binding grasp the same object 
    - which is why changing object1 also changes the value of object2
    - these two are said to have the same identity 

6. object3 points to a different object 
    - has the same properties as object1 but lives a separate life 

7. with the `let` binding you can keep track of the changes to the bindings with objects whilst the `const` binding points at the same object  but the contents of the object can change

``` js 

const score = { visitors: 0, home: 0};

score.visitors = 1 ;  // allowed

score = { visitors: 1 , home: 1} // not allowed 
```
```js 
let journal = [];

function addEntry(events, squirrel){
    journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running",
"television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
"touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
"beer"], true);


console.log(journal);

```

## Correlation between boolean variables

1. use the phi coefficient which equals:

2. $(n_{11}n_{00} - n_{10}n_01 )/ sqrt(n_{1.}n_{0.}n_{.1}n_{.0})  $

3. if there are 2 variables x,y ( x is first variable, y is second variable)
    - n01 : x is false y is true
    - n1. : sum of measurements where 1st variable is true
    - n.0 : sum of measurements where 2nd variable is false 


Example :

1. no squirrel , no pizza : 76
2. no squirrel, pizza : 9
3. squirrel, no pizza : 4
4. squirrel, pizza : 1

```js 

// direct traslation of the phi formula

let n00 = 76, n01 =9, n10 = 4, n11 = 1;

let table = [n00,n01,n10,n11] ;

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) * // sum 1st true
    (table[0] + table[1]) * // sum 1st false
    (table[1] + table[3]) * // // sum 2nd true
    (table[0] + table[2])); // // sum 2nd false


}

console.log(phi(table)) // 0.069

```

<!-- TODO: figure out how to obtain data in another folder into a .js file for computation -->


### Other useful array methods

1. for adding or removing elements at the end of an array we use pop and push respectively

2. for adding and removing at the start of an array we use unshift and shift respectively

```js
let todoList = [];

function remember(task) {
todoList.push(task);
}

function getTask() {
return todoList.shift();
}

function rememberUrgently(task) {
todoList.unshift(task);
}

// 'phone bill', 'internet bill', 'electricity bill'

remember('groceries');
remember('phone bill');
remember('internet bill');
remember('electricity bill');

console.log(todoList)

console.log(getTask());

console.log(todoList);

rememberUrgently('water bill')

console.log(todoList);

```

3. use indexOf() returns the index of the requested value 
    - use lastIndexOf() to search from the end of the array instead of index 0
    - Both indexOf and lastIndexOf take an optional second argument that indicates where to start searching.

```js
// returns index of value 2
console.log([1, 2, 3, 2, 1].indexOf(2)); // → 1

// search from index -1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));// → 3

```

4. Another fundamental array method is slice, which takes start and end indices and returns an array that has only the elements between them. The start
index is inclusive, the end index exclusive.
 

```js
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]
```

5. concat and slice in action below 
    - here we slice upto a provided index 
    - then concat the sliced array to all elements after the index

```js 

function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]

```


## JSON : JS Object Notation

1.  objects and arrays are stored in the computer’s memory as sequences of bits holding the
addresses—the place in memory—of their contents.

2.  So an array with another
array inside of it consists of (at least) one memory region for the inner array,
and another for the outer array, containing (among other things) a binary
number that represents the position of the inner array

3. to send this information we have to *serialize* the data 

    - That means it is converted into a flat description

    - A popular serialization format is called JSON (pronounced “Jason”), which stands for JavaScript Object Notation. 
    
    - It is widely used as a data storage and communication format on the Web, even in languages other than JavaScript

4. similar to JavaScript’s way of writing arrays and objects, with a
few restrictions. All property names have to be surrounded by double quotes,
and only simple data expressions are allowed—no function calls, bindings, or
anything that involves actual computation. Comments are not allowed in
JSON

```js 
let myData = {
    "squirrel": false,
    "events": ["work", "touched tree", "pizza", "running"]
}
    
console.log(typeof myData); // object

```

5. JavaScript gives us the functions JSON.stringify and JSON.parse to convert
data to and from this format

```js 
let string = JSON.stringify({
    squirrel: false,
    events: ["weekend"]});


    console.log(string);     // → {"squirrel":false,"events":["weekend"]}


    console.log(JSON.parse(string).events);     // → ["weekend"]

```
