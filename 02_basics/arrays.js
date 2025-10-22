// Arrays: quick overview and commonly used methods (minimal notes)

// Literal arrays (recommended)
const myArr = [0, 1, 2, 3, 4, 5] // number array
const myHeors = ["shaktiman", "naagraj"] // string array

// Constructor form (works, but rarely needed versus literals)
const myArr2 = new Array(1, 2, 3, 4)
// Access example:
// console.log(myArr[1]) // -> 1

// --- Mutating methods (change the original array) ---
// End operations
// myArr.push(6)    // add at end, returns new length
// myArr.push(7)
// myArr.pop()      // remove last item, returns removed value

// Start operations
// myArr.unshift(9) // add at start, returns new length
// myArr.shift()    // remove first item, returns removed value

// --- Non-mutating lookups ---
// console.log(myArr.includes(9)) // true/false
// console.log(myArr.indexOf(3))  // index or -1 when not found

// --- String conversion (non-mutating) ---
// const newArr = myArr.join()     // e.g., "0,1,2,3,4,5" (string)
// console.log(myArr)              // original array unchanged
// console.log(newArr)             // joined string

// Optional: combining arrays (non-mutating)
// const combined = myArr.concat([6, 7])
// // or using spread:
// const combined2 = [...myArr, 6, 7]

// --- slice vs splice (IMPORTANT) ---
// slice(start, end) -> returns a shallow copy (end is EXCLUSIVE). Does NOT mutate the original.
console.log("A ", myArr) // before slice
const myn1 = myArr.slice(1, 3) // copies elements at index 1 and 2
console.log(myn1)              // [1, 2]
console.log("B ", myArr)      // original unchanged

// splice(start, deleteCount) -> removes/replaces in-place. DOES mutate the original.
const myn2 = myArr.splice(1, 3) // remove 3 items starting from index 1 -> [1,2,3]
console.log("C ", myArr)       // now [0, 4, 5]
console.log(myn2)               // removed items: [1, 2, 3]