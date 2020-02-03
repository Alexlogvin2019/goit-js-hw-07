"use strict";

let counterValue = 0;
const NumdValue = document.getElementById("value");

function increment() {
  counterValue++;
  NumdValue.textContent = counterValue;
}

function decrement() {
  counterValue--;
  NumdValue.textContent = counterValue;
}

const buttonClickInc = document.querySelector("[data-action='increment']");
const buttonClickDec = document.querySelector("[data-action='decrement']");


buttonClickInc.addEventListener('click', increment);
buttonClickDec.addEventListener('click', decrement);

