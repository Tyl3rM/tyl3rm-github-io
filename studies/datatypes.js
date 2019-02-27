// DATATYPES //

/*
There are many different types of data in javascript. There are simple 
data types and complex data types. Simple data types include: Numbers, 
Strings, and Booleans. Complex data types are Arrays, Objects and Functions. 
*/

// Primitive||Simple //

/* 
Primitive dataypes are set to a specific size of 8 bites in memory. They are
set to this size, making them inmutable. This means once they have a value that
they will always be that value in memory. This data is copied in javascript by
value.
*/

// 1. Copy By Value //
// A variables value is recreated in memory and its copy can never be changed.

let value = "Fourty-Two";
let val = value;
console.log(value); // prints => "Fourty-Two"
console.log(val); // prints => "Fourty-Two" 
val = value.toUpperCase();
console.log(value); // prints => "Fourty-Two"
console.log(val); // prints => "FOURTY-TWO" 


// 2. Number //
// Stored in 64bits by javasript, with only one distinction.  

let num = 1;
console.log(num); // prints => 1

// .1 NaN //
// Is returned when values that are, Not a Number, are passed into a math function.

let notNumber = 42 * "Life";
console.log(notNumber); // prints => NaN

// .2 Infinity //
// A numeric value that is greater than any other number

let positive = 1337 > Infinity;
console.log(positive); // prints => False

// .3 -Infinity //
// A numeric value that is less than any other number

let negative = 42 + -Infinity;
console.log(negative); // prints => -Infinity

// 3. String //
// A collection of characters, denoted by either 'single' or "double" quotes.

let string = "Life";
console.log(string); // prints => Life

// 4. Boolean // 
// The value of True of False, which is return by comparison operators. 

let isFalse = 4 < 2;
let isTrue = 42 === 42;
console.log(isFalse); // prints => False
console.log(isTrue); // prints => True

// 5. Undefined //
// Returned if there is an absence of value.

let und;
console.log(und); // prints => Undefined

// 6. Null //
// Represents the intentional absence of a value.

let not = null;
console.log(not); // prints => Null

// Complex Datatypes //

/*
Complex dataypes can be an infinite size in javascript. This is possible because
they are mutable forms of data, meaning even after you create them, they can be
expanded upon. This date is copied by reference in javascript. 
*/

// Copy By Reference //
// Variable doesnt gets it's own copy, it points to the existing complex value.

let complex = [4, 2, 42];
let comp = complex;
console.log(complex); // prints => [4, 2, 42]
console.log(comp); // prints => [4, 2, 42] 
comp.push("Fourty-Two");
console.log(complex); // prints => [4, 2, 42, "Fourty-Two"]
console.log(comp); // prints => [4, 2, 42, "Fourty-Two"] 

// 7. Array //
// A collection of data in a zero indexed list, denoted by [square brackets]. 

let arr = [];
console.log(arr); // prints => []

// 8. Object //
// A collection of key: value pairs, denoted by {curly braces}. 

let obj = {};
console.log(obj); // prints => {}

// 9. Function //
// A block of re-usable code that completes an action.

function imAFunction(num1, num2) {
    return num1 * num2;
}

let func = imAFunction(42, 1337);
console.log(func); // prints => 56154
