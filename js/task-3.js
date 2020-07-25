"use strict";

function findLongestWord(text) {
  const listText = text.split(" ");
  let value = 0;
  let longWord = "";
  for (let i = 0; i < listText.length; i++) {
    const word = listText[i]; 
    let value1 = word.length;
   
    if (value1 > value) {
      value = value1; 
      longWord = word; 
    }
  }
  return `Самое длинное слово в (${longWord}) в нем ${value} букв`;
}


const message1 = "asdasdasd asd asdas asd asdasd a dasd a dasd ";
const words1 = message1.split(" ");
let longestWord1 = words1[0];


for (let i = 0; i < words1.length; i++) {
 
  if (words1[i].length > longestWord1.length) {
   
    longestWord1 = words1[i];
  }
}

for (const word in words1) {
  if (word.length > longestWord1.length) {
    longestWord1 = word;
  }
}

console.log(
  findLongestWord(
    "в ведите своё предложение чтобы узнать какое слово самое длинное в нём"
  )
);
