console.log("Operators...");
var a=5,b=10,c=15,d=20;
console.log(a+b*c/d);
a++;                             //increment
b--;                            //decrement
console.log(a);
console.log(b);

//        +=   ,	x += y	,   x = x + y

//the += assignment operator can also be used to add (concatenate) strings:
let text1 = "What a very ";
text1 += "nice day";          // text1 = text1 +  " nice day"
console.log(text1);

//Adding two numbers, will return the sum, but adding a number and a string will return a string:
let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;
console.log(x);
console.log(y);
console.log(z);