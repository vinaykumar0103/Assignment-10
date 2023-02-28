"use srict"

// 1. Are Higher Order functions and Call back functions the same ? If not,
// briefly explain about both functions.

// No, higher-order functions and callback functions are not the same thing,
//  although they are closely related concepts in JavaScript.

// A higher-order function is a function that takes one or more functions as arguments,or returns a function as its result.
// In other words, it is a function that operates on other functions, either by taking them in as inputs or producing them as outputs.
//  Higher-order functions are a fundamental concept in functional programming and can be used to create more flexible and reusable code.


//{Higher-order function}
function applyOperation(x, y, operation) {
  return operation(x, y);
}

function add(x, y) {
  return x + y;
}

let result = applyOperation(3, 4, add); 

//{call back function}

// A callback function, on the other hand, is a function that is passed as an argument to another function and is executed inside that function.
// Callback functions are often used in asynchronous programming to handle events or responses from external sources.
// For example, the setTimeout() function in JavaScript takes a callback function as its first argument to be executed after a certain amount of time has elapsed.
// Example of a higher-order function
function doSomething(callback) {
  console.log("Doing something...");
  callback();
}

// Example of a callback function
function myCallback() {
  console.log("Callback function called!");
}

// Using the higher-order function with the callback
doSomething(myCallback);


// 2. Is filter a Higher Order function in Javascript ? If yes, why ?

// Yes, filter() is a higher-order function in JavaScript. 
// This is because it takes a function as an argument and returns
// a new array based on the result of applying the function to each element in the original array.

const numbers = [1, 2, 3, 4, 5];

// Using filter() as a higher-order function
const filteredNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(filteredNumbers); 



// 3. Give an example of a Higher Order function and a call back function
// used in the same program.

// Example of a higher-order function that uses a callback
function calculate(num1, num2, operation) {
  return operation(num1, num2);
}

// Example of a callback function for addition
function add(num1, num2) {
  return num1 + num2;
}

// Example of a callback function for subtraction
function subtract(num1, num2) {
  return num1 - num2;
}

// Using the higher-order function with the callback functions
console.log(calculate(5, 3, add)); // Output: 8
console.log(calculate(5, 3, subtract)); // Output: 2


// 4. Carefully check the example below:
// a) What will be the output of this program ?
// b) Which function is a Higher Order function here ?
// const names= ['John', 'Tina','Kale','Max']
// function useFunction(arr,fn){
// for(let i=0; i<arr.length; i++){
// fn(arr[I]);
// }
// }
// function argFn (name){
// console.log("Hello " + name );
// }
// useFunction(names,argFn);


// a) The output of this program is

// Hello John
// Hello Tina
// Hello Kale
// Hello Max

//  b) Which function is a Higher Order function here ?

//  The useFunction() function is a higher-order function here because,
//  it takes a function (fn) as an argument and uses it to perform a specific operation on each element in the arr array.