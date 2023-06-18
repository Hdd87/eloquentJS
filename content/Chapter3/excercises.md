
1. write a function that takes in 2 arguments and returns their minimum 
    - recall Math.min

solutions: 

```js 
function returnMin (a,b) {
    return Math.min(a,b)
}

console.log(returnMin(2,10))
```

as an assigned binding

```js 
const returnMin = function(a,b){return Math.min(a,b);} ;

console.log(returnMin(2,10))

```


as an arrow function
```js 

let returnMin = (a,b) => Math.min(a,b);

console.log(returnMin(2,10))

```

---

2. 