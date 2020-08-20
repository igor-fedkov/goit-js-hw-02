'use strict';

const calculateEngravingPrice = function(message, pricePerWord) {
	let count = 0,
		pos;

	message.trim();
	pos = message.indexOf(' ');
	while (pos > -1) {
		count++;
		message = message.slice(pos + 1);
		pos = message.indexOf(' ');
	}
	count++;
	return count * pricePerWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120
