/*

Prompt:

Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

If the total of both even and odd numbers are identical return: "Even and Odd are the same"

*/

const evenOrOdd = str => {
  let evenSum = 0;
  let oddSum = 0;
  const nums = str.split('').map((x) => parseInt(x));
  
  nums.forEach((num) => num % 2 === 0 ? evenSum += num : oddSum += num);
  
  return evenSum > oddSum ? 
    'Even is greater than Odd' : 
    (evenSum !== oddSum ? 'Odd is greater than Even' : 'Even and Odd are the same');
};
