console.log("bye")

let sell=prompt("Enter amount")

if(sell <= 5000){
  let a=(sell/100)*2
  console.log("commission earn by "+ a+ "Rs")
}
else if(sell >5000 && sell <= 10000){
  let b=(sell/100)*5
  console.log("commission earn by "+ b+ "Rs")
}
else if(sell >10000 && sell <= 20000){
  let c=(sell/100)*7
  console.log("commission earn by "+ c+ "Rs")
}
else {
let d=(sell/100)*10
  console.log("commission earn by "+ d+ "Rs")
}