// Small demo: object literal, Symbol keys, property access, mutation, freeze, and methods

// Symbols are unique and can be used as non-enumerable keys on objects
const mySym = Symbol("key1")

const JsUser = {
    // simple properties
    name: "Pawan",
    // property names with spaces must be quoted
    "full name": "Pawan Joshi",
    // computed property using a Symbol (won't show up in normal enumeration)
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "pawan@google.com",
    isLoggedIn: false,
    // array as a property
    lastLoginDays: ["Monday", "Saturday"]
}

// Accessing properties:
// dot-notation for normal identifiers
// console.log(JsUser.email)
// bracket-notation for computed keys or keys with spaces
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) // needed because of space
// Symbol-keyed properties require the symbol reference
// console.log(JsUser[mySym])

// Mutating a property is straightforward
JsUser.email = "pawan@google.com"

// Object.freeze(JsUser) // uncomment to make the object immutable
// After freeze, attempts to change properties are ignored (or throw in strict mode)
JsUser.email = "pawan@microsoft.com" // this will succeed unless the object is frozen

// Adding methods (functions) to the object
JsUser.greeting = function(){
    // logs a generic greeting; returns undefined
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    // `this` refers to the object when called as a method
    console.log(`Hello JS user, ${this.name}`);
}

// Calling the methods. Note: the functions themselves log values and return undefined,
// so wrapping them in console.log prints `undefined` after the method runs.
console.log(JsUser.greeting());      // logs greeting, then prints undefined
console.log(JsUser.greetingTwo());  // logs greeting with name, then prints undefined