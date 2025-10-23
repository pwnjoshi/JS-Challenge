// Two arrays of hero names (strings)
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// If you push an array into another array it becomes a nested array
// marvel_heros.push(dc_heros)

// Inspecting the array or nested values after a push
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // access element of the pushed array

// concat returns a new array that joins two arrays (doesn't mutate originals)
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

// Spread operator creates a new merged array (shallow copy)
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

// Example with nested arrays
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
  
// flat(Infinity) flattens all nested arrays into a single-level array
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); // -> [1,2,3,4,5,6,7,6,7,4,5]


// Array utility helpers
console.log(Array.isArray("Hitesh")) // false - checks if value is an array
console.log(Array.from("Hitesh")) // ['H','i','t','e','s','h'] - from iterable (string)
console.log(Array.from({name: "hitesh"})) // [] - object without length/iterable becomes empty array

let score1 = 100
let score2 = 200
let score3 = 300

// Array.of creates an array from arguments (useful to avoid Array(3) behavior)
console.log(Array.of(score1, score2, score3)); // -> [100, 200, 300]