## Excercises for chapter 4 

## 1. Sum of a range 

A nice way to compute the sum of a range is:

```js 
console.log(sum(range(1, 10)));

```
Write a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the
sum of these numbers. Run the example program and see whether it does
indeed return 55.

```js 
function range(start, end){
    let containerArray = [];
    for(let i = start; i <= end; i++){
        // console.log(i);
        containerArray.push(i);
    }
    return containerArray;
}

function addArray(someArray) {
    let total = 0;
// for of iterates through the values of 
// an iterable object
    for (let value of someArray){
        total += value;
    }
  return total;
}

console.log(addArray(range(1,10)));

```

bonus: 

as a bonus assignment, modify your range function to take an optional third
argument that indicates the “step” value used when building the array. If no
step is given, the elements go up by increments of one, corresponding to the
old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
9]. Make sure it also works with negative step values so that range(5, 2, -1)
produces [5, 4, 3, 2].

```js

function range(start, end, step=1){
    let containerArray = [];
    if (step > 0){
        for(let i = start; i <= end; i+= step){
            // console.log(i);
            containerArray.push(i);
        }
    }
    else{
        for(let i = start; i >= end; i+= step){
            // console.log(i);
            containerArray.push(i);
        }
    }
  return containerArray;
}

function addArray(someArray) {
    let total = 0;
// for of iterates through the values of 
// an iterable object
    for (let value of someArray){
        total += value;
    }
  return total;
}

// console.log(range(5,2,-1))
console.log(addArray(range(1,10)));



```
---

## 2. Reversing an Array 

Arrays have a `reverse` method that changes the array by inverting the order in
which its elements appear. For this exercise, write two functions, reverseArray
and reverseArrayInPlace.

The first, reverseArray, takes an array as argument
and produces a new array that has the same elements in the inverse order. The
second, reverseArrayInPlace, does what the reverse method does: it modifies
the array given as argument by reversing its elements

Neither may use the
standard `reverse` method

```js

// creates a new array with elements in inverse order
function reverseArray(someArray){
    let newReverseArray = []
    for(let i=someArray.length - 1; i >= 0 ; i--){
        newReverseArray.push(someArray[i]);
    }
    return newReverseArray
}

// modifies argument array so that its elements are in reverse

function reverseArrayInPlace(someArray){
    for(let i = 0; i < Math.floor(someArray.length/2);i++){
        let old = someArray[i];
        someArray[i] = someArray[someArray.length - 1 - i];
        someArray[someArray.length - 1 - i] = old;
    }
    return someArray;
}


// console.log(reverseArray([1,2,3]));

// console.log(reverseArrayInPlace([4,5,6]))



```

---

## 3. A list 

1. objects can be used to build all sorts of data structures 

2. a common data structure is the list

3. a list is a nested set of objects, with the first object holding reference to the second, the second to the third and so on. 

```js 
let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};


```

Write a function `arrayToList` that builds up a list structure like the one shown when given [1, 2, 3] as argument.

Also write a `listToArray` function that produces an array from a list.


Then add a helper function `prepend`, which takes an element and a list and creates a new list that adds the element to the
front of the input list, 

and `nth`, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

```js
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return {value, rest: list};
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

```


---

## deep equal 

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator.

If it produces "object" for both values, you should do a deep comparison.

But you have to take one silly exception into account: because of a historical
accident, typeof null also produces "object


```js
function deepEqual(a, b) {
    if (a === b) return true;
    
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
  
    let keysA = Object.keys(a), keysB = Object.keys(b);
  
    if (keysA.length != keysB.length) return false;
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
  
    return true;
  }
  
  let obj = {here: {is: "an"}, object: 2};
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, {here: 1, object: 2}));
  // → false
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
  // → true

```