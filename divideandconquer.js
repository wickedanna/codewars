/*
Prompt:

Given a mixed array of number and string representations of integers,
add up the string integers and subtract this from the total of the non-string integers.

Return as a number.

[1, 2, '3', 4, '5', 6]

1 + 2 + 4 + 6 = 13

3 + 5 = 8

13 - 8 = 5

final returned value will be 5

*/

const addMixedValues = arr => {
	let stringVal = 0, integerVal = 0;
  arr.map(item => (typeof item == 'string' ? (stringVal += item * 1) : (integerVal +=item)))
  return integerVal - stringVal;
}