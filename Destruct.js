console.log("hello")

const id = {
  name : "helsenki",
  age : 24,
  projects :{  
    dicegame : "two player dice game using js"
  },
}

const {name,projects :{dicegame}} = id
console.log(name, dicegame)