---
title: Values Types and Operators
---

## bits 

example: 
13 is the same as 00001101 where we start from index 0 on the right 

- index 0 = 2^0 = 1, index 0 has a 1
- index 1 = 2^1 = 2, index 1 has a 0
- index 2 = 2^2 = 4, index 2 has a 1
- index 3 = 2^3 = 8, index 3 has a 1 

therefore $ 13 = 8*1 + 4*1 + 2*0 + 1*1 $
since the rest of the indexes are a 0 we dont need to calculate them !

## Numbers 

There is only one type of number : number


```js 

console.log(typeof 1.23) // number
console.log(typeof 2) //number 

```
The way the number is written decides whether it is an integer or float 
but there are no types of these 

1. integers : 150611 ( always precise)
2. floats : 1.5623      
3. exponents : 2.99e8 $(2.99*10^8)$

Precision is affected by the number of bits available

### Arithmetic

1. uses precedence of operators for calculations
2. or we can use () to create custom precedence 
3. Infinity, -Infinity, NaN ( Not a number) are special values of the type number 

## Strings

1. represented with single or double quotes 
2. or we can use back ticks 

```Js
"Hello World!"
'Hello World!'
`Hello World`
```
3. escape quotes using a backslash 
    - \n, \t, etc 
4. strings are modelled as a series of bits. 
This is done using unicode, where each character is assigned a number. 
This includes characters from every language
5. Strings cannot be divided , multiplied or substracted 
6. we can use the + operator to join 2 strings (concatenation)
7. strings have associated methods that can be used to perform other operations on them 
8. backtick quoted strings usually called *template literals* . 
When you write something inside a ${} in a template literal, the result is computed and converted into a string . 
 ```js 

 console.log(`half of 100.0 is ${100 / 2 }`)

 output >> half of 100.0 is 50

 ```

 ## Unary Operators 

 Operators that use one value are Unary Operators
    - typeof only needs one value
    - + needs 2 ( binary operator)
    - - is both unary and binary

```Js

console.log(typeof 4.5) ; //number

console.log(2+3) ; // 5

console.log( - (10-2)); // -8

```

## Boolean Values 

1. result in a true or false 

2. comparison operations results in boolean values 


## Logical operators 

1. and &&
2. or  ||
3. not !

4. precedence lowest from left is :

|| , &&, (comparison operators  >, == , <), etc 


## Ternary Operators 

also called the conditional operator and 
as the name suggests needs 3 values 
- written with a ? and a :
- when true picks the value on the left of :
- when false picks the value on the right of :

```js 

console.log(true ? 1 : 2 ); // 1

console.log(false ? 1 : 2 ); // 2

```

in the above we use the keywords true and false , but we can replace these with a conditional 

```js 

console.log( 1 > 2 ? 'yes' : 'no' ); // no

console.log( 1 < 2 ? 'yes' : 'no' ); // yes

```

## Empty Values 

1. denotes the absence of a meaningful value 
    - null 
    - undefined 

2. they themselves are values but do not carry information


## Automatic type conversion 

- when an operator is applied to the wrong type of value JS will quietly convert the value to the type it needs!
- this is called type coercion 
- recommended that 3-characted comparison operators be as a defense against weird JS type coercion 
    - === precisely equal operator
    - !== precisely not equal operator 

## SHortcircuiting logical operatos 

``` js 

console.log( null || 'user') ; // returns user 

console.log( 'Agnes' || 'user'); // returns user 

```

here if value on left is true then return left value less returns the right value !

so if we have a value that might become empty we can put it on the left and add a replacement on the right !

in js O, Nan, empty string ("") are false , while all other values are true 


```js
console.log(0 ? 'true':'false'); // false
console.log(1 ? 'true':'false'); // true
console.log("" ? 'true':'false'); // false
console.log(NaN ? 'true':'false'); // false
console.log('some text' ? 'true':'false'); // true

```

therefore 

```js
console.log( "" || "!?"); // !?
console.log( 0  || -1); // -1

console.log( true || X ); // always true doesnot matter what X is . I didnt even define it !

// same for false && X 
console.log( false && X ); // false

// X is ignored 
```

ignoring the right side (X is never evaluated) is called short circuit evaluation. 


The conditional operator works the same way 

