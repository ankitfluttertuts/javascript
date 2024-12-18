
/**
 Write a program to print "Hello, World!" in the console.
Declare variables of different types (string, number, boolean) and output their values.
Perform basic arithmetic operations (addition, subtraction, multiplication, division) with two numbers.
Write a program that checks if a number is positive, negative, or zero.
Use a for loop to print numbers from 1 to 10.
Write a function that accepts two numbers and returns their sum.
Create an array of numbers and find the sum of all elements.
Create an object with properties and display its values.
Write a program to reverse a string.
Create a button in HTML that changes text when clicked using JavaScript.
*/
//Declare Variable of different types
var stringValue = "String";
var booleanValue = true;
var integerValue = 123456;

function displayVarialbles() {
    console.log("greet() function started")
    console.log(stringValue);
    console.log(booleanValue);
    console.log(integerValue);
    console.log("greet() function completed")
}
// Performing Arthemetic Operation
function performArthmeticOperation() {
    console.log("performArthmeticOperation is started");
    console.log(numberAddition(100, 200));
    console.log(numberSubraction(200, 100));
    console.log("performArthmeticOperation is stopped");
}
//Write a function that accepts two numbers and returns their sum.

function numberAddition(num1, num2) {
    console.log("numberAddition started");
    return num1 + num2;
}
function numberSubraction(num1, num2) {
    console.log("number Subtraction started");
    return num1 - num2;
}
//Checking Number is Positive or negative
function checkNumberIsPositive() {
    var num1 = window.prompt("Enter the Number");
    if (Number(num1) > 0) {
        window.alert("its positive !");
    }
    else if (Number(num1) < 0) {
        window.alert("Number is negative");
    }
}
//Use a for loop to print numbers from 1 to 10.
function printNumberbetween() {
    for (let i = 1; i < 11; i++) {
        console.log(i);

    }
}
//Create an array of numbers and find the sum of all elements.
function addNumberFormArray() {
    var array = [];
    var printNum = 0;
    array.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
    array.forEach(element => {
        printNum += element;
    });
    console.log(printNum);
    console.log("Values added")
}
//Clear Console
function clearData() {
    console.clear();
}
//Create an object with properties and display its values.

function displayObjectDetails() {
    let obj = { name: "Ankit", number: "8520067672", location: "bachupally", pincode: 500090 };
    console.log(obj.name);
    console.log(Number(obj.number));
    console.log(obj.location);
}
// Write a program to reverse a string.
function reverString() {
    var string = window.prompt("Enter the String to reverse");
    var reverseString = string.split('').reverse().join('');
    console.log(reverseString);
}
// Create a button in HTML that changes text when clicked using JavaScript.
function changeTextAfterClick() {
    document.getElementById("dataToDisplay").innerText = "<h3>Button is clicked</h3>"
}
//Getting the text value from the input area and modifying the html 
function submitData() {
    var data = document.getElementById("data").value;
    document.getElementById("dataToDisplay").innerText = data;
}