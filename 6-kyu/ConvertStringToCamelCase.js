/*

Prompt:

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

*/

const toCamelCase = str => {
  const newArr = [];
  str.split(/[_ + -]/g).map((x, index) => {
  if (index === 0) {
    newArr.push(x);
  } else if (index > 0) {
    newArr.push( x.charAt(0).toUpperCase() + x.slice(1));
   }
   });
   return newArr.join('');
}
