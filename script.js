const addBtn = document.querySelector('.add'); 
const subtractBtn = document.querySelector('.subtract'); 
const multiplyBtn = document.querySelector('.multiply'); 
const divideBtn = document.querySelector('.divide'); 
const numBtns = document.querySelectorAll('.numBtns');
const allBtns = document.querySelectorAll('.buttons'); 
const clearAllBtn = document.querySelector('.clearAll'); 
const currDisplay = document.querySelector('.currDisplay'); 
const clearCurr = document.querySelector('.clearCurr');
const prevDisplay = document.querySelector('.prevDisplay'); 
const equals = document.querySelector('.equals'); 

const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1 / num2; 
}

function operate(operator, num1, num2){

    return operator(num1, num2); // we are calling the function that is passed through which is why operator is a function
}

allBtns.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.id); 
        currDisplay.textContent += e.target.id;
    })
});

clearAllBtn.addEventListener('click', () => {
    currDisplay.textContent = ''; 
    prevDisplay.textContent = ''; 
})

clearCurr.addEventListener('click', () => {
    currDisplay.textContent = ''; 
})

// when operate, prev text content 
