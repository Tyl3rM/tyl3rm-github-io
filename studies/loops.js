// LOOPS //

/* 
Loops are built-in constructs of JavaScripts that allow the programmer to
execute a block of code as many times as needed. They are very useful for 
going over collections of data. 

One important thing, that can be a disadvantage when using loops, is to remember
that a stopping condition needs to be able to be met. If one is not set, or not 
able to be met the loop will never stop. An infinite loop can crash programs, 
and computers because the amount of system resources it will take. 
*/

// 1. While Loops //
// Loops that are used to run as long as a set condition is true. //

let life = 42;
while (life <= 1337) {
    console.log(life);
    life++;
}
// prints => 42
// prints => 43
// Keeps printing all the way to 1337

// 2. For Loops // 
// Loops that are used to go through an array. Need: Start, Stop, & Increment. //

let beyond = [42, 43, 44, 45, 46, 47, ];

// .1 Forward Loop++

for (let i = 0; i < beyond.length; i++) {
    console.log(beyond[i]);
}
// prints => 42 // prints => 43
// prints => 44 // prints => 45
// prints => 46 // prints => 47

// .2 Backward Loop--

for (let i = beyond.length; i > 0; i--) {
    console.log(beyond[i]);
}
// prints => 47 // prints => 46
// prints => 45 // prints => 44
// prints => 43 // prints => 42

// 3. For-In Loops //
// Loops that are used to go through an object //

let elite = { Tyler: 42, Andy: 1337, Connor: "leet" };
for (var key in elite) {
    console.log(elite[key]);
}
// prints => 42
// prints => 1337
// prints => leet
