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




