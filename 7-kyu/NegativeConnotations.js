/*

Prompt:

You will be given a string with sets of characters, (i.e. words), seperated by between one and three spaces (inclusive).

Looking at the first letter of each word (case insensitive-"A" and "a" should be treated the same), you need to determine whether it falls into the positive/first half of the alphabet ("a"-"m") or the negative/second half ("n"-"z").

Return True/true if there are more (or equal) positive words than negative words, False/false otherwise.

"A big brown fox caught a bad rabbit" => True/true
"Xylophones can obtain Xenon." => False/false

*/

const connotation = phrase => {
  let posCount = 0;
  let negCount = 0;
  const phraseArr = phrase.toLowerCase().split(' ').filter((word) => word.length > 0);
  phraseArr.forEach((item) => {
    if (!item.charAt(0).search(/[a-m]/)) {
      posCount++;
    } else if (!item.charAt(0).search(/[n-z]/)) {
      negCount++;
    }
  })
  return posCount >= negCount ? true : false;
};
