## Higher Order Functions

### Abstractions 

Abstractions hide details and give us the ability to talk about problems at a higher level 

ex : 

`console.log(sum(range(1, 10)))` where sum , range are functions defined by user and we are unable to see them. 



#### Abstracting repetition

```js
for(let i = 0; i <10; i++){
    console.log(i);
}


// log something n times

function repeatLog(n){
    for (let i = 0; i < n; i++){
        console.log(i);
    }
}

//repeat some action n times 

function repeat(n,action){
    for (let i=0; i<n ; i++){
        action(i);
    }
}

repeat(3,console.log)

```
we can create a function value on the spot , inside the function call for `repeat()`

```js
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
    action(i);
    }
}
    
    
let labels = [];

// we define the action inside the function call!
repeat(5,i => {
    labels.push(`Unit ${i+1}`);
});

console.log(labels);

// -> ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]
```
This is structured a little **like a for loop**—it first describes **the kind of loop and then provides a body**.

 However, the body is now written as a function
value, which is wrapped in the parentheses of the call to repeat. 

This is why it has to be closed with the closing brace and closing parenthesis.

In cases like this example, where the body is a single small expression, you could also omit
the braces and write the loop on a single line.(below)

```js
let labels = [];

// we define the action inside the function call!
repeat(5,i => labels.push(`Unit ${i+1}`));

console.log(labels);
```

---

### Higher order functions

1. Higher order functions take in other functions as arguments or return other functions. 

