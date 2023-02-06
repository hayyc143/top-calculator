const addBtn = document.querySelector(".add"); // add button
const subtractBtn = document.querySelector(".subtract"); // subtract
const multiplyBtn = document.querySelector(".multiply"); // multiply
const divideBtn = document.querySelector(".divide"); // divide
const numBtns = document.querySelectorAll(".numBtns"); // all num buttons
const allBtns = document.querySelectorAll(".buttons"); // all buttons on calculator
const clearAllBtn = document.querySelector(".clearAll"); // button that clears everything
const currDisplay = document.querySelector(".currDisplay"); // current display (current number)
const clearCurr = document.querySelector(".clearCurr"); // clearning current display
const prevDisplay = document.querySelector(".prevDisplay"); // showing previously typed numbers
const equals = document.querySelector(".equals"); // calls function operate
const operationBtns = document.querySelectorAll(".operationsBtns"); //operations buttons // id is a string gets rid of undefined
let num2 = ''; // id is a string gets rid of undefined
let num1 = '';
let key = ""; // operator id is a string -- gets rid of undefined
let operator = ""

const add = (num1, num2) => {
  // add function
  return num1 + num2;
};

const subtract = (num1, num2) => {
  // subtract function
  return num1 - num2;
};

const multiply = (num1, num2) => {
  // multiply function
  return num1 * num2;
};

const divide = (num1, num2) => {
  // divide function
  return num1 / num2;
};

function operate(operator, num1, num2){ // operator will be the key pressed -- need to see what key is pressed 
const result = operator(num1, num2); 
return result; 
}

window.addEventListener('keydown', (e) => {
  if (e.key === '/' || e.key === '+' || e.key === '*' || e.key === '-'){
    operator = e.key
    currDisplay.textContent = ""; 
    prevDisplay.textContent += `${num1} ${operator}`
  } else {
    num1 += e.key; 
    currDisplay.textContent = num1; 
  }
})

