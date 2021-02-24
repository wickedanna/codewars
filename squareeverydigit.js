/*
Prompt:

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

*/

const double = num => {
	const stringNum = num.toString().split('');
  const newNums = stringNum.map(item => item * item);
  const squaredNum = newNums.join('');
  return +squaredNum;
}