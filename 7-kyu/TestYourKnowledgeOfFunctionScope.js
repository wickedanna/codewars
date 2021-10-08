/*

Prompt:

Write a function that adds from two invocations.

All inputs will be integers.

add(3)(4)  // 7
add(12)(20) // 32

*/
const add = num1 => function (num2) { return num1 + num2 };
