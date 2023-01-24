//use of function prototype to implement bind
let person1={
    name:"Adam",
    age:25,

}
let showdet=function(city,area)
{
    console.log(this.name,this.age,city,area);
}


Function.prototype.myBind=function(...args)
{

    let obj=this
    params=args.slice(1)
    return function()
    {
        obj.apply(args[0],params) 
    }
}
let showdetbind=showdet.myBind(person1,"New Delhi","India");
showdetbind();