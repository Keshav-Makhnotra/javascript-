console.log("!!hello!!")

function check(x){
  return (x>100) ? console.log(x) : (x==null || x==" ")?console.log('User cancel the process'):alert('try again')
  
}
while(1){
  let a = prompt("Enter number")
  check(a) 
  if(a>100 || a== null)
  break

}