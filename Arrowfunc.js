console.log("Arrow")

/*function ask(question,yes,no){
  if (confirm(question)) yes()
  else no();
}
*/

ask = (question,yes,no)=>{
 if (confirm(question)) yes()
  else no();
}

ask (
  "Do you agree?",
  function(){alert ("you agreed.")},
  function(){alert ("you cancel the execution.")}
  )