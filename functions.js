console.log("Functions...");

//A JavaScript function is a block of code designed to perform a particular task.
//A JavaScript function is executed when "something" invokes it (calls it).

var s=25,p=40;
let x=add(s,p);         //the returning value from function will be stored in variable x.
function add(a,b){
    return a+b;
}
console.log(x);

let farhenhiet=40;
function tocelcius(farhenhiet){
    return (5/9) * ( farhenhiet-32);
}
//let v=tocelcius(farhenhiet);
console.log("The temperature is " + tocelcius(farhenhiet) +" Celcius." );   // can use function call in direct output


