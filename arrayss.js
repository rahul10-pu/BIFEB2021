/*
2 ways of declaring arrays
1. using []
exm:
var name=["Murali", "Rohan","Rohit","Gaurav"]

2. use new Array() //not recommended to use
ex: 
var name= new Array("Murali", "Rohan","Rohit","Gaurav")
*/
var named=new Array("Murali", "Rohan","Rohit","Gaurav")


console.log(named.length)
console.log(named[named.length-1])
// console.log(named[1])
named.push("Rahul")
console.log(named[named.length-1])