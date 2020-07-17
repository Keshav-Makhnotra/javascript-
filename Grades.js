console.log("hello")

let mark=prompt("Enter your marks")

// if else
/*
if(mark >= 75){
console.log("Marks are "+mark+" and grade is S");
}
else if(mark >= 60 && mark <75){
console.log("Marks are "+mark+" and grade is A");
}
else if(mark >= 50 && mark <60){
console.log("Marks are "+mark+" and grade is B");
}
else if(mark >= 40 && mark <50){
console.log("Marks are "+mark+" and grade is C");
}
else if(mark >= 33 && mark <40){
console.log("Marks are "+mark+" and grade is D");
}
else{
  console.log("Fail")
}
*/

// switch
let x=mark;

x=x/10;

x=Math.round(x);
switch (x) {
  case 10  :
  case 9:
  case 8:
    console.log("Marks are "+mark+" and grade is S");
    break;
  case 7:
  case 6:
    console.log("Marks are "+mark+" and grade is A");
    break;
  case 5:  
    console.log("Marks are "+mark+" and grade is B");
    break;
  case 4:
    console.log("Marks are "+mark+" and grade is D");
    break;
  default:
    console.log("Fail")
}


// ternary
/*
mark >= 75 ?console.log("Marks are "+mark+" and grade is S") :mark >= 60 && mark <75 ?console.log("Marks are "+mark+" and grade is A"):mark >= 50 && mark <60 ?console.log("Marks are "+mark+" and grade is B"):mark >= 40 && mark <50?console.log("Marks are "+mark+" and grade is C"):mark >= 33 && mark <40 ?console.log("Marks are "+mark+" and grade is D") : console.log("Fail");
*/