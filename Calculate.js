console.log("hey!!")

let op=prompt("Enter the arithmetic sign which operation you want to perform")

let num1=prompt()
let num2=prompt()

console.log(num1,num2)


switch(op){
  case '+':
    console.log(+num1 + +num2)
    break;
  case '-':
    console.log(+num1 - +num2)
    break;
  case '*':
    console.log(+num1 * +num2)
    break;
  case '/':
    console.log(+num1 / +num2)
    break;
  case '%':
    console.log((+num1 + +num2)/2)
  default:
  console.log("Invalid option")
}