console.log("HELLO")

// 1 take postive number from user
/*while(1){
let a= prompt("Enter number")
  if(a>=0){
  console.log(a)
  break;
  }
  else
  alert('the number is negative please try again')
} */

// 2 make an arrya

/*let arr=[];
for(let i=0; i<n;i++){
  let x=prompt("Enter the value of element")
  arr[i]=x
}

console.log(arr); */

// 3 higher order function

/*let a=[3,6,8,10,11,15,20];

let odd = a.filter(el=>el%2!=0)

console.log(odd) */

// 4 generate cube number

let a=[3,6,8,10,11,15,20];

let odd = a.filter(el=>el%2!=0)

let cube = a.filter(el=>el%2!=0).map(el=>el**3)

console.log(odd)
console.log(cube)
