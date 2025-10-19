// Demonstrates basic JavaScript string operations.

// Primitive string and number
const name = "pawan"
const repoC = 100

// Concatenation with +
// When mixing strings and numbers, + performs string concatenation.
console.log(name + repoC + "Value"); // -> "pawan100Value"

// Template literals (preferred for readability).
// NOTE: template literals require backticks (`), not single quotes (').
// The original single-quoted line would NOT interpolate variables:
//   // console.log('Hello my name is ${name} and my repo count is ${repoC}');
console.log(`Hello my name is ${name} and my repo count is ${repoC}`); // -> "Hello my name is pawan and my repo count is 100"

// Creating a String object (rarely needed; primitives are usually preferred)
const gameName = new String('chai')

// Accessing characters and prototype (examples)
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// Length and case methods (String primitives are auto-boxed so methods work)
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));     // char at index 2 -> 'a'
console.log(gameName.indexOf('t'));  // -1 if not found; 't' not in 'chai'

const newString = gameName.substring(0, 4) // substring(start, end) end is exclusive
console.log(newString);                    // -> 'chai'

const anotherString = gameName.slice(-8, 4) // slice supports negative indices
console.log(anotherString);                 // -> 'chai' (same result here)

// Whitespace trimming
const newStringOne = "   hitesh    "
console.log(newStringOne);         // shows surrounding spaces
console.log(newStringOne.trim());  // removes leading/trailing whitespace -> 'hitesh'

const url = "https://hiteshsirchai.com/hitesh%20choudhary"

// replace replaces first match; use regex with /g for global replacement
console.log(url.replace('%20', '-')) // -> "https://hiteshsirchai.com/hitesh-choudhary"

// includes returns boolean indicating substring presence
console.log(url.includes('sundar')) // -> false

// split converts string to array using the separator
console.log(gameName.split('-')) // -> ['chai']