/*
Everything in Javascript happens inside the Execution Context

Execution context has two components: 
 1. Memory allocation phase(variable environment creation):  Variables and functions are stored as key-value pairs
 2. Code execution phase(thread of execution): where code is executed one line at a time.

Javascript is a synchronous single-threaded language.
   single-threaded: executes one command at a time
   synchronous: goes to next command only if current command has executed

what is Ajax : Asynchronous jax?

Understanding Execution context of javascript code:

var n=2;
function square(num) {//num is the parameter of the function
    var ans = num * num;
    return ans;
}
var square2 = square(n);//n is the argument of the function
var square4 = square(4);

when you run the above code a global execution context is created in two phases.

Phase-1(Memory Creation phase): Here, javascript allocates memory to all variables and functions after going through the code line by line.
-------------------------------------------------
n: undefined
square: [stores entire definiton of the function]
square2: undefined
square4: undefined
-------------------------------------------------
undefined is a placeholder, it is a special keyword in javascript

Phase-2(Code execution phase): Here, code is executed line by line from start to end.

n: 2 // now undefined is replaced by the 2.
next line is function definition so it just skips it as it is not an executable code.
square2 = square(n) // here, function is invoked. here new execution context(again 2 phases) is created with respect to the function. now square2=4 and execution context is deleted.
likewise square4 = square(4); and square4 = 16;

All this is done using call stack of javascript;

Code snippet
------------

getName();//calling function before it's definition is compiled.
console.log(x);//calling a variable without even initializing it.
console.log(getName);

var x = 7;
function getName() {
    console.log("Hello");
}

getName();
console.log(x);
console.log(getName);


output: 
index.js:8 Hello
index.js:2 undefined
index.js:3 ƒ sayHello() {
    console.log("Hello");
}
index.js:4 undefined
index.js:8 Hello
index.js:16 7
index.js:17 ƒ sayHello() {
    console.log("Hello");
}
index.js:18 ()=> {//arrow function
    console.log("Hi");
}//Hoisting in javascript
Try to explain the resulted output using the concept of Execution context of javascript

*/
