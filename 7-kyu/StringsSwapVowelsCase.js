/*

Prompt:

Challenge:

Given a string, return a copy of the string with the vowels' case swapped.

For this kata, assume that vowels are in the set "aeouiAEOUI".

Example: Given a string "C is alive!", your function should return "C Is AlIvE!"

Addendum: Your solution is only required to work for the ASCII character set.

Please make sure you only swap cases for the vowels.



*/

const swapVowelCase = str => {
	let ourStr = [];
  str.split('').map((ltr) => ltr.match(/[AEIOU]/g) ? ourStr.push(ltr.toLowerCase()) : ltr.match(/[aeiou]/g) ? ourStr.push(ltr.toUpperCase()) : ourStr.push(ltr));
  return ourStr.join('');
}
