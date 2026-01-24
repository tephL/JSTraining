const date = new Date();
console.log(date);

// making a date object with params
// order (year, month, day, hour, minute, sec, millis)

// everything starts at 0 like an array and overlapping the date limitation 
// (e.g. month 12) will just add that up and add it up to a new year
const dateAtk = new Date(2001, 8, 12); 
console.log(dateAtk);

// one arg would make a date obj of time since Unix epoch
const epoch = new Date(12222222222222).toString(); // adding toString() makes it neat
console.log(epoch);

const ms = new Date();
let test = ms.getYear() + 1900; 
console.log(test);

let date1 = new Date(2001, 8, 11).getTime();
let date1v2 = new Date(date1);
let date2 = Date.now();
let date2v2 = new Date(date2);

let msPerDay = 86400000; 
let dateDistance = Math.floor((date2 - date1) / msPerDay); 
/* getting date distance by:
    1. getting the millis of each diff dates
    2. subtracting those 2 millis
    3. dividing the result to how much millis there are in a day
    4. using Math.floor() to round it up
*/  

console.log(`date of twin towers death: ${date1} | ${date1v2}`);
console.log(`date rn: ${date2} | ${date2v2}`);
console.log(`days since that: ${dateDistance}`);