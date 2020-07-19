console.log("prime")

let n=prompt("Enter the number till which you want to search the series of prime no.")


for(let i=2;i<=n;i++){
  let a=0;
  for(let x=2;x<=i;x++){
    if(i%x==0){
      a=a+1;
    }
  }
  if(a==1)
  console.log(i)
}