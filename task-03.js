"use strict";

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  }
];
const letUl = document.querySelector("ul#gallery");

function insertImages(arr) {
  const arrImg = arr.map(key => {
    const imgEl = document.createElement("li");
    imgEl.insertAdjacentHTML(
      "afterbegin",
      `<img src=
        '${key.url}' alt='${key.alt}' width=300 height=220>`
    );
    return imgEl;
  });
  return letUl.prepend(...arrImg);
}

insertImages(images);

letUl.style.display = "flex";
letUl.style.justifyContent = "space-around";
