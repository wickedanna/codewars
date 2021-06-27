/*

Prompt:

Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

*/

const repeatStr = (num, str) => {
	let newStr = '';
	for (let i = 0; i < num; i++) {
		newStr += str;
	}
  return newStr;
};

// Refactored
const repeatStr = (n, str) => str.repeat(n);