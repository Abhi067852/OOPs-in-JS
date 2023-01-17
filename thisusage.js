//This keyword behaves in differently in different environments(NodeJs and Browser)
// JS has two modes to run Strict Mode and Non Strict Mode

//this keyword in node with non strict mode
// console.log(this)
// function->log
// object->function
// object->function->function
// console.log(this); // return an empty object


// function showThis()
// {
//     console.log(this);
// }
// showThis(); //return a global object which having all details

// let obj={
//     name:"adm",
//     f:function(){
       
//             console.log(this);
      
//     }
// }
// obj.f(); // return complete object itself

// let obj={
//     name:"adm",
//     f:function(){
//         function g()
//         {
//             console.log(this);
//         }
//         g();
//     }
// }
// obj.f(); // return global object 


//this keyword in node with strict mode
'use strict'
// console.log(this) //return empty
// function showThis()
// {
//     console.log(this);
// }
// showThis(); //return undefined React by default works in strict mode

// let obj={
//     name:"adm",
//     f:function(){
       
//             console.log(this);
      
//     }
// }
// obj.f(); // return complete object itself

// let obj={
//     name:"adm",
//     f:function(){
//         function g()
//         {
//             console.log(this);
//         }
//         g();
//     }
// }
// obj.f(); // return global object 


// this keyword in browser
//non strict mode
// console.log(this) returns window object
// function->log    returns window object
// object->function returns object itself
// object->function->function return window object
 
//strict mode
// console.log(this) returns window object
// function->log return undefined
// object->function return object itself
// object->function->function return undefined







