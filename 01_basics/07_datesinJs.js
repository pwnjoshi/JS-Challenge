// Dates and Time in JS 

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("05-15-2023")
console.log(myCreatedDate.toLocaleString());

// Above are the different ways to create a date in JavaScript.

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// // This will give the timestamp in milliseconds from 1st Jan 1970 to now.

// console.log(myCreatedDate.getTime());
// // This will give the timestamp of the created date in milliseconds from 1st Jan 1970 to that date.

console.log(myCreatedDate.getFullYear());
console.log(myCreatedDate.getMonth());
console.log(myCreatedDate.getDate());
console.log(myCreatedDate.getDay());
console.log(myCreatedDate.getHours());
console.log(myCreatedDate.getMinutes());
console.log(myCreatedDate.getSeconds());
console.log(myCreatedDate.getMilliseconds());

// The above methods will give the respective parts of the date.
// Note: Month is 0-indexed (0 = January, 1 = February, ..., 11 = December)
// Day is 0-indexed (0 = Sunday, 1 = Monday, ..., 6 = Saturday)


// `${newDate.getDay()} and the time `

// let newDate = new Date()

// newDate.toLocaleString('default', {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
//     millisecond: "numeric"
// })