console.log("welcome")

// strings 

/* substring
Returns the characters in a string between “from” and “to” indexes, NOT including “to” inself. “To” is optional, and if omitted, up to the end of the string is assumed.*/

let a="hello world"
a=a.substring(1,5)
console.log(a)

/* slice
Returns a substring of the string based on the “start” and “end” index arguments, NOT including the “end” index itself. “End” is optional, and if none is specified, the slice includes all characters from “start” to end of string.*/

let b="Programming "
let c=b.slice(3,7)
console.log(b)
console.log(c)

/* replace
Searches and replaces the regular expression (or sub string) portion (match) with the replaced text instead.*/

let v="I love programming"
v=v.replace(/love/i, "hate")
console.log(v)

/* split
Splits a string into many according to the specified delimiter, and returns an array containing each element. The optional “limit” is an integer that lets you specify the maximum number of elements to return.*/

let x="sunflower"
z=x.split(1)
console.log(x)
console.log(z)

// array

/* delete
Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete:*/

let i=['roy','ajay','ash']
delete i[0]
console.log(i)

// Sort 
//The sort() method sorts an array alphabetically:

let k=['roy','ajay','ash']
k.sort()
console.log(k)

// reverse
//The reverse() method reverses the elements in an array.

let j=['roy','ajay','ash']
j.reverse()
console.log(j)