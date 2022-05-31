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

var m=5;
var n=10;
let w=add(a,b);
let x=subtract(a,b);
let y=Multiply(a,b);
let z=division(a,b);
function add(x,y){
    return m+n;
}
function subtract(x,y){
  return m-n;
}
function Multiply(x,y){
  return m*n;
}
function division(x,y){
  return m/n;
}
console.log("Addition = "+w);
console.log("Subtraction = "+x);
console.log("Multiplication = "+y);
console.log("Division = "+z);
