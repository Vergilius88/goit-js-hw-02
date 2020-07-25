"use strict";


const calculateEngravingPrice1 = (message, pricePerWord) =>
  message.split(" ").length * pricePerWord;


function calculateEngravingPrice(message, pricePerWord) {
  let element = 0;
  for (let i = 0; i < message.split(" ").length; i++) {
    element += 1;
  }
  return `Цена за одно слово ${pricePerWord}. Количество слов в гравировке ${element}! За ${element} слов вы заплатите ${
    pricePerWord * element
  }`;
}

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes sweq",
    10
  )
);

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); 

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); 

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); 
