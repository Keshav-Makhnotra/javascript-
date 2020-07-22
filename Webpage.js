console.log('hello')

const name= prompt('Enter name')

title.innerText += `HELLO, ${name} Welcome to my first page`;

const ctime = document.getElementById('clock')

function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

setInterval(clock,1000);

//const txt = document.getElementByTagName('h4');
//txt.classList.toggle('mystyle')

let d=document.getElementById("bttn")

d.onclick = function change(){
  
  document.body.style.backgroundColor= 'black';
  document.body.style.color = 'white';
  
} 

