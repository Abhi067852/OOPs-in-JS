function add(a,b)
{
    console.log(a+b);
}
add(2,4);
let addwith2=add.bind(this,2) //curring initial bind of function 
addwith2(9);