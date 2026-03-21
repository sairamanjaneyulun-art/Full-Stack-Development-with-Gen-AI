// // Function is used to write the set of instructions to perform a specific task.
// // Normal Style Function -> ES5
// display1(); // We can call the function before declaration
// function display1() {
//     console.log('Normal Style Function')
// }
// display1();

// // Expression Style Function -> ES5
// // display2(); // Error: We can't call function before declaration
// // Here, The variableName is converted to functionName.
// let display2 = function() {
//     console.log('Expression Style Function')
// }
// display2();

// // Arrow Style Function -> ES6
// // Here function keyword is converted/replaced by arrow.
// let display3 = () => console.log('Arrow Style Function')
// display3();

// // Addition of two numbers using Expression Style Function
// let addNumber1 = function(a,b) {
//     var sum = a + b
//     return sum;
// }
// console.log('Addition of two numbers using Expression Style Function: ' + addNumber1(12, 5))

// // Addition of two numbers using Arrow Style Function
// // By default arrow function returns value or expression without return keyword (Only for single line Arrow Style Function).
// let addNumber2 = (a,b) => a + b;
// console.log('Addition of two numbers using Arrow Style Function: ' + addNumber2(11, 3))

// // Find the largest of two number using Expression Style Function
// let largestNum1 = function(a, b) {
//     if (a > b) {
//         return (a) + ' is Largest Number'
//     } else {
//         return (b) + ' is Largest Number'
//     }
// }
// console.log(largestNum1(21, 5))

// // Find the largest of two number using Arrow Style Function
// // But when writing the multiple line we should use the return keyword.
// // If we want to write multiline we need to use curly braces and "return" keyword to return the value.
// let largestNum2 = (a, b) => {
//     if (a > b) {
//         return (a) + ' is Largest Number'
//     } else {
//         return (b) + ' is Largest Number'
//     }
// }
// console.log(largestNum2(2, 5))

// callback function
// Passing function name or funcion body or function itself to another function as a parameter is known as callback function.
function greeting(fname, callback) {
    return "Welcome " + callback(fname)
}

let maleInfo = function(fname) {
    return "Mr " + fname
}

let femaleInfo = (fname) => "Ms " + fname
console.log(greeting("Asura", maleInfo))
console.log(greeting("Sree", femaleInfo))
console.log(greeting("Sourya Rama Asura", function(fname) {
    return "Mr " + fname
}))
console.log(greeting("Sree Leela", (fname) => "Ms " + fname))

// Here callback function is used to call the Date & Time.
function displayDate () {
    document.getElementById("demo").innerHTML = Date();
}

document.getElementById("myButton").addEventListener('click', displayDate)

setTimeout(myFunction, 3000)

function myFunction() {
    document.getElementById('demo0').innerHTML = 'Sourya Rama Asura';
}