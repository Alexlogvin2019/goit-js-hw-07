"use strict";

const arr = document.querySelectorAll(".item");
console.log(`В списке ${Array.from(arr).length} категории.`);


function h2NameLi() {
  const arr = Array.from(document.querySelectorAll("ul#categories li.item"));

  return console.log(
    arr.map(key => {
      const liArr = key.querySelectorAll("li").length;
      return `${key.querySelector('h2').innerText}, ${liArr}`;
    })
  );
}
h2NameLi();
