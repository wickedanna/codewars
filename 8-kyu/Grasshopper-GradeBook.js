/*
Prompt:

Complete the function so that it finds the average of the three scores passed to it and returns 
the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

*/

const gradeBook = (s1, s2, s3) => {
  const grade = Math.floor((s1 + s2 + s3) / 3);
  let letterGrade;
  switch (true) {
  case grade >= 90:
  letterGrade = 'A';
  break;
  case grade >= 80 && grade <= 89:
  letterGrade = 'B';
  break;
  case grade >= 70 && grade <= 79:
  letterGrade = 'C';
  break;
  case grade >= 60 && grade <= 69:
  letterGrade = 'D';
  break;
  case grade < 60:
  letterGrade = 'F';
  break;
  default:
  letterGrade = 'N/A';
  }
  return letterGrade;
}