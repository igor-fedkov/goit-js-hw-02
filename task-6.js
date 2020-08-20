'use strict';

let input;
const numbers = [];
let total = 0;
let NOT_NUMBER = `Было введено не число, попробуйте еще раз`;

input = prompt(`Введите число`, 0);
while (input != null) {
	input = input.replace(/,/, '.');
	input = Number(input);
	if (isNaN(input)) {
		alert(NOT_NUMBER);
	} else {
		numbers.push(input);
	}
	input = prompt(`Введите число`, 0);
}

if (numbers.length > 0) {
	for (let number of numbers) {
		total += number;
	}
	console.log(`Общая сумма чисел равна ${total}`);
} else {
	alert(`Числа не были введены`);
}
