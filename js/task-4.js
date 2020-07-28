"use strict";

function formatString(value) {
  const returnText = [];

  for (let i = 0; i < value.length; i++) {
    if (i < 40) {
      let excessText = value[i];
      returnText.push(excessText);
    } else if (i === 40) {
      returnText.push("...");
    }
  }

  return returnText.join("");
}

const stringConversion = (string, stringMaxLength = 40) =>
  string.length > stringMaxLength
    ? `${string.slice(0, stringMaxLength - 1)}...`
    : string;

// Test:

console.log(stringConversion("Curabitur ligula sapien, tincidunt non."));

console.log(
  stringConversion("Vestibulum facilisis, purus nec pulvinar iaculis.")
);

console.log(stringConversion("Curabitur ligula sapien."));

console.log(
  stringConversion(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
