// Function is a set of instructions
// Normal Style Function
display1(); // We can call the function before declaration
function display1() {
    console.log('Normal Style Function')
}
display1();

// Expression Style Function
// display2(); // Error: We can't call function before declaration
// Here variableName is converted to functionName
let display2 = function() {
    console.log('Expression Style Function')
}
display2();

// Arrow Style Function
// Here function keyword is converted to arrow function
let display3 = () => console.log('Arrow Style Function')
display3();

// Addition of two numbers using Expression Style Function
let addNumber1 = function(a,b) {
    var sum = a + b
    return sum;
}
console.log('Addition of two numbers using Expression Style Function: ' + addNumber1(12, 5))

// Addition of two numbers using Arrow Style Function
// By default arrow function returns value or expression without return keyword.
let addNumber2 = (a,b) => a + b;
console.log('Addition of two numbers using Arrow Style Function: ' + addNumber2(11, 3))

// Find the largest of two number using Expression Style Function
let largestNum1 = function(a, b) {
    if (a > b) {
        return (a) + ' is Largest Number'
    } else {
        return (b) + ' is Largest Number'
    }
}
console.log(largestNum1(21, 5))

// Find the largest of two number using Arrow Style Function
let largestNum2 = function(a, b) {
    if (a > b) {
        return (a) + ' is Largest Number'
    } else {
        return (b) + ' is Largest Number'
    }
}
console.log(largestNum2(2, 5))