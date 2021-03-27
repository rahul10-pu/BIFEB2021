// //comma operators
// var x =10
// x= x++ , x
// // x = ++x

// console.log(x)

// function returnNum(x){
//     return x,x++,++x,x
// }

// result=returnNum(1)
// console.log(res)

//call back function

// web-app
//login

// console.log("Start")
// function login(userName, password){
//     returnData=function(){
//         console.log("user is authenticated")
//         return "validated"
//     }
//     setTimeout(returnData, 5000)
//     return "random"
// }
// var isValidated=login("abhijit","qqqq")
// console.log(isValidated)
// console.log("End")
var g=10
console.log("Start")
function login(){
    returnData=function(){
        console.log("In callback function")
        console.log(++g)
    }
    setTimeout(returnData, 5000)
    return ++g
}
var result=login()
++g
console.log(result)
console.log(g)
console.log("End")


//module 