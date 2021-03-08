/*
Prompt:
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

const squareSum = (numbers) => {
  let total = 0;
  let squaredNums = [];
    numbers.forEach((element) => {
      let squareNum = (element * element);
      squaredNums.push(squareNum);
      });
      squaredNums.forEach((element) => {
        total += element;
      });
      return total;
  };

  /*
  Notes:
  I have no relevent notes, as this solution was created 8 months ago,
  I may refactor soon.
  */