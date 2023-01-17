//use of call code reusability and reduce redundancy
//eg

let person1={
    name:"adam",
    age:12,
   
}

let person2={
    name:"shyam",
    age:13,
   
}
let showdet=function()
{
    console.log(this.name+"name"+this.age);
}
showdet.call(person2)  //concept of function borrowing function can work for multiple objects
 // in apply the external arguments are passed with the help of an array
//  showdet.apply(person2,["noida","bmw"])
// in bind it make function of function thus we need to store it and then invoke our bind function and function arguments are same as apply


