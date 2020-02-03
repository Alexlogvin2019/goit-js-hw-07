"use strict";


const input = document.getElementById("font-size-control");
const span = document.getElementById("text");
input.addEventListener("input", fontSize);
function fontSize(e) {
  span.style.fontSize = e.currentTarget.value + "px";
}


