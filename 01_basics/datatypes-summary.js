// JavaScript Data Types
// ------------------------

// 1. Primitive Data Types (Immutable)
// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

const num = 100;                  // Number → typeof = "number"
const floatNum = 100.5;           // Number → same type
const str = "Hello";              // String → typeof = "string"
const isActive = true;            // Boolean → typeof = "boolean"
const emptyVal = null;            // Null → typeof = "object" (special case)
let notAssigned;                  // Undefined → typeof = "undefined"
const id1 = Symbol('123');        // Symbol → typeof = "symbol"
const id2 = Symbol('123');        
console.log(id1 === id2);         // false → each Symbol is unique
const bigNum = 98765432123456789n;// BigInt → typeof = "bigint"

// JavaScript is Dynamically Typed
// Variable types are decided at runtime
let x = 5; 
x = "Now I am a string!";         // No error, type can change dynamically


// Range of Primitive Types
// Number  : -2^53 to 2^53 (approx ±9e15)
// String  : Unlimited (depends on memory)
// Boolean : true / false
// Undefined : only one value → undefined
// Null : only one value → null
// Symbol : always unique
// BigInt : practically unlimited (depends on memory)


// 2. Non-Primitive (Reference) Data Types (Mutable)
// Includes: Object, Array, Function, Date, RegExp

const arr = ["shaktiman", "naagraj", "doga"]; // Array → typeof = "object"
const obj = { name: "Hitesh", age: 22 };      // Object → typeof = "object"
const func = function() {                     // Function → typeof = "function"
  console.log("Hello World");
};

// Special Objects
// Date    → represents time & date
// RegExp  → represents patterns for matching strings

console.log(typeof arr);    // "object"
console.log(typeof obj);    // "object"
console.log(typeof func);   // "function"

// Summary Table
/*
| Category       | Data Type  | typeof Result |
|----------------|-------------|---------------|
| Primitive      | Number      | "number"      |
|                | String      | "string"      |
|                | Boolean     | "boolean"     |
|                | Null        | "object"      |
|                | Undefined   | "undefined"   |
|                | Symbol      | "symbol"      |
|                | BigInt      | "bigint"      |
| Non-Primitive  | Object      | "object"      |
|                | Array       | "object"      |
|                | Function    | "function"    |
*/

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "pAwAn"

let anothername = myYoutubeName
anothername = "hello"

console.log(anothername);
console.log(myYoutubeName);


let user = {
email: "user@google.com",
upi: "user@ybl"
}

let user1= user
user.email = "pawan@microsoft.com"

console.log(user.email);
console.log(user1.email);
