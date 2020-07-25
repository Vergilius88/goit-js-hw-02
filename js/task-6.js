"use strict";

const input = "Сума в веденных чисел";
RequestNumbers(input);

function RequestNumbers(text) {
  let input;
  let value = true;
  let total = 0;
  const numbers = [];

  do {
    input = prompt(`${text} ${total}`); 
    if (input === null) {
      
      TotalSum(numbers);
      break;
    } else if (NumberRequest(input) === false) {
      
      numbers.push(input); 
      total += Number(input); 
      console.log(numbers); 
    } else {
     
      alert(`Было введено не число, попробуйте еще раз`);
    }
  } while (value); 
}


function NumberRequest(params) {
  let value;
  value = Number.isNaN(Number(params)); 
  return value;
}


function TotalSum(value) {
  let sum = 0;
  for (let i = 0; i < value.length; i++) {
    sum += Number(value[i]);
  }
  if (sum === 0) {
    return alert("Подсчитывать нечего");
  }
  return alert(`Общая сумма чисел равна ${sum}`);
}


const YOU_NUMBER = "You number";
const NO_NUMBER = "Было введено не число, попробуйте еще раз";
let userInput;
let total = 0;
const numbers = [];

while (userInput !== null) {
 
  userInput = prompt(YOU_NUMBER, 0); 

  if (userInput === null) break; 
  const userNumber = +userInput; 
  
  if (Number.isNaN(userNumber)) {
    
    alert(NO_NUMBER);
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