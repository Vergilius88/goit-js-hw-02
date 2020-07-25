"use trict"

const checkForSpam2 = (str) => {
	const source = str.toLowerCase();
	return source.includes('spam') || source.includes('sale');
};


function checkForSpam(message) {
	const text = message.toLowerCase();
	const spam = 'spam';
	const sale = 'sale';

    let textReturn; 
    
	if (text.includes(spam) || text.includes(sale)) {
		
		textReturn = true; 
	} else {
		textReturn = false; 
	}
	return textReturn; 
}


function checkForSpam1(message) {
	const text = message.toLowerCase();
	const words = [ 'spam', 'sale' ]; 
	
	for (const word of words) {
		
		if (text.includes(word)) {
			
			return true;
		}
	}
	
	return false;
}

function setSpamWords(...spamWords) {
	return function checkInclude(s) {
		const arg = spamWords;
		const string = s.toLowerCase();
		for (let i = 0; i < arg.length; i += 1) {
			if (string.includes(arg[i])) return true;
		}
		return false;
	};
}


const checkForSpam3 = setSpamWords('spam', 'sale');



console.log(checkForSpam('Latest technology news ')); 

console.log(checkForSpam('JavaScript weekly newsletter')); 

console.log(checkForSpam('Get best sale offers now!')); 

console.log(checkForSpam('[SPAM] How to earn fast money?'));

console.log(checkForSpam1('Latest technology news ')); 

console.log(checkForSpam1('JavaScript weekly newsletter')); 

console.log(checkForSpam1('Get best sale offers now!')); 

console.log(checkForSpam1('[SPAM] How to earn fast money?')); 