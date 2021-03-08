/*
Prompt:
This is a spin off of my first kata.

You are given a list of character sequences as a comma separated string.

Write a function which returns another string containing all the character sequences
except the first and the last ones, separated by spaces.

If the input string is empty, or the removal of the first and last items would cause the string to be empty, return a null value.
*/


// for the record, this solution works in the console, but fails on codewars
// side note: does not remove space from before and after 
const removeFirstAndLast = (str) => {
  const stringVal = str.replaceAll(',', '').slice(1, -1);
  if (stringVal.length > 0) {
    return stringVal;
  } else {
    return null;
  }
}

const removeFirstAndLastTwo = (str) => {
  const stringVal = str.split(',').slice(1, -1).join('');
  stringVal.length ? stringVal : null;
}

/*
Notes:
The first thing I did was write out the steps with as much detail as I could.
I was missing a string method to replace all the commas in the string with spaces, but I knew I needed one and where it belonged.
My next step was to look at the MDN docs on string methods. The old way may have been to use the split method and some extra steps,
but there is now a replaceAll string method which will do exactly what I need it to do.

I made a note to use either the slice method once, which I learned with the first remove first and last characters challenge.
*/