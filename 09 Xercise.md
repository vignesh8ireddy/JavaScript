### Guess the output of the following code snippets

Code 1
```js 
function scopeTest() {
    console.log(a);
    let a = 5;
    console.log(a);
}
scopeTest();
```
Code 2
```js
let x = 10;
if (true) {
    let x = 20;
    console.log(x);
}
console.log(x);
```
Code 3
```js
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 1000);
}
```
Code 4
```js
function outer() {
    let outerVar = "I’m outer!";
    return function inner() {
        console.log(outerVar);
    };
}
const innerFunc = outer();
let outerVar = "I’m global!";
innerFunc();
```
Code 5
```js
let a = 10;
function foo() {
    console.log(a);
    let a = 20;
    console.log(a);
}
foo();
```
Code 6
```js
let b = 5;
function test() {
    console.log(b);
    if (true) {
        let b = 10;
    }
}
test();
```
Code 7
```js
let c = 100;
{
    let c = 200;
    {
        let c = 300;
        console.log(c);
    }
    console.log(c);
}
console.log(c);
```
Code 8
```js
var d = 1;
function check() {
    if (!d) {
        var d = 2;
    }
    console.log(d);
}
check();
```

### Explanations

Code 1
```js 
function scopeTest() {
    console.log(a);
    let a = 5;
    console.log(a);
}
scopeTest();
```
Output:
>ReferenceError: Cannot access 'a' before initialization

Explanation:
>Variables declared with let are in the Temporal Dead Zone (TDZ) from the start of the block until the declaration is executed. The first console.log(a) tries to access a before it’s initialized.

Code 2
```js
let x = 10;
if (true) {
    let x = 20;
    console.log(x);
}
console.log(x);
```
Output:
>20<br/>
>10

Explanation:
>The let keyword creates block-scoped variables. The first x is scoped to the if block and does not affect the outer x. The second console.log(x) refers to the outer x.

Code 3
```js
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 1000);
}
```
Output:
>3, 3, 3<br/>
>0, 1, 2

Explanation:
>var i is function-scoped, so the same i is shared across all iterations. By the time setTimeout runs, i has already incremented to 3.
let j is block-scoped, so each iteration creates a new j specific to that block.

Code 4
```js
function outer() {
    let outerVar = "I’m outer!";
    return function inner() {
        console.log(outerVar);
    };
}
const innerFunc = outer();
let outerVar = "I’m global!";
innerFunc();
```
Output:
>I’m outer!

Explanation:
>The inner function inner() forms a *closure*, capturing the outerVar from the outer() function's scope when it was created. It doesn’t access the global outerVar.



Code 5
```js
let a = 10;
function foo() {
    console.log(a);
    let a = 20;
    console.log(a);
}
foo();
```
Output:
>ReferenceError: Cannot access 'a' before initialization

Explanation:
>Similar to Code 1, the let a inside foo is in the TDZ. The first console.log(a) tries to access it before initialization.

Code 6
```js
let b = 5;
function test() {
    console.log(b);
    if (true) {
        let b = 10;
    }
}
test();
```
Output:
>ReferenceError: Cannot access 'b' before initialization

Explanation:
>The let b = 10 inside the if block creates a new block-scoped variable b. Due to the TDZ, the console.log(b) inside test cannot access the outer b until after the block-scoped b is initialized.

Code 7
```js
let c = 100;
{
    let c = 200;
    {
        let c = 300;
        console.log(c);
    }
    console.log(c);
}
console.log(c);
```
Output:
>300<br/>
>200<br/>
>100

Explanation:
>Each let c creates a new block-scoped variable c. The innermost console.log(c) accesses 300, the next accesses 200, and the last accesses the global c with value 100

Code 8
```js
var d = 1;
function check() {
    if (!d) {
        var d = 2;
    }
    console.log(d);
}
check();
```
Output:
>2

Explanation:
>The var d inside the check function shadows the global d. Inside d is hoisted but uninitialized within the function scope so !undefined is true. The condition !false evaluates to true and prints 2 to the console.