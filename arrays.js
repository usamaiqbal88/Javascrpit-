console.log("-----Arrays----");
//An array is a special variable, which can hold more than one value.

const car = ["MG", "BMW", "Proton"];
//const carr = new Array("MG", "BMW", "Proton");
//car[2]="Audi";
car[3] = "Audi";
car.push("Haval");
//console.log(car[0] + car[1] + car[2]);
console.log("ALl Array elements of car : " + car);   

let l = car.length;       // return length of array.
console.log("Array length : "+ l);
console.log("Last array element : "+car[car.length-1]);    //access the last array element

for ( var i=0; i<car.length; i++){
    console.log( "Car Array element No "+i+" : " + car[i]);      // return array elements by for loop.
}

//Arrays are a special type of objects. Objects use names to access its "members".
const person = {name:"sam", age:"21", hobby:"driving"}
console.log("Person hobby : "+ person.hobby);

let type = typeof car;
console.log("Person is type of  "+ type);   // The typeof operator returns object because a JavaScript array is an object.

let a = Array.isArray(person);
console.log("This is an array? "+ a);   // returns true if it is an array.

let b= person instanceof Array;      //The instanceof operator returns true if an object is created by a given constructor.
console.log(b);






