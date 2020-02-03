"use strict";


import users from "./users.js";


const usersList = document.querySelector(".users");


const fragment = document.createDocumentFragment();
users.forEach(userElement => {
  const liGlobalLi = document.createElement("li");
  liElement.textContent = userElement.name;
  fragment.appendChild(liGlobalLi);
});
usersList.appendChild(fragment);
