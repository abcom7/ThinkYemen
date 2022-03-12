// alert("hi there from position.html");
// this will console log

console.log("hiiii");
console.log(typeof 11);
console.log(typeof true);

// strings
("hello world");
("hello world");

// numbers
12;
231;

// booleans
true;
false;

console.log("checking data type: ", typeof 12);

// variables

// var <name of variable> = <value of variable>

var firstName = "omar";
var lastName = "John";
var fullName = firstName + " " + lastName;
console.log("full name: ", fullName);

var firstNumber = 20;
var secondNumber = 12;

// adding
var addition = firstNumber + secondNumber;
console.log(addition);

var subtraction = firstNumber - secondNumber;
console.log(subtraction);

var multiplication = firstNumber * secondNumber;
console.log(multiplication);

var division = firstNumber / secondNumber;
console.log(division);

console.log(isAwesome);

var isAwesome = true;
console.log("boolean check:", isAwesome);

// isAwesome = false;
// console.log("boolean check:", isAwesome);

var isHappy = true;

// if statements
if (isAwesome == true && typeof isAwesome === "boolean") {
  console.log("you are awesome and happy today");
}

// multiple conditions using AND OR
// AND => &&
// OR => ||

if (firstNumber >= 90 || firstNumber <= 100) {
  console.log("first ifff ");
} else if (firstNumber === secondNumber) {
  console.log("sec iff");
} else {
  console.log("none are true");
}

// var userName = prompt("input your name");
// console.log("your name is ", userName);

// if (userName === "ammar" || userName === "ahmad") {
//   console.log("welcome to the system");
// } else {
//   console.log("unauthorized user");
// }

var grade = prompt("input grade:");

if (grade >= 90 && grade <= 100) {
  console.log("A");
} else if (grade >= 80 && grade <= 89) {
  console.log("B");
} else if (grade >= 70 && grade <= 79) {
  console.log("C");
} else if (grade >= 60 && grade <= 69) {
  console.log("D");
} else if (grade < 60) {
  console.log("F");
}
if (grade >= 0 && grade <= 100) {
  console.log("thanks for trying");
} else {
  console.log("Please input a number grade from 0 - 100");
}
