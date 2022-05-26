console.log("const variables");

/*Variables defined with const cannot be Redeclared.
Variables defined with const cannot be Reassigned.
Variables defined with const have Block Scope.*/

const pi = 3.146;
//pi = 3.14;                         // This will give an error
//pi = pi + 10;                     // This will also give an error
//console.log(pi);                 error
//JavaScript const variables must be assigned a value when they are declared: const p=5;

/*The keyword const is a little misleading.
It does not define a constant value. It defines a constant reference to a value.
Because of this you can NOT: Reassign a constant value, Reassign a constant array, Reassign a constant object
But you CAN: Change the elements of constant array and Change the properties of constant object*/

const car = ["Honda","Toyota","Hyundai"]; 
car[1]="BMW";                //we can change an element
car.push("MG");               //we can add an element
console.log(car[0]+" "+car[1]+" "+car[2]+" "+car[3]);  
//But we can NOT reassign the array: car =[-------]; not allowed 

// IN Objects
const phone = {model:"Iphone",colour:"Gold",storage:"64"}
phone.storage="128";          //we can change a property
phone.health="100%";         // we can add a property
console.log(phone.model+" "+phone.colour+" "+phone.storage+" "+phone.health);

//But we can not reassign the object phone.