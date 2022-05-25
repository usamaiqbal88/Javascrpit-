/*The let keyword was introduced in ES6 (2015).
Variables defined with let cannot be Redeclared.
Variables defined with let must be Declared before use.
Variables defined with let have Block Scope.*/

console.log("let and const");

//with var we can redeclare a varibale but with let, we cant.
var x=5;
var x=6;
console.log(x);

//ES6 introduced two important new JavaScript keywords: let and const.
//These two keywords provide Block Scope in JavaScript.
//Variables declared inside a { } block cannot be accessed from outside the block:
{
  let y = 2;
}
// y can NOT be used outside
// With var, we can do this.
{
    var z = 2;
  }
  // z CAN be used outside

//Redeclaring a variable using the var keyword can impose problems.
//Redeclaring a variable inside a block will also redeclare the variable outside the block:
var c = 10;                   // Here c is 10
{
var c = 2;                    // Here c is 2
}
// Outside Here c is 2 , the var value will the last value declared.

//Redeclaring a variable inside a block will not redeclare the variable outside the block:
let w = 10;                  // Here w is 10
{
let w = 2;                   // Here w is 2
}
// OUtside Here w is 10, differ by parameter.

console.log(w);

  