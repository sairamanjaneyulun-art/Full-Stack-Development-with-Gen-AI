var a  = 10;
a = 20; // Re-assigning/Re-initialzing the value 
var a = 300; // Re-Declaring the Value
// document.writeln("<br>The Value of 'a' is " + a)

let b = 12;
b = 31; // Re-assigning/Re-initialzing the value
// let b = 44; // Cannot Re-Declare value using the 'let' keyword (or We will get/receive an error). (Remove the comments & see for yourself)

for(var i = 0; i <= 10; i++) {
    // document.writeln("<br>The Value of 'i' is " + i) Can be accessed from here.
}
// document.writeln("<br>The Value of 'i' is " + i) Can be accessed from here also. Always try to avoid using 'var' keyword


// Always use 'let' & 'const' keyword.
for(let j = 0; j <= 10; j++) {
    // document.writeln("<br>The Value of 'j' is " + j) // Can only be accessed from here.
}
// document.writeln("<br>The Value of 'j' is " + j) 
// Cannot be accessed from here because 'let' keyword uses block scope(means inside the curly brackets{}).

const c = 2;
c = 5; // Cannot be Re-assign/Re-Declare the value when using the 'const' keyword.