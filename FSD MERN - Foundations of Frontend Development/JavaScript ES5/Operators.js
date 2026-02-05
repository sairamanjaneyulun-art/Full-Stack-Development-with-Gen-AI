var a = 10;
var b = 3;
var c = 8;

var sum = a + b;
var sub = a - b;
var mul = a * b;

var result1 = a > b;
var result2 = a < b;
var result3 = a > b && a > c;

var x1 = 100; // Number Type Consider
var x2 = "100"; // String Type Consider

var age = 21;
var votingAgeResult4 = age >= 18 ? "Yes, You can vote." : "No, You can't vote.";

document.write("<br> Arithemetic Operators <br>")
document.write("The Sum is " + sum + "<br>")
document.write("The Sub is " + sub + "<br>")
document.write("The Mul is " + mul + "<br>")

document.write("<br> Conditional Operators <br>")
document.write("a > b is " + result1 + "<br>")
document.write("a < b is " + result2 + "<br>")

document.write("<br> Logical Operators <br>")
document.write("a > b && a > c is " + result3 + "<br>")

document.write("<br> == 'Check only Values' <br>")
document.write(x1 == x2)
document.write("<br>")
document.write("This is (100) " + typeof(x1) + " & " + 'This is ("100") ' + typeof(x2) + "<br>")

document.write("<br> === 'Check both Values & DataTypes' <br>")
document.write(x1 === x2)
document.write("<br>")

document.write("<br> Increment Operator <br>")
document.write(" 'Before Increment' The Value of a is " + a + "<br>")
a++;
document.write(" 'After Increment' The Value of a is " + a + "<br>")

document.write("<br> Decrement Operator <br>")
document.write(" 'Before Decrement' The Value of c is " + c + "<br>")
c--;
document.write(" 'After Decrement' The Value of c is " + c + "<br>")

document.write(" <br> Ternary Operator <br>")
document.write("Only above 18 can vote? Can you vote: " + votingAgeResult4)