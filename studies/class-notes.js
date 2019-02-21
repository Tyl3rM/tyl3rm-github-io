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
