console.log("---String Search---")

//JavaScript Search Methods
//String indexOf()
//String lastIndexOf()
//String startsWith()
//String endsWith()

//The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
let str = "Please locate where 'locate' occurs!";
let s= str.indexOf("where");
console.log(s);

//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
let str1 = "Please locate where 'locate' occurs!";
let c= str.lastIndexOf("locate", 6);    //accept a second parameter as the starting position for the search.
console.log(c);

//The search() method searches a string for a specified value and returns the position of the match:
let str2 = "Please locate where 'locate' occurs!";
let e = str.search("locate");
console.log(e);
//The two methods indexOf() and search() are NOT equal. 
//The search() method cannot take a second start position argument.
//The indexOf() method cannot take powerful search values (regular expressions).

//The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
//Search a string for "ain":
let text = "The rain in SPAIN stays mainly in the plain";
let t= text.match(/ain/g);
console.log(t);

//The includes() method returns true if a string contains a specified value.
let text1 = "Hello world, welcome to the universe.";
let p = text1.includes("t");
console.log(p);

//The startsWith() method returns true if a string begins with a specified value, otherwise false:
let text2 = "Hello world, welcome to the universe.";
let v= text2.startsWith("Hello");
console.log(v);

//The endsWith() method returns true if a string ends with a specified value, otherwise false:
//Check if a string ends with "Doe":
let text3 = "John Doe";
let u= text3.endsWith("Doe");
console.log(u);

