"use strict";

function formatString(value) {
	const returnText = [];

	for (let i = 0; i < value.length; i++) {
		

		if (i < 40) {
			
			let excessText = value[i]; 
			returnText.push(excessText); 
		} else if (i === 40) {
			
			returnText.push('...');
		}
	}

	return returnText.join(''); 
}

const formatString = (string, stringMaxLength = 40) =>
	string.length > stringMaxLength ? `${string.slice(0, stringMaxLength - 1)}...` : string;


console.log(formatString('Curabitur ligula sapien, tincidunt non.'));


console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));


console.log(formatString('Curabitur ligula sapien.'));


console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
