"use strict";

const inputName = document.getElementById("name-input");
const outputName = document.getElementById("name-output");


inputName.addEventListener("input", namePrint);
function namePrint(e) {
    if (!inputName.value) {
        outputName.textContent = 'незнакомец';
    } else {
        outputName.textContent = inputName.value;
    }
}