//OPERATORS//

/* 
Operators act on the data used in Javascript, Operands. They can 
assign data to variables, compare them, or include them in arithmetic 
operations. Operators are sorted into categories based upon what they do 
and the ammount of operands they require. 
*/
// 1. Assignment Operators //
// Your most basic assignment operator is the =equals sign=.

let life = 42;
let death = 99;

console.log(life); // prints => 42
console.log(death); // prints => 99

// 2. Arithmetic Operators //
// Arithmetic operators do arithmatic on given operands; Andy hates math! //

console.log(4 + 2); // prints => 6
console.log(4 - 2); // prints => 2
console.log(4 * 2); // prints => 8
console.log(4 / 2); // prints => 2
console.log(4 % 2); // prints => 0

// .01 Arithmetic Assignment
// Arithmatic happens as before && then is re-assigned to the variable on the left.

console.log(death += life); // prints => 141
console.log(death *= life); // prints => 5922
console.log(death -= life); // prints => 5880
console.log(death /= life); // prints => 140 

console.log(life); // prints => 42  **Notice the answer to life stays unchanged**
console.log(death); // prints => 140

// 3. Comparison Operators //
// Comparison operators compare two values and return either true or false. 

console.log(4 < 2); // prints => False 
console.log(4 > 2); // prints => True 
console.log(4 <= 2); // prints => False
console.log(4 >= 2); // prints => True

// .1 Strict Comparison //
// Strict comparison takes value and data type into account when comparing. 

console.log(4 === 2); // prints => False
console.log(4 === '2'); // prints => False
console.log(4 !== 2); // prints => True
console.log(4 !== '2'); // prints => True

// .2 Non-Strict Comparison //
// ¡¡DONT USE THIS, EVER!! //
// ¡¡ANDY WILL RIMRAF YOUR LIFE AWAY!! //

console.log(42 == "42"); // prints => True
console.log("rm -rf"); // prints => rm -rf

// 4. Logical Operators //
// Logical operators compare the logic of two operators. 

// .1 &&AND&& //
// Both conditions MUST be true.

console.log(4 > 2 && 42 === 42); // prints => True 

// .2 ||OR|| //
// At least one of the conditions must be true.

console.log(4 === 2 || 42 === 42); // prints => True

// .3 !BANG! //
// Flips the truthiness of the value. 

console.log(!true); // prints => False

// .4 !!BANGBANG!! //
// Coerces a value to a Boolean.

console.log(!!42); // prints => True

// 5. Unary Operators //
// Unary operators work on a single operand.

let elite = 1337;
console.log(+elite); // prints => 1337
console.log(++elite); // prints => 1338
console.log(--elite); // prints => 1337

// .1 Delete Operator //
// using keyword Delete, remove a propety from an object.

let obj = {
    first: "Tyler",
    last: "Mott"
};
console.log(obj); // prints => { first: "Tyler", last: "Mott" }
delete obj.first;
console.log(obj); // prints => { last: "Mott" }

// 6. Ternary Operators //
// Ternary operators evaluate two operands, similar to Else/If (see Control-Flow) 

life === 42 ?
    console.log("The meaning of life, the universe, and everything.") :
    console.log("Keep Searching!");
// prints => The meaning of life, the universe, and everything.
