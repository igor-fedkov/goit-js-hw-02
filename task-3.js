const findLongestWord = function(string) {
	let maxWord = '';
	let pos;

	string = string.trim();
	pos = string.indexOf(' ');
	while (pos > -1) {
		if (maxWord.length < pos) {
			maxWord = string.slice(0, pos);
		}
		string = string.slice(pos + 1);
		pos = string.indexOf(' ');
	}
	if (maxWord.length < string.length) {
		maxWord = string.slice(0, pos);
	}
	return maxWord;
};
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
