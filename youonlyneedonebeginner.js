/* 
Prompt:
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/

// the oringal solution
function check(a, x) {
  if (a.includes(x)) {
    return true;
  }
  else {
    return false
  }
}

// the refactored solution
const check = (a, x) => a.includes(x);

/*
Notes:
This solution was 5 months ago from today, so I have no relevent notes,
I will not refactor a second time.
*/