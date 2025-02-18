 //Primitive Datatypes

// 7 types

// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

// reference types or non-primitive types

// 1. Object
// 2. Array
// 3. Function


const score = 100;
const scoreValue = 100.4;
const isLoggedIn = true;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherid = Symbol('123');

// console.log(id === anotherid);

const bigIntValue = 1234567890123456789012345678901234567890n;


//Reference types
//Arrays, Objects, Functions

const heroes= ["Superman", "Batman",] //Array
const user = {name: "John", age: 30} //Object
const greet=function(){
    console.log("Hello World")
} //Function

console.log(heroes);
console.log(user);
console.log(greet);

console.log(typeof heroes);
console.log(typeof user);
console.log(typeof greet);

console.log(typeof outsideTemp);

console.log(typeof greet);
console.log(typeof user);
console.log(typeof heroes);


// Stack (Primitive , Heap (Non-Primitive)
let myYoutubeName = "hi"

let anotherName = "bye"
anotherName="hello"
console.log(anotherName);

let userone={
    email:"Use@gmail.com",
    upiid:124
}

let usertwo= userone

usertwo.email="Pg@gmail.com"

console.log(userone.email);// if we will put inverted commas it will print the original value
console.log(usertwo.email);







