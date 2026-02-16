// JavaScript is used to program the behavior the web page
document.getElementById('demo0').innerHTML = Date()

/*
JavaScript is the programming language of the web.
It can calculate, manipulate and validate the Data.
It can update and change both HTML & CSS.
*/

// JavaScript Can Change HTML content
// Here is an Example:
/*
One of many JavaScript HTML methods is "getElementById()".

The Example below 'finds' an HTML Element (With id = 'demo1') and changes the element content(innerHTML) to 'Welcome to JavaScript'
*/

/*
JavaScript Functions and Events
A JavaScript function is a block of JavaScript code, that can be executed when "called" for.

For example, a function can be called when an event occurs, like when the user clicks a button.

You will learn much more about functions and events in later chapters.
*/
function JS() {
    document.getElementById('demo1').innerHTML = 'Welcome to JavaScript'
}
// After clicking the button JS changed the HTML Content.

// JavaScript accepts the code which is written in both Single quote or double quote.
// Example:
document.writeln('<br>N Sai Ramanjaneyulu <br>')
document.writeln('Sourya Rama Asura <br>')

// JavaScript can change HTML Attributes values
// Example: Run the code to see the changes in the HTML attributes value
function bulb_on() {
    document.getElementById('MyImage').src = '/Images/pic_bulbon.gif'
}

function bulb_off() {
    document.getElementById('MyImage').src = '/Images/pic_bulboff.gif'
}

// JavaScript can change HTML Styles (CSS)
// Like changing the font and color of the content
document.getElementById('demo2').style.color = 'skyblue'
document.getElementById('demo2').style.fontSize = '40px'

// JavaScript can Hide and Show(hidden content) of HTML Elements
function hide() {
    document.getElementById('demo3').style.display = 'none'
}

function show() {
    document.getElementById('demo4').style.display = 'block'
}

/*
We will learn more JavaScript. These are just few Examples.
*/

/*
JavaScript Display Possibilities
JavaScript can 'Display' data in different ways
*/
// Examples:
document.writeln("Hello, Everyone") // I have already used this to display names in Single & Double quotes
console.log('Hello, Everyone')

/*
'window' keyword represents the browser's window or tab and provides the interface through which JavaScript can 
interact with the browser and the web page's content. But window keyword is optional, without it we can display the 
alert message.
*/
function Alert() {
    alert('Hello, Everyone')
}

// Calling the print() window to print web page using function (same like alert() window)
function Print() {
    print()
}

/*
There also another two display possibilities which are 'innerHTML' & 'innerText'
'innerHTML' is used to change the HTML element's content. In above Examples we can see it's use.
'innerText' is just used to change the plain text.
*/