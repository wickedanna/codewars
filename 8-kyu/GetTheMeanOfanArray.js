/*
Prompt:
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/

const getAverage = (marks) => {
  let average = marks.reduce((a, b) => a + b) / marks.length;
  let rounddown = Math.floor(average);
  return rounddown;
  //TODO : calculate the downwar rounded average of the marks array
}

/*
Notes:
- I made this one 5 months ago from today, so I don't have any notes at this point, but I may refactor it soon.
*/