

What is a **Block**?
* Block aka *compound statement* is used to group JS statements together into 1 group. We group them within {...}
    ```js
    {
        var a = 10;
        let b = 20;
        const c = 30;
        // Here let and const are hoisted in Block scope,
        // While, var is hoisted in Global scope.
    }
    ```

* Block Scope and its accessibility example
    ```js
    {
        var a = 10;
        let b = 20;
        const c = 30;
    }
    console.log(a); // 10
    console.log(b); // Uncaught ReferenceError: b is not defined
    ```
    * Reason?
        * In the BLOCK SCOPE; we get b and c inside it initialized as *undefined* as a part of hoisting (in a seperate memory space called **block**)
        * While, a is stored inside a GLOBAL scope. 

        * Thus we say, *let* and *const* are BLOCK SCOPED. They are stored in a separate mem space which is reserved for this block. Also, they can't be accessed outside this block. But var a can be accessed anywhere as it is in global scope. Thus, we can't access them outside the Block.

What is **Shadowing**?

* ```js
    var a = 100;
    {
        var a = 10; // same name as global var
        let b = 20;
        const c = 30;
        console.log(a); // 10
        console.log(b); // 20
        console.log(c); // 30 
    }
    console.log(a); // 10, instead of the 100 we were expecting. So block "a" modified val of global "a" as well. In console, only b and c are in block space. a initially is in global space(a = 100), and when a = 10 line is run, a is not created in block space, but replaces 100 with 10 in global space itself. 
    ```

* So, If one has same named variable outside the block, the variable inside the block *shadows* the outside variable. **This happens only for var**

* Let's observe the behaviour in case of let and const and understand it's reason.
    ```js
    let b = 100;
    {
        var a = 10;
        let b = 20;
        const c = 30;
        console.log(b); // 20
    }
    console.log(b); // 100, Both b's are in separate spaces (one in Block(20) and one in Script(another arbitrary mem space)(100)). Same is also true for *const* declarations.
    ```


* Same logic is true even for **functions**
    ```js
    const c = 100;
    function x() {
        const c = 10;
        console.log(c); // 10
    }
    x();
    console.log(c); // 100
    ```

What is **Illegal Shadowing**?

* ```js
    let a = 20;
    {
        var a = 20;
    }
    // Uncaught SyntaxError: Identifier 'a' has already been declared
    ```
    * We cannot shadow let with var. But it is **valid** to shadow a let using a let. However, we can shadow var with let.
    * All scope rules that work in function are same in arrow functions too.
    * Since var is function scoped, it is not a problem with the code below.
        ```js
        let a = 20;
        function x() {
            var a = 20;
        }
        ```

**Global Object**

The global object is an object that provides the environment for JavaScript code execution. In browsers, the global object is the window object (or globalThis for a more environment-agnostic reference).

Properties of the Global Object:

* Variables declared using *var* in the global scope become properties of the global object.
* Functions declared in the global scope also become properties of the global object.
* The global object contains built-in properties and methods like console, setTimeout, Math, etc.
    ```javascript
    var a = 10; // Global variable
    console.log(window.a); // 10
    console.log(globalThis.a); // 10
    ```

    ```javascript
    function greet() {
        console.log("Hello!");
    }
    console.log(window.greet); // Function definition
    ```
**Script Object**

The script object is specific to the ES6 *let* and *const* declarations in the global scope. These variables do not become properties of the global object. Instead, they are bound to the script itself.

Variables declared using let or const are not added to the global object:

```javascript
let b = 20;
console.log(window.b); // undefined
console.log(globalThis.b); // undefined
```
* This behavior avoids polluting the global object and minimizes the risk of naming conflicts.

* The distinction exists to reduce unintended side effects:

    > Pollution of Global Object: Using var in the global scope adds unnecessary properties to the global object, increasing the likelihood of name clashes. let and const avoid this.

    > Predictable Behavior: Since let and const are block-scoped and not attached to the global object, they behave more predictably and adhere to modern scoping rules.


<hr>