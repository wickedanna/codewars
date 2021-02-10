/*
Prompt:
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

const sumMix = (arr) => {
  let total = 0;
    arr.forEach(function(element){
      total += Number(element);
      });
      return total;
  }

  /*
  Notes:
  I created this solution a year ago, and have no relevent notes,
  may refactor soon.
  */