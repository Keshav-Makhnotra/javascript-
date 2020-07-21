console.log("hiii")

let n=prompt("Enter number")
let k=0;
const x=[]

for(let i=1; i<=10 ; i++){
  k=n*i;
  x.push(`${n}×${i}=${k}`)
 // console.log(`${n}×${i}=${k}`);
}
//console.log(x)

const list = document.querySelector('#list')
 console.log(list)
 
x.forEach(xyz=>{
  list.innerHTML += `${xyz} <br>`;
}) 
 