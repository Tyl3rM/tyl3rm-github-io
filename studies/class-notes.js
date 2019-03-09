2.5 .19

// Loops: For loops often used to itterate over arrrays. Just repeating a block of code, 
// no specific link to an array. 

// Loops: While loops will run as long as the given statement is true. Must set stopping condition,
// or you'll create an infinite loop. Infinite loops will crash the computer. 

// Loops: 3 Steps to define a for loops. 1. where to strop. 2. how long should i loop. 3. what changes each time.

// Loops: 2 steps to define for in loops. 1. how will you refer to keys? 2. which object you want to loop over?

// Object Access: Objects and arrays hold value. They use curly braces to contain the key value pairs. 
// They are accessed by using square brackets or dot notation. 

// Storing Values in Collections: Objects store values in non ordered key value pairs. 
// Arrays are stored in zero indexed lists. They start at zero and go up hy one. 

// What are... properties or methods: .length is a static value for array or string values. 
// Methods are reproducable objects stored on an object. .toLowerCase() Has to be called with ()

// Properties and Methods of Collections: Arrays - .concat .includes .pop .slice .push
// Objects - .hasOwnProperty .valueOf .toString (See more on MDN) Double check all info on MDN

2.6 .19

// Scope: Imagine nested boxes. Global, Function, if:else, and loops. Each block is a different
// scope. Blocks are ended with ; Scope determines what we have access to. 

// Scope: child scope has access to its parent scope, but not vice versa. only way to have access
// to a variable within a funciton is if you return it.  

// Scope: Global scope, function scope, block scope. Var can escape block scopes, but not function
// scopes. 

// Hoisting: var declerations and function declerations are hoisted to top of scope. Different types
// hoisted differently. Var dec. only the name is hoisted, function whole body is hoisted. @runtime

// Hoisting: var can declared anywhere, available anywhere, but doesnt have value till assigned. 
// Functions expressions are similar, except they are assigned a value at all times. 

// Variable Dec Scopes: Var can be re-assigned, in global and local scope. Let can be re-assigned, 
// but it stays within its block scope. const cant be re-assigned, and is block scoped. try to use const. 

2.7 .19

// Scope/Vairable Access: 3 Scopes - Global | Function | Nested Function | Global only has access to 
// the variable declared in its own scope. Function has access to its and global, Nested 
// has access to all variables. 

// Closures: a functions with access to the parents scope even after the parent functions
// has closed. If doesnt access outside of function it's not a closure. 

// Closures: useful when returning functions from functions. Keep variables alived in returned
// functions. Clasure also works with accessing outside parameters. Keep dynamic variables alive.


// WEEK TWO //

2.11 .19

// Object Access: Objects/Arrays hold value differently. Accessing these values is different as well
// Arrays only bracket notation. Objects bracket and dot notation. Use bracket notation to be dynamic. 

// Storing Values: Ararys value are stored in ordered, numbered indices. The index starts at zero and 
// goes up by one. Objects store value in Key: Value pairs. 

// Adding Value: Array methods - .push .unshift .push .splice || 
//               Object methods - .dot notation [bracket notation]

2.12 .19

// String Manipulation - all string methods are pure function. Theyre pure because you cannot
// mutate simple datatypes. The string methods do not manipulate the original string, they create
// a new copy which the new changes. Primitive datatype copy by value.

2.13 .19

// Functions: a block of code we can reuse, to avoid writing code multiple times. Functions are made
// of a name, parameters, arguments, functions body, and a return statement. Call with function name,
// parenthesis, and arugments. Return isn't required. Arguments/Parameters arent required. 

// Defining Functions: function name (parameters) { body } Call: name(arguments). Two Ways to create a
// function are 1. Function Delceration 2. Functions Expressions declaring variable, assignging to function.

2.14 .19

// Functions assign paramters like variables.

2.18 .19

// Higher Order Functions: A function that either returns a new function or takes a function as an argument. 

// Exomple: filterStrings - What we are given: an array of strings. A one letter string. A test function that returns a boolean. 

// Set Up: Normally we are provided the function we implement. Function:     filterStrings (strings, char, test) { ... }
// Create a variable that can be returned by the function.                           var result = []; return result
// Search through your array.                                        for (var i = 0; i < strings.length; i++) var string = strings[i]
// Find what your need.                                                                   if ( ... ) { ... }
// Set condtion.                                                                   if (test(string, char)) { ... }
// Save.                                                                                { result.push(string) }

// What is the test returning? A boolean value.

// GET COMFORTABLE WITH THE DEBUGGER. Stops code wherever you place the keyword, Debugger.

2.19 .19

Presentations

2.20 .19

Presentations

2.21 .19

LoDown Set - Up

2.25 .19

// ECMAScript: widely agreed upon standard dictated by TC39 Working Group.

// ES6: 6th version of ECMAscriptm officialy known as ECMAScript2015. 

// Arrow Functions: Shorter syntax for function expressions. 

// Exponentiation Operator: Allows your to raise first operand to power of second operand. ** Binary operator

// HOISTING: process when interpreter loads variable and function declerations into memory during the compile phase.

// Interpreter: translates Javascript into Binary, high level source code, to low level machine code.  

// Compile Phhase: Hoists everything before anything is ever executed.

// Var Keyword: used to delcare variable. assignment not hoisted. reserves memory for variable. scoped to execution. 

// Function Keyword: used to declare a function. name and body are hoisted. must be named. 

// Interpreter: Makes two passes: 1. Scans and Hoists 2. Executes   Never physically moved. 

// Hoisting Rules: Happens before code execution. Function and Var hoisted to top of scope. 

// Pitfalls: Always declare variables at the top of scope. Use declerations, until you understand expressions implications.

2.26 .19

// Template literals: string interpolation, var firstname = "Tyler"; var lastName = "Mott"; var fullName = `${firstName} ${lastName}`; fullName: Tyler Mott

// Syntax: Back ticks `` & Dollar sign $ then Curly braces {variable/stringified}   `${anything, turns into string}`

// Variable Scope: refers to what variables are accessible and where we can access them. Global and Local Scopes. 

// Var vs Let/Const: var is only scoped by functions. let/const are scoped by their block.

// Variable Shadowing: a variable declared in lower scope will override and variable with same in in higher scope. 

// Function Parameters: create new function scoped variables from the paramaters. 

// Immediatly Invoked Function Expression (IIFE) : 
// var save = function (){];   var save = "I am saving this"   save() - Doesnt work, overwrites
// var save = funciton () {};  (function () {var save = "I am saving this" })(); - Works, no overwrite
//                                      anonymous function () - calling it                                        

// Closure: a clasure is a function that retains access to an outer (enclosing) functions variables even after the outer function has returned. 

// Closure Uses: partial application of functions. creating private variables. helps remember what the variable is currently equal to. 

// Private Variables: 
createAccount(initialAmt) {
    let balnnce = initialAmt;
    return {
        withdrawal: (amt) => {
            balance -= amt;
        },
        getBalance: () => balance,
    };
}
console.log
const createUser = (username, password) => {

}

2.27 .19

// ES6 - Default Parameters: allow you change the initial value of a parameter. (num 1 = 0, num2 = 0) Defaults if no argument given. 

// Value vs Reference: for pimitive datatypes you use copy be value. complex data is copied by reference. 

// Value: creates its own copy for the variable its assigning to.

// Reference: points its variable to the same object.

// Functions parameters follow the same exact rules when being assigned.

2.28 .19

    // Rest Parameters: offers a syntax for declaring a parameter that will hold all the arguments a function takes in. 
    ...variable
// It turns the arguments into an array so you can use array like methods.

// this: the this keyword refers to tje context in which a function is called. depends on how a function is invoked. 

// Always an object, or undefined. Only known at call time. 

// Invoke: Free Function. Method. Construction mode. Global reference. Using  .bind() .call() .apply()  

// Free Function Invocation: function called freely, refers to global window. 

// Method Invocation:    this.name    halleBot.sayName()    halleBot.name
//                         ^left         ^left

// .call: calls function, (what you want to bind, arg, arg, arg...)
// .apply: calls function, (what you want to bind, ["array", "stuff"]) 
// .bind: binds to function, no call, returns new function, (arg, arg, arg...)

// Construction Mode: start with capital usally denotes constructor function. Pizza(size) require     new     keyword

// Global Referemce: used in global context outside of function.
// left of the dot, most of the time. no dot, references global window. 

// Arrow Functions & this : arrow funcitons do not have their own this value, pull value from lexical scope. 

// setTimeout: a function that lets you run a function after some time has passed. 
// first arg is the func.
// second ar is how long to wait.

function myfunc() {
    console.log("Hello!");
}

setTimeout(myFunc, 1000);

3.4 .19

// Combining Complex Data Types: 
// Array.prototype.concat - method on all arrays that takes in any ammount of arrays and
// returns a new arreay with all the elements combined. Pure Function. array.concat(arr, arr1, arr2)
// Object.assign - is a function that takes in a target object and any other ammount of preceding objects. 
// It copies over each objects properties into the target object and then returns the object. Object.assign(target, parts)
// Can be pure by passing empty object as target {};

// Spread Operator: lets you spread out the contents of an interable into another iterable. 
//   ...   -  variablename       ...var     let var = [1, 2, 3]   let var2 = [4, 5, 6]
//  let all = [var, var2]   =>  [1, 2, 3, 4, 5, 6]   
//  Also works on object keys. 
const car = {
    color: 'grey',
    engine: {},
    wheels: {},
}

const redCar = {
    ..car,
    color: "red",
}

// Pure Functions: 
// Dertiministic - given same input, always produces same output
// Produces no side effects - all inputs are passed in, no use of global variable. NO return can indicate side effect.
// All pure functions are dertiministic. Not all dertiministic functions are pure.
// No side effect - does not mutate passed in value. Does not reference variables defined outside of function. Does not change application state.

// Make Copies:  .slice() .concat() Array.from()  [...copy]    {...copy}

// Why?  If possible use pure functions. However impure functions are sometimes necessary..
// Click Handlers, Network Calls, File Access, DOM manipulation


const capitalizeAll = string => string.replace(/ [a-z]/gi, x => x.toUpperCase()).replace(/\w/, x => x.toUpperCase());

const add = (acc, cur) => acc + cur;
const isBalanced = (nums1, nums2) => nums1.reduce(add) === nums2.reduce(add) ? true : false;

const reverseString = (string) => string.split("").reverse().join("");

var mapObject = (object, callback) => {
    obj = {};
    for (let key in object) {
        callback(key, object[key]);
    }
    return obj;

};

var format = (key, value) => {
    if (key === "biography") {
        obj[key] = value.toLowerCase();

    }
    else if (key) {
        obj[key] = value.toUpperCase();
    }
};

3.6 .19

//  Array destructuring: allows you to create variables from values inside of an array or object based on the position. 
//  const nums = [1, 2, 3, 4]   const [uno, dos] = nums;       uno = 1   dos = 2

//  Object destructuring: allows you to create variables from values inside of an object based on the key name. 
//  const user = { name: "Lucy", favColor: "green" };     const { name, faveColor: fColor } = user       name = "Lucy" fColor = "green"

// Higher Order Functions: a function that takes a function in as an argument or paramter, or returns a function. 
// Help decrease amount of time writing code. Less errors in code. Easier time to understand code. Re-use more code. 

// Callback functions: a function that is passed to another function that is called. 

// Filter:    animals.filter(animal => animal.species === "cat")

// Method Chaining:

3.7 .19

// Reduce: 3 arguments - array, combine function, seed (optional)
//  Callback function - combine function takes 4 params
// 1. prevVal - seed value if given or default to the first element in the array
// 2. element - current element in the array, if no seed, second element. 
// 3. i - current index of array 
// 4. array - reference tot the array passed to reduce. 
const combine = (preVal, element, i, array) => { return prevVal + element; }
// Correctly naming params:
// 1. preVal - name for the final result you want from reduce
// 2. curVal - singular of contents of array
// Seed: initial value passed to the callback function as preVal, like real seed its only used once, & should be the same datatype as your output. No seed defaults first element. 
const car = [
    { price: 11, ... },
    { price: 14, ... },
    { price: 20, ... },
    { price: 10, ... },
]

const total = cart.reduce((total, product) => { return total + product.price; }, 0);

}

const countParenths = par => {

    function counter(count, cur) {
        if (cur === "(") {
            count++;
        }
        else if (cur === ")") {
            if (count <= 0) { return count; }
            count--;
        }
        return count;
    }

    return par.split("").reduce(counter, 0);
};


var mapObjectReduce = function(object, callback) {
    return Object.keys(object).reduce((result, key) => {
        result[key] = callback(object, object[key]);
        return result;
    });
};

var format = function(key, value) {
    return key.value * 2;
};
