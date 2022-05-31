console.log("TEST 1");

// Question no 1.

const obj = { name:"Ali", 
age:10 , 
email:"sam@gmail.com", 
address:"Gujrat",
avg : function(g,h,i,j,k,l){                    //function
      var average=(g+h+i+j+k+l)/6;
      return average;
}
};
console.log(obj.name +"\n" + obj.address);

for(var i=0; i<10; i++){ 
    obj.age++;                        //increment in age
}
console.log("Age : "+obj.age);

var a=45,b=50,c=23,d=54,e=54,f=54;
var average = obj.avg(a,b,c,d,e,f);       // function call, passing arguments
console.log("Average = "+average)

// Question No 2.

var m=10;
var n=10;
let w=add(m,n);
let x=subtract(m,n);
let y=Multiply(m,n);
let z=division(m,n);
function add(o,p){
  var q= o+p 
  return q;
}
function subtract(o,p){
  var q= o-p 
  return q;
}
function Multiply(o,p){
  var q= o*p 
  return q;
}
function division(o,p){
  var q= o/p 
  return q;
}
console.log("Addition = "+w);
console.log("Subtraction = "+x);
console.log("Multiplication = "+y);
console.log("Division = "+z);
