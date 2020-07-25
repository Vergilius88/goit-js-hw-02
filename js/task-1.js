"use strict";


const words = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];

const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

function LogItems(value) {
  for (let i = 0; i < value.length; i++) {
    const element = value[i];
    const numberElement = i + 1;
    console.log(numberElement, element);
  }
}

LogItems(words);
LogItems(numbers);
