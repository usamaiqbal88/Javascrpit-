console.log("---Numbers---")
//avaScript has only one type of number. Numbers can be written with or without decimals.
let a=9;
//Extra large or extra small numbers can be written with scientific (exponent) notation.
let b= 9e5;  //900000
let c = 8e-5;  //0.00008

console.log(a +" "+b+" "+c);

let d = 1.5;
let e = 2.5;
let f = d+e;
let g = 2.5+3.5;
console.log(g);

let x = 10;
let y = 20;
let z = x + y + "The result is: ";
console.log(z);

//JavaScript will try to convert strings to numbers in all numeric operations:
let h = "100";
let i = "10";
let j = h / i;
console.log(j);

let k = 10 /"s";
console.log(k);

let l = 2/0;
console.log(l);