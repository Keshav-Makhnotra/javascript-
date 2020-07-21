console.log("Classes in js")

class User{
  constructor(name,age,email){
   this.name = name;
   this.age = age;
   this.email = email;
   this.Coins=0;
   this.course =[];
  }
  login(){
    console.log(this.name+' is login');
  }
  logout(){
    console.log(this.name+' is logout');
  }
}

class Moderator extends User{
  constructor(name,age,email){
    super(name,age,email)
    this.coin=0;
  }
  addcoin(){
    this.coin++;
    console.log(this.coin+' coins')
  }
  removecoin(){
    this.coin--
    console.log(this.coin+' coins')
  }
}

class Admin extends Moderator{
    addCourse(user,course){
       user.course.push(course);
       console.log(user);
}
}

let a= new User('kira',18,'kira@gmail.com')
let b= new User('L',19,'l123@gmail.com')
  //  a.login()
let mod= new Moderator('Light',19,'l@gmail.com')
  //  console.log(mod)
 //  mod.addcoin(),mod.addcoin()
let admin= new Admin('Ryuk',25,'Ryuk@gmail.com')
  admin.addCourse(a,'german language')
  
 let user=[a,b,mod,admin];
  user.forEach(el=>{
    console.log(el);
  })