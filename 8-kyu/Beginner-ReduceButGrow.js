/* 
Prompt:
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

const reduceMethod = (arr) => arr.reduce((a, b) => a * b);

/*
Notes:
The title hints at the reduce method, which I used to complete the challenge.
I will not refactor.
*/