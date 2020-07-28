"use strict";

const enteredNumber = "Введите число";
const notANamber = "Было введено не число, попробуйте еще раз";
let userInput;
let total = 0;
const numbers = [];

while (userInput !== null) {
 
  userInput = prompt(enteredNumber, 0); 

  if (userInput === null) break; 
  const userNumber = +userInput; 
  
  if (Number.isNaN(userNumber)) {
    
    alert(notANamber);
  } else {
    
    numbers.push(userNumber);
  }
}

if (numbers.length > 0) {
  
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
}

const message = `Общая сумма чисел равна ${total}`;
alert(message);