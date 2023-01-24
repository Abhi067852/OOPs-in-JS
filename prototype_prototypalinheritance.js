//arrays are object in js
let arr=[1,2,3,4,5]
let person ={
    name:"steve",
    age:23,
    showdet:function()
    {
        console.log(this.name+this.age);
    }
}
let person2={
    name:"Steve"
}
person2.__proto__=person
//this is done with the help of prototypal inheritance
//one object prototypes has access to other objects prototypes
console.log(person2.age);