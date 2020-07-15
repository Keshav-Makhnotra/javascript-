// Console function

// 1 log() method

/* This method is used for print the statement as output on screen but it's display on only developer console not in normal web page 

  syntax console.log(arguments)*/
  
  console.log("hey welcome friends")
  console.log ("1")
  console.log ("2")
  console.log ("3")
  console.log ("4")
  
//2 error() method

/* This method is mainly used for highlights the peice of code which is easy to debug on later, the message occurs with the highlighted with red color

  syntax console.error()*/

 console.error("WARNING");
  
//3 warn() methid

/* The warn method is also wotks like similar to error() method but here the message will show highligjted with yellow color

  syntax console.warn()*/

  console.warn()
  
// 4 clear() method

/* This clear() metod is uses the clear the console screen to empty screen */

  cosole.clear();
  
// 5 time() and endtime() method

/* Whenever we need to speed of execution so we hiw much time is taken to excute the particular program and to calculate the time we have tme() and endyime()  method
  where console.time() method is entry barrier and the console.endtime() method is the closing barrier to under stand see the program below where we find how tine taken to calculate the count till to 10
   */

  console.time('x');
    
    for(var i=1;i<=10;i=+1)
    console.log(i)
    
  console.endtime('x');
  
// 6 table)) method

/* The table() method is use to create a table format to display the data in good structure
  
  syntax console.table()*/
  
  console.table()
  
//7 count()

/* The count method is used for the count the numbers which is called by this method 
  syntax console.count()*/
  
  for (let i=0;i<5;i++)
    console.count(i)