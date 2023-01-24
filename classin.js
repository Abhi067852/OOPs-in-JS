//creation of objects with the help of class
class person{
    constructor(name,age)
    {
        this.name=name,
        this.age=age
        
    }
    showDetails()
    {
        return this.name
    }

}
// it is ot suggested to use inheritance in JS 
class Personchild extends person{
    constructor()
    {
        super('steve')
    }
}
let person1=new Personchild()
console.log(person1.showDetails());