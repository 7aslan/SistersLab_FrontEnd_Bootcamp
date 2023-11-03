let a = 2;
let b = 3;
let c = 2;
(a == b) // false
(a == c) // true

typeof "John Doe" // string
typeof 3.14 // number
typeof true // boolean
typeof 234567890123456789012345678901234567890n // bigint
typeof undefined // undefined
typeof null // object
typeof Symbol('symbol') //  [object Symbol]

let x = 2;
let y = "2";
(x == y) // true
(x === y) // false

let x = 3;
let y = "3";
x + y // 33

let x = 24;
let y = "Hello";
x + y // 24Hello

let name = "Vivek";
let surname = " Bisht";
name + surname // "Vivek Bisht"

let x = 3;
let y = "3";
x - y //  0

let x = 0;
let y = 23;

if(x) { console.log(x) } // ? IDK

if(y) { console.log(y) } // 23

isNaN("Hello") // true
isNaN(345) // False?
isNaN('1') // False 
isNaN(true) // false ?
isNaN(false) // false
isNan(undefined) // true
