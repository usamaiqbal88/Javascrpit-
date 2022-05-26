console.log("DAtatypes...");
//JavaScript variables can hold different data types: numbers, strings, objects and more.
//When adding a number and a string, JavaScript will treat the number as a string.
let a = 16 + 4 + "Volvo" + 5 + 5;
console.log(a);
//JavaScript evaluates expressions from left to right. Different sequences can produce different results.

//JavaScript has dynamic types. This means that the same variable can be used to hold different data types:
let b;           // Now x is undefined
b = 5.9;           // Now x is a Number
//b = "sam";      // Now x is a String
console.log(b);

let x = 5;
let y = 5;
let z = 6;
console.log(x == y);    // return true
console.log(x == z);    //return false

console.log("JavaScript Arrays");
//avaScript arrays are written with square brackets. Array items are separated by commas.
const car = ["BMW","MG","Audi"];
console.log(car[0]+car[1]+car[2])

console.log("JavaScript Objects");
//JavaScript objects are written with curly braces {}. Object properties are written as name:value pairs, separated by commas.
const bike = {model:2022,colour:"White"};
console.log(bike.model+bike.colour);

console.log(typeof 3);        //return typeof number
console.log(typeof a );        // //return typeof string.
let d;                       //undefind value.
console.log(d);             //return undefined.