/*
Prompt:
Write a function that takes an array of strings as an argument
and returns a filtered array containing the same elements
but with the 'geese' removed.

The geese are any strings in the following array,
which is pre-populated in your solution:

geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:

["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
*/

const filterGeese = (arr) => {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  const animals = arr.filter(function(item) {
    return !geese.includes(item);
  })
  return animals;
};

/*
I found a way that worked with the filter method on freeCodeCamp.

After completing the challenge, I can see that there is a shorter way without needing parts of that filter method,
so I will refactor later on.
*/