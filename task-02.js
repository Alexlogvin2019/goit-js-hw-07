"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const arrUl = document.querySelector("ul#ingredients");
const arrLi = ingredients.map(key => {
  const liEl = document.createElement("LI");
  liEl.textContent = key;
  return liEl;
});

arrUl.prepend(...arrLi);
console.log(arrUl);

