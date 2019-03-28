"use strict";

var numbers = document.querySelectorAll(".number");
var inputField = document.querySelector(".result");
var arithmetics = document.querySelectorAll(".arithmetics");
var equality = document.querySelector(".equality");
var clearInput = document.querySelector("#clear-input");
var clearAll = document.querySelector("#clear-all");
var invertSign = document.querySelector(".invert-sign");
var fractionDot = document.querySelector("#comma");

var firstNumber;
var pickedSign;
var secondNumber;
var needToEraseInput;

reset();


//Setting Click handlers on number buttons
for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function() {
        if ((inputField.textContent === "0") || (needToEraseInput))  {
            inputField.textContent = this.textContent;
            needToEraseInput = false;
        } else {
            inputField.textContent += this.textContent;
        }
        if (inputField.textContent.length > 17) {
            inputField.textContent = inputField.textContent.substring(0, inputField.textContent.length - 1);
        }               
    });
}


//Setting Click handlers on arithmetics (inculding auto computation of previous expression)
for (var i = 0; i < arithmetics.length; i++) {
    arithmetics[i].addEventListener("click", function() {
        computation();
        firstNumber = Number(inputField.textContent);
        secondNumber = firstNumber;
        needToEraseInput = true;
        if (pickedSign) {
            pickedSign.classList.remove("selected");
        }
        pickedSign = this;
        this.classList.add("selected");
    });
}


//invert sign button
invertSign.addEventListener("click", function() {
    if (inputField.textContent[0] === '-') {
        inputField.textContent = inputField.textContent.slice(1);
    } else {
        inputField.textContent = '-' + inputField.textContent;
    }
});


//fraction dot button 
fractionDot.addEventListener("click", function() {
    if (!inputField.textContent.includes('.')) {
        inputField.textContent += '.';
    }
}); 


//equals button
equality.addEventListener("click", function() {
    computation();
});


//clear current input
clearInput.addEventListener("click", function() {
    inputField.textContent = "0";
});


//clear all
clearAll.addEventListener("click", function() {
    reset();
});


function reset() {
    inputField.textContent = "0";
    if (pickedSign) {
        pickedSign.classList.remove("selected");
    }
    pickedSign = null;
    firstNumber = null;
    secondNumber = null;
    needToEraseInput = false;
}

function computation() {
    secondNumber = Number(inputField.textContent);
    var result;
    if (pickedSign) {
        switch (pickedSign.id) {
            case "addition":
                result = firstNumber + secondNumber;
                break;
            case "subtraction": 
                result = firstNumber - secondNumber;
                break;
            case "division": 
                result = firstNumber / secondNumber;
                break;
            case "multiplication": 
                result = firstNumber * secondNumber;
        } 
        pickedSign.classList.remove("selected");
        pickedSign = null;
    } else {
        result = secondNumber;
    }
    result = checkSpecialValues(result);
    firstNumber = null;
    secondNumber = null;
    needToEraseInput = true;

    if (result > 9999999999999999) {
        result = result.toPrecision(12);
    }
    inputField.textContent = (!isFinite(result)) ? "ERROR" : result;
    result = null;
}

//To avoid JS computational errors
function checkSpecialValues(result) {
    var arr = [0.1, 0.2];
    if (arr.includes(firstNumber) && arr.includes(secondNumber)) {
        return result.toFixed(1);
    }
    return result;
}