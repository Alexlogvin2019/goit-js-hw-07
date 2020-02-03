"use strict";

import country from "./jstest.js";

console.log(country);

console.log(getcountryByLang("Russian", country));

function getcountryByLang(find, allArray) {
  return allArray
    .map(cont => {
      return { lan: cont.languages.map(cont => cont.name), name: cont.name };
    })
    .filter(cont => cont.lan.includes(find));
}

function getPartOfSortCountres(country, number) {
  return country
    .sort((a,b) => a.population - b.population)
    .splice(0,number).map(key => {return [key.name, key.population]})
}


console.log(getPartOfSortCountres(country, 10));