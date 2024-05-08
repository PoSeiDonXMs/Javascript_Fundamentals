//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
console.log(typeof scoreValue);

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(typeof anotherId);

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "madhav",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//  ++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) , Heap (Non-Primitive)

let myYoutubename = "Madhavsharma.com"
let anotherName= myYoutubename

 anotherName = "JavascriptFundamentals"

 console.log(myYoutubename);
console.log(anotherName);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo= userOne


console.log(userOne.email);
console.log(userTwo.email);