/*

Prompt:

Background:
In Japan, a game called Shiritori is played. The rules are simple, a group of people take turns calling out a word whose beginning syllable is the same as the previous player's ending syllable. For example, the first person would say the word ねこ, and the second player must make a word that starts with こ, like　こむぎ. This repeats until a player can not think of a word fast enough or makes a word that ends in ん, because there are no words that begin with ん　in the Japanese language.

English Shiritori has the same principle, with the first and last letters of words. That being said the lose condition is saying a word that doesn't start with the previous word's last letter or not saying a word quick enough.

For example: apple -> eggs -> salmon -> nut -> turkey ...

Your Task:
You will be given a list of strings, a transcript of an English Shiritori match. Your task is to find out if the game ended early, and return a list that contains every valid string until the mistake. If a list is empty return an empty list. If one of the elements is an empty string, that is invalid and should be handled.

*/

const shiritori = arr => {
  const firstWord = arr[0]
  
  if (!firstWord) {
    return [];
  }
  
  const correctWords = [firstWord]
  
  for (let i = 1; i < arr.length; i += 1 ) {
     const currentBegin = arr[i][0];
     const prevEnd = arr[i-1][arr[i-1].length-1];
     if ( currentBegin === prevEnd ) { correctWords.push(arr[i]) } else { break }
  }
  
  return correctWords;
}