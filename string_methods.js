console.log("---String Methods and Properties---");
//String Methods and Properties
//Primitive values, like "John Doe", cannot have properties or methods (because they are not objects).
//But with JavaScript, methods and properties are also available to primitive values, 
//Because JavaScript treats primitive values as objects when executing methods and properties.

let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = txt.length;
console.log(length);         //The length property returns the length of a string.

//Extracting String Parts
//There are 3 methods for extracting a part of a string.
//slice(start, end)
//substring(start, end)
//substr(start, length)

let str = "Car,bike,cycle";
let part = str.slice(5,11);      // slices out a portion of the string.
console.log(part);
//If a parameter is negative, the position is counted from the end of the string.
let part0 = str.slice(-8,-4);      // slices out a portion of the string.
console.log(part0);
//If you delete the second parameter, the method will slice out the rest of the string.
let part1 = str.slice(5);
console.log(part1);

//--Substring-- substr() is similar to slice().
//The difference is that the second parameter specifies the length of the extracted part.
let part2 = str.substr(2, 6);
console.log(part2);

//The replace() method replaces a specified value with another value in a string.
let text = "Please see my car.";
let newText = text.replace("car", "sportscar");
console.log(newText);

//A string is converted to upper case with toUpperCase():
let text1 = "Hi Busy Classmates!";
let text2 = text1.toUpperCase();
//A string is converted to lower case with toLowerCase():
let text3 = text1.toLowerCase();  // text2 is text1 converted to lower.
console.log(text2+" "+text3);

//concat() joins two or more strings:
let text4 = "Hello";
let text5 = "World";
let text6 = text4.concat(" ", text5);
console.log(text6);

//The trim() method removes whitespace from both sides of a string:
let text7 = "      Hi Busy Classmates!!!!      ";
let text8 = text7.trim();
console.log(text8);

//The padStart() method pads a string with another string:
let text9 = "5";
let padded = text9.padStart(6,"x");
console.log(padded);
//The padStart() method is a string method, To pad a number, convert the number to a string first.
let numb = 5;
let text10 = numb.toString();
let paddedtxt = text10.padStart(6,"0");
console.log(paddedtxt);

//  ----------Extracting String Characters
//There are 3 methods for extracting string characters:
//1- charAt(position), 2-charCodeAt(position), 3- Property access [ ]
let char = text.charAt(2);
console.log(char);

//The charCodeAt() method returns the unicode of the character at a specified index in a string:
let char1 = text.charCodeAt(3);
console.log(char1);

//Property access [ ]
let char2 = text[4];
console.log(char2);


