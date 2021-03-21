//copy by value and copy by refrense
//Use funnction as a constructor
//class in javascript
//Object destrusturing

// var a=10;
// b=a;
// a=11;
// console.log(b)

// var arr=[1,2,3,4,5]
// var brr=arr
// arr[0]=100
// console.log(brr)


//initialise the attribtes of the object
//use function as a constructor
// function Student(firstName, lastName, age, isGraduated){
//     this.firstName=firstName
//     this.lastName=lastName
//     this.age=age
//     this.isGraduated=isGraduated
// }
// var student1= new Student("Vishal", "KARAD","100", false) // an object will be created with the passed data parameter

// // console.log(student1.firstName)

// //Object destrusturing
// function getdetail(student1){
//     var details=[student1.age, student1.firstName,student1.lastName,student1.isGraduated]
//                 //["100", "vishal","KARAD",false]
//     return details
// }
// // var d= getdetail(student1)
// // console.log(d[0])//want age
// // console.log(d[1])//want firstname
// var [, name,last]=getdetail(student1)
// // console.log(last)
// // console.log(name)
// var [first,last]="Rahul Kumar".split(" ")
// console.log(first)
// console.log(last)

// what is a class and an object?