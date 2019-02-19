// STRING MANIPULATION //

/*
Strings are a simple data types that are composed of character data, which are
a set value. Strings can be set by either using single or double quotations. 
*/

let single = 'String';
let double = "String String";


/* 
Strings can be treated like an Array of characters. If we want to access the 
individual characters of strings we'd use [bracket notation]. 
*/

console.log(single[0]); // prints => "S"

/*
There are MANY different ways to manipulate strings with methods native to 
javascipt. All string methods are pure in nature, which means they do not
manipulate the original data. They only modify the copied value. That's why we're 
able to manipulate the same variables multiple time for manipulation. 
*/

// Change Case //

console.log(single.toUpperCase()); // prints => "STRING"
console.log(single.toLowerCase()); // prints => "string"

// Join Together //

console.log(single + "-" + double); // prints => "String-String"

// Find Length //

console.log(single.length); // prints => 6

// Replace Parts //

let newString = single.replace("New String");

console.log(single); // prints => "String"
console.log(newString); // prints => "New String" 

// String to Characters //

console.log(single.split("")); // prints => ["S","t","r","i","n","g"]

// String Split //

console.log(double.splice(" ")); // prints => "String"

// String Search //

console.log(newString.search("String")); // prints => 1

// Character At (index) //

console.log(single.charAt(0)); // prints => "S"
