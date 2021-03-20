/*
3 ways for defining variable
1. var
2. let - local to the block
3. const - here the refrence variable value will be constant, you need to initialize the data while declaring it.

*/
// const age=10;
// age=age+1
// console.log(age)
//  let i=10
// // for(var i=0;i<3;i++){
// //     console.log(i)
// // }
// {
//     let i=0
//     console.log(i)
// }
// console.log(i)
const student={
    Name:"Gaurav",
    Address:"Google", 
    RollNumber: 12, 
    isGraduated: false}
student.LastName="Nakka"   // add new attribute to student object

console.log(student.Name+" "+student.LastName) 