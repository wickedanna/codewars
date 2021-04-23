/*

Prompt:

There are five workers : James,John,Robert,Michael and William.They work one by one and on weekends they rest. Order is same as in the description(James works on mondays,John works on tuesdays and so on).You have to create a function 'task' that will take 3 arguments(w, n, c):

Weekday

Number of trees that must be sprayed on that day

Cost of 1 litre liquid that is needed to spray tree,let's say one tree needs 1 litre liquid.

Let cost of all liquid be x

Your function should return string like this : 'It is (weekday) today, (name), you have to work, you must spray (number) trees and you need (x) dollars to buy liquid'

For example:

task('Monday', 15, 2) -> 'It is Monday today, James, you have to work, you must spray 15 trees and you need 30 dollars to buy liquid'
*/

// First

const workers = [{weekday: 'Monday', person: 'James'}, {weekday: 'Tuesday', person: 'John'}, {weekday: 'Wednesday', person: 'Robert'}, {weekday: 'Thursday', person: 'Michael'}, {weekday: 'Friday', person: 'William'}];

const task = (day, numOfTrees, costOfFluid) => {
	const dayWorker = workers.find((worker) => worker.weekday === day ? worker.person : '');
  return `It is ${day} today, ${dayWorker.person}, you have to work, you must spray ${numOfTrees} trees and you need ${costOfFluid * numOfTrees} dollars to buy liquid`;
};

// Refactored
const workers = {'Monday': 'James', 'Tuesday': 'John', 'Wednesday': 'Robert', 'Thursday': 'Michael', 'Friday': 'William'};

const task = (day, numOfTrees, costOfFluid) => `It is ${day} today, ${workers[day]}, you have to work, you must spray ${numOfTrees} trees and you need ${numOfTrees * costOfFluid} dollars to buy liquid`;

/* 
Something I learned:
I was trying to use the keys and have an object like this:
const workers = [{Monday: 'James'}, {Tuesday: 'John}...];
but I couldn't figure out how to get it work with the keys.
here's what the object should look like:
const workers = {'Monday': 'James', 'Tuesday': 'John'}
`It is ${day} today, ${workers[day]}, you have to work, you must spray...'

*/