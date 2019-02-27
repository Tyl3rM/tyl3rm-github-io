// VARIABLES //

/*
To hold things in memory during the life-cycle of a program, we can use variables.  Variables
are named identifiers that can point to values of a particular type, like a Number, String,
Boolean, Array, Object or another data-type. Variables are called so because once created, we
can CHANGE the value (and type of value) to which they point.
*/

// 1. Declaration && Initialization || Assignment //
// To create a variable we use the keyword, var, followed by a name (id or alias) for our variable.

var myName;

// .1 Decleration //
// At the declaration phase, the variable myName is undefined because we have NOT initialized it to anything.

console.log(myName); // prints => undefined

// .2 Initialization //
// There are 2 phases of using variables: Declaration ⬆ and Initialization ⬇  

myName = 'Tyler';
console.log(myName); // prints ➡ Tyler

// .3 Re-Assignment //
myName = 'Mott';
console.log(myName); // prints => Mott

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 2. Scope //
/*
At it's core scope can be visualized as boxes inside other boxes, which only have
acess to their outer boxers. An outer box can not access information in an inner.

Global Scope:   |Global Window|
Local Scope:    | |Function|  |
Block Scope:    | | |If  | |  |  
Block Scope:    | | |Else| |  |
Block Scope:    | |Loop    |  |
*/

// 3. Hoisting //
/*
All variables are processed before the code is ever called. During this process 
variables and functions are hoisted, visually brought to the top of their scope
and declared a spot in memory, no assignment is given at this point. These 
declreations only exist within their scope, but can be accessed by their child
scope. 

Hoisting an scope go hand in hand in a sense. You have to understand the constraints
of scope to understand when an where things will be hoisted. For Example, a function,
if hoisted to the top of it, scope, so if it's within another function its only
hoisted to the top of that function. If you don't fully understand Hoisting/Scope
then it can cause problems when accessing information you thought was available,
and vice versa, such as knowing you can call a function above its declceration. 
*/

// 4. Variable Keywords //
// Provide different hoisting and scoping rules to assign information in memory. 

// .1 Var //
// Declares the variable globally, except in functions. Hoisted to top of scope. 

console.log(global); // prints => Undefined
var global = 42;
console.log(global); // prints => 42

// .2 Let //
// Declares the variables scope to the block in which it is declared. Not hoisted.

// console.log(blocked); // prints => Reference Error: Block is not defined
let blocked = 42;
console.log(blocked); // prints => 42
blocked = 1337;
console.log(blocked); // prints => 1337

// .3 Const //
// Also declared to its block's scope, but cant be re-assigned. Read-Only. No hoist.

const final = 42;
console.log(final); // prints => 42
// final = 1337;
// console.log(final); // prints => TypeError: Assignment to constant variable.

// .4 No Keyword //
// When no variable keyword, is confined by nothing, globally scoped, not recomended.

noscope = 42;
console.log(noscope); // prints => 42
