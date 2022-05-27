console.log("Objects...");

//You have already learned that JavaScript variables are containers for data values.
//Objects are variables too. But objects can contain many values.

const car = {                           // object
company:"Honda",
Model:2020,
Colour:"White",
 details : function(){return this.company+"  "+this.Model+"  "+this.Colour }
}   
console.log(car.details());       // calling object function

const car2 = {                           // 2nd object
company:"MG",          
Model:2020,
Colour:"blue"
}

console.log(car.details.call(car2));      //we can use function of other object.

