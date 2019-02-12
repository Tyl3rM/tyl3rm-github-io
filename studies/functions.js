// FUNCTIONS //

/*
Functions are so programmers can do as little repetitive work as possible. 
They are not executed at their point of decleration in code, they are only
executed when they've been called upon using the name they were assigned. They 
hold parameters which are just place holders until an arguments is passed in 
at call time. 
*/

// 1. Two Phases of Functions //

// .1 Function Decleration //
// Requires the keyword "function" && a relevant name.

function answerToLife(a, b) {
    return a + b;
}
// .2 Function Calling //
// Requires the function name && desired arguments to be evaluated. 

console.log(answerToLife("Fourty", "Two")); // prints => "Fourty Two")

// 2. Function Hoisting //
// Function are hoisted above var declerations, with their whole body.

// 3. Named Function Syntax //
// function [name](param, param, ...) { code to be executed }; 

// 4. Function Expression Syntax //
// Function expression is when you assign a function to a variable, not hoisted. 

let elite = function(a, b) {
    return a * b;
};

elite(668.5, 2); // prints => 1337

// 5. Specifying Inputs && Outputs //
// Optionally, a function can take no inputs && optional to return single values.

// 6. Function Scopes //
// Functions have their own scopes, independent of the global scope.

let y = 42;

function scope() {
    let y = 4;
    let z = 2;
    console.log(y); // prints => 4    
    console.log(z); // prints => 2
    return y + z;
}
scope(); // prints => 6

console.log(y); // prints => 42
// The first y is a different variable in global scope, than the function scope y.
console.log(z); // prints => Reference Error: Z is not defined
// The variable z can't be accessed in the global scope, only within function.   


// 7. Functions Closures // 
// Functions closure is when a function accesses a variable outside of its scope.

function close() {
    let x = 4;
    return function() {
        x += 2;
    };
}

close(); // prints => 6
// The anonymous function is closure accessing the x declared in parent function.

// 8. Pure Functions //
// A function is pure if it doesn't alter or access anything outside its scope.
