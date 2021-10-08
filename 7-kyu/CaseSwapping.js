/*

Prompt:

Given a string, swap the case for each of the letters.

e.g. CodEwArs --> cODeWaRS

Examples
""           ->   ""
"CodeWars"   ->   "cODEwARS"
"abc"        ->   "ABC"
"ABC"        ->   "abc"
"123235"     ->   "123235"

*/

const swap = str => {
  const strArr = [];
  str.split('').map((ltr) => ltr.match(/[A-Z]/) ? strArr.push(ltr.toLowerCase()) : strArr.push(ltr.toUpperCase()));
  return strArr.join('');
};
