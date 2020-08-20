function findLongestWord(string = '') {
	// Write code under this line
	let array = [];
	let maxWord = '';

	array = string.split(' ');
	for (let i = 0; i < array.length; i++) {
		if (maxWord.length < array[i].length) {
			maxWord = array[i];
		}
	}
	return maxWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));
