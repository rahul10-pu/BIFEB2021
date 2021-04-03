// function printVal(){
//     console.log(arguments)
// }

// printVal("Aniket",12,1222)

//Wrapped inside a function, IIFE(Imedietly invoked function expression )
// (function(exports, require, module, __filepath, __dirname){
// exports.name="Naren"
//  console.log(arguments)
// console.log("hey, I got execuetd only one time")
//return exports
//})()

// module.exports=(x)=>{
//     if(x%2==0){
//        console.log("it's even")
//     }else{
//        console.log("It's Odd")
//     }
// }

module.exports={
    isEven:(x)=>{
            if(x%2==0){
               console.log("it's even")
            }else{
               console.log("It's Odd")
            }
        },
        en:(x)=>{
            if(x%2==0){
               console.log("it's even")
            }else{
               console.log("It's Odd")
            }
        },
        notOdd:(x)=>{
            if(x%2==0){
               console.log("it's even")
            }else{
               console.log("It's Odd")
            }
        },
        even:(x)=>{
            if(x%2==0){
               console.log("it's even")
            }else{
               console.log("It's Odd")
            }
        },
}