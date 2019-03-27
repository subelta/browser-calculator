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
// var expectingFraction;
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
    });
}

//Setting Click handlers on arithmetics (inculding auto computation of previous expression feature)
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

equality.addEventListener("click", function() {
    computation();
});


clearInput.addEventListener("click", function() {
    inputField.textContent = "0";
});


clearAll.addEventListener("click", function() {
    reset();
});

invertSign.addEventListener("click", function() {
    if (inputField.textContent[0] === '-') {
        inputField.textContent = inputField.textContent.slice(1);
    } else {
        inputField.textContent = '-' + inputField.textContent;
    }
});

fractionDot.addEventListener("click", function() {
    // expectingFraction = true;
    if (!inputField.textContent.includes('.')) {
        inputField.textContent += '.';
    }
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
    // expectingFraction = false;
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

    firstNumber = null;
    secondNumber = null;
    needToEraseInput = true;

    inputField.textContent = (!isFinite(result)) ? "ERROR" : result;
    result = null;
}