console.log("---Number Methods---")

//The toString() method returns a number as a string.
let x = 9;
let y = x.toString();
let z = y.padStart(6,"0");
console.log(z);

//toFixed() returns a string, with the number written with a specified number of decimals:
let a = 56.777
let b = a.toFixed(5);
console.log(b);

//toPrecision() returns a string, with a number written with a specified length.
let c = a.toPrecision(2);
console.log(c);

//Number() can be used to convert JavaScript variables to numbers.
let d = "2345,3456";
let e = Number(d);
console.log(e);

//parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned.
let f = parseInt(d);
console.log(f);

let g = Number.MAX_VALUE;
console.log(g);
