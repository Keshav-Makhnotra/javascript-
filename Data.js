// var

/* In java script we need to declartion of variable to which we used the 'var' keyword
  and the scope is function scope which works entire program*/
  
  // Ex:-
  
/*var  a=5;
var  b=5;
var  z=a+b;
  console.log("value of z is ",+z)
  
  alert("script is work fine")
  */
  
  
  //const 
/*  const a=5
   a=10
  console.log("value of a = ",+a)
  
  in the above program that program not be executed, if we try the error has occur bcoz here a is const variable and the in next line we try to change its value whoch is not possible. If we comment the second line then its work fine and show its value is 5*/
  
//let 

/* let is anoher way of declartion this is work like var declartion but let's scope is depend on scope of block which is next to it.*/

var a=5;
{
  let a=2
  console.log(a)//here a value is 2
}

console.log(a)//here again it value change back to 5