"use strict";

const blur = document.getElementById("validation-input");

blur.addEventListener("blur", inputFn);

function inputFn(e) {
  if (blur.value.length === Number(blur.getAttribute("data-length"))) {
    blur.classList.remove("invalid");
    blur.classList.add("valid");
  } else {
    blur.classList.remove("valid");
    blur.classList.add("invalid");
  }
}
