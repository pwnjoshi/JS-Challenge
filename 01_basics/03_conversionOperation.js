// DAY 5 Of JS Challenge

// Conversion Operation

// 1. Implicit Conversion
// 2. Explicit Conversion

// Implicit Conversion

// console.log("5" + 3); // "53" => String
// console.log("5" - 3); // 2 => Number
// console.log("5" * "3"); // 15 => Number
// console.log("10" / "2"); // 5 => Number
// console.log("5" + true); // "5true" => String
// console.log("5" - true); // 4 => Number
// console.log(false + true); // 1 => Number
// console.log(2 + null); // 2 => Number
// console.log(2 + undefined); // NaN => Number

// Explicit Conversion - kal

// from yt


let score = "Meri Chai"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "Meri Chai"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Meri Chai" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ****** Operations ********

let value = 3
let negValue = -value

// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"

let str2 = " chai"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// NOTE : TO STUDY ABOUT TYPE CONVERSION HERE
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion