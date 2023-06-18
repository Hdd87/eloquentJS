
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

a) Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the
string.

b) Next, write a function called countChar that behaves like countBs, except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to
make use of this new function


solution  a: 

```js
let count = 0;

function countBS (sometext) {
     for(let i in sometext){
        if (sometext[i] == 'B'){
            count++
        }
     }
     return count
}

// OR

function countBS (sometext) {
    let count = 0;
     for(let i in sometext){
        if (sometext[i] == 'B'){
            count++
        }
     }
     return count
}

//OR

function countBS (sometext) {
    let count = 0;
     for(let i=0; i<sometext.length; i++){
        if (sometext[i] == 'B'){
            count++;
        }
     }
     return count;
}

console.log(countBS('BeebBop'));

```

solution b: 

```js 
function countChar(someText, someChar){
    let count = 0 ; 
    for (let i in someText){
        if(someText[i] == someChar){
            count++;
        }
    }
    return count
}

console.log(countChar('Cowboy BeepBop', 'w'));
```