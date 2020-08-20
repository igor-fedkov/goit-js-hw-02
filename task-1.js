// const logItems = function(array) {
// 	console.log(array.length);
// 	for (let i = 0; i < array.length; i++) {
// 		console.log(`${i + 1} - ${array[i]}`);
// 	}
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// logItems([ 'Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong' ]);

// logItems([ 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 ]);

const getItemsString = function(array) {
	'use strict';
	let str = '';
	// Write code under this line
	for (let i = 0; i < array.length; i++) {
		// alert(`${i + 1} - ${array[i]}`);
		str += `${i + 1} - ${array[i]}\n`;
	}
	return str;
};

console.log(getItemsString([ 'Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong' ]));
