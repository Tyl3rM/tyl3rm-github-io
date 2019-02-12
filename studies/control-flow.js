// CONTROL FLOW //

/*
Control flow is the process in which Javascript preceeds within executable code. 
Each line of script affects the flow of an application. Typically you'll want 
to end each statemement with a semicolon; Then proceed with your next bit of code.
The conditional statements that control the flow of the code are always evaluating
to booleans, whether the condition is true or false. If false, the code keeps 
running, and if true, the given code is executed.
*/

// 1. Else-If Statements

/*
Else-If Statements are run through top to bottom, once a condition is met
the block of code the condition holds is executed, and the statement exits. 
This is why the conditions need to be ordered properly. 
*/

// if (condition) {code to be executed}; //

let input = "Zzzz";

// .1 If //
// The first condition tested for; if met, executed. 

if (input > 41 && input < 43) {
    console.log("The meaning of life, the universe, and everything.");

    // .2 Else-if //
    // Any subsequent coniditions to test for. 

}
else if (input === "Andy" || input === "Connor") {
    console.log("Awesome teachers! but are they 1337?");

    // .3 Else //
    // Default if none of the conditions are met. 

}
else {
    console.log("Keep trying!");
}


console.log(input); // prints => Keepy trying!

// 2. Switch Statements //

/*
Switch statements are a list of given cases that are checked against an input
case. As soon as a case is met the code is contains is executed. Although, not
very common, sometimes they can be more efficient, like when checking numbers.
*/

let num = 0;
let dayOfWeek = num; // Typically dynamic

switch (dayOfWeek) {
    case 1:
        console.log("Mondays are the worst!");
        break;
    case 2:
        console.log("Is it hump day yet?!");
        break;
    case 3:
        console.log("HuMP DaEEEYYY!");
        break;
    case 4:
    case 5:
        console.log("The Weekend is almost here!");
        break;
    case 0:
    case 6:
        console.log("It's the Weekend, SKRRRT!");
        break;
    default:
        console.log("What FUCKING day is it?!");
}

console.log(num); // prints => It's the Weekend, SKRRRT!
