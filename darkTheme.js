"use strict";

function darkTheme(seletorName, className) {
    for (var i = 0; i < seletorName.length; i++) {
        seletorName[i].classList.toggle(className); //this is where the magic happens
    }    
}

var h1 = document.querySelector("h1");
var toDark = document.querySelector(".btn-to-dark");
var credits = document.querySelector(".credits");

var dark = false;
toDark.addEventListener("click", function() {
    dark = !dark;
    if (dark) {
        toDark.textContent = "Light Theme";
        credits.textContent = "made by subelta";
    }
    else {
        toDark.textContent = "Dark Theme";
        credits.textContent = "Made by Subelta";
    }

    // Необходим дальнейший рефакторинг
    var body = document.querySelectorAll("body");
    var table = document.querySelectorAll("table"); 
    var buttons = document.querySelectorAll("button");
    var numbers = document.querySelectorAll(".number");
    var manip = document.querySelectorAll(".manipulation");
    var numsAndManip = document.querySelectorAll(".nums-and-manip");
    var tdResult = document.querySelectorAll(".td-result");
    var text = document.querySelectorAll(".text");

    darkTheme(body, "body-dark-theme");
    darkTheme(table, "table-dark-theme");
    darkTheme(numbers, "number-dark-theme");
    darkTheme(buttons, "button-dark-theme");
    darkTheme(manip, "manipulation-dark-theme");
    darkTheme(numsAndManip, "nums-and-manip-dark");
    darkTheme(tdResult, "result-dark-theme");
    darkTheme(text, "text-dark-theme");

    // var header = document.querySelector(".main-header");
    // var p = document.createElement('p');
    // p.classList.toggle("text","text-dark-theme");
    // p.textContent = "Dark Theme";
    // header.appendChild(p);
});





