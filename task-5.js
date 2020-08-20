function checkForSpam(str) {
	'use strict';
	// Write code under this line
	const forbiddenWords = [ `spam`, `sale` ];

	str = str.toLowerCase();
	for (let i = 0; i < forbiddenWords.length; i++) {
		if (str.includes(forbiddenWords[i])) {
			return true;
		}
	}
	return false;
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
