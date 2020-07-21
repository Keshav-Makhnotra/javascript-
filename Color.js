console.log("Hey!!")

  let color = ["black", "blue", "brown", "green","orange"];
 
 console.log(color)
 
 const list = document.querySelector('#list')
 console.log(list)
 
 color.forEach(colour=>{
list.innerHTML += `<li>${colour}</li>`;
})
 
 setTimeout(function() {
document.body.style.backgroundColor = 'aqua';},
5000);