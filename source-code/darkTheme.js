"use strict";

var toDark = document.querySelector(".btn-to-dark");
var dark = false;

toDark.addEventListener("click", function() {
    dark = !dark;
    if (dark) {
        toDark.textContent = "Light Theme";
    } else {
        toDark.textContent = "Dark Theme";
    }

    darkTheme(document.querySelectorAll("body"), "body-dark-theme");
    darkTheme(document.querySelectorAll("table"), "table-dark-theme");
    darkTheme(document.querySelectorAll(".number"), "number-dark-theme");
    darkTheme(document.querySelectorAll("button"), "button-dark-theme");
    darkTheme(document.querySelectorAll(".manipulation"), "manipulation-dark-theme");
    darkTheme(document.querySelectorAll(".nums-and-manip"), "nums-and-manip-dark");
    darkTheme(document.querySelectorAll(".td-result"), "result-dark-theme");
    darkTheme(document.querySelectorAll(".text"), "text-dark-theme");
});


function darkTheme(seletorName, className) {
    for (var i = 0; i < seletorName.length; i++) {
        seletorName[i].classList.toggle(className); 
    }    
}