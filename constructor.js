//function that create the object when properties are passed through it
// object creation is done through this way
function car(brand,model,color)
{
   this.brand=brand
   this.model=model
   this.color=color
   this.drive=function()
   {
    console.log("I am Driving"+this.model);
   }
}

let car1=new car("BMW","XS","White") //this will return an empty object
let car2=new car("Mercedes","S class","Red")
car1.drive();
// console.log(car2);