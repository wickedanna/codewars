/*
It's pretty straightforward. Your goal is to create a function
that removes the first and last characters of a string.
You're given one parameter, the original string.
You don't have to worry with strings with less than two characters.
*/

const removeChar = (str) => {
  let stringVal = str.slice(0, -1).substring(1);
  return stringVal;
 }

/*
- It could have been simpler
- It started out with two slice methods, which did not work
- I found the substring method on stackoverflow
- A single slice method alone would have worked, if I had been a little more clever
*/