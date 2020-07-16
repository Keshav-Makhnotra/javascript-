console.log("hello")

function odd(a){
  if(a%2==0)
 // console.log("Even")
 result = "The entered number is "+a+" and the number is even";
  else
 // console.log("Odd")
result = "The entered number is "+a+" and the number is odd";

return result
}

let num=prompt("Enter the number ")
odd(num)

console.log(result)