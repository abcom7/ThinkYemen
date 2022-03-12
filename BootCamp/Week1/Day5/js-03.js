// JS Functions
/*
  Functions are a block of code that serves the purpose of 
  performing a specific task. When using functions, you have 
  to invoke them (also referred to as "calling" them). However, 
  before you can invoke them, you need to define them.

  To define a function you first need to use the function 
  keyword followed by the name you wish to give the function. 
  Next comes a set of parenthesis (()) that have parameters 
  (if any) defined. Parameters are temporary variables for 
  use within the function code. Just as you use an initial 
  variable within a for loop to hold the current number of 
  iterations, a parameter holds information relevant to the 
  code within the function. Once the code inside the function 
  is done executing, the parameters and their values are 
  discarded.

  - Example of functions syntax:
  function name(parameter, parameter) {
    //functionality will go here
  }
*/

function jsGreeting() {
  return "Welcome to JS world";
}
// console.log("first function: ", jsGreeting());

function multiplyNumbers(num1, num2) {
  return num1 * num2;
}
multiplyNumbers(11, 33);

function subtractNumbers(num1, num2) {
  if (num1 < num2) {
    return "first number should be greater than second number";
  } else {
    return num1 - num2;
  }
}
subtractNumbers(12, 2);

// *** Scopes ***

/* 
  The Scope is how and where you can access different variables or functions 
  within the code. Imagine your code existing in layers and those layers are 
  defined by the curly braces used in functions, loops, objects, etc.

  In JavaScript, there are several scopes. However, the two primary scopes are:
  - Global: Resides Outside of a Function
  - Local: Resides Inside of the Function
*/

// example for global scope:
var myAge = 26;

function ageInTwentyYears() {
  return myAge + 20; //returns 46
}

// console.log(
//   "Global ex: ageInTwentyYears function returned: ",
//   ageInTwentyYears()
// );

function ageTenYearsAgo() {
  return myAge - 10; // returns 16
}
// console.log("Global ex: ageTenYearsAgo function returned: ", ageTenYearsAgo());

// example for local scope:
function ageInTwentyYears2() {
  var myAge2 = 26;

  return myAge2 + 20; //returns 46
}
// console.log("Local ex: ageInTwentyYears2 function returned: ", ageInTwentyYears2());

// here we are trying to access a variable that is in another function. we cannot access variables that has been declared inside a function from anywhere, except withing the function itself
function ageTenYearsAgo2() {
  return myAge2 - 10; // you will get an error
}
// console.log("Local ex: ageTenYearsAgo2 function returned: ", ageTenYearsAgo2());

// getElementsByTagNames
var tags = document.getElementsByTagName("li");
console.log("tags:", tags);

// example mini challenge:
var outputGrade = () => {
  let grade = document.getElementById("grade-input").value;
  let finalGrade;
  let errMsg;
  if (grade >= 90 && grade <= 100) {
    // console.log("A");
    finalGrade = "A";
  } else if (grade >= 80 && grade <= 89) {
    // console.log("B");
    finalGrade = "B";
  } else if (grade >= 70 && grade <= 79) {
    // console.log("C");
    finalGrade = "C";
  } else if (grade >= 60 && grade <= 69) {
    // console.log("D");
    finalGrade = "D";
  } else if (grade < 60) {
    // console.log("F");
    finalGrade = "F";
  } else {
    // console.log("Please input a number grade from 0 - 100");
    errMsg = "Please input a number grade from 0 - 100";
  }
  var output = document.getElementById("display-grade");
  if (errMsg) {
    output.innerHTML = "Error: " + errMsg;
  } else {
    output.innerHTML = "your final grade is: " + finalGrade;
  }
};
