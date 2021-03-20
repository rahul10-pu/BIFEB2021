//1st way
// function hi(message){
//     console.log(message)
//     return 9
//     console.log("yes")
//     console.log("No")
// }

// 2nd way
// var hi=function(message){
//     console.log(message)
//     return 9
// }

// 3rd way - Arrow Function
// hi= (message) => {
//     console.log(message+" world")
//     return 9
// }

// 4th way(special case-it has 1 statement only), arrow function
// hi= (message) =>console.log(message+" world") //valid
// hi= (message) =>{return message} //valid
// hi= (message) =>return message //invalid
//5th way, arrow function
// hi= message =>{return 9}

// var mess=hi("world")
// console.log(mess)


// hi= () => {
//     console.log(" world")
//     return 9
// }
// hi("hnhj")//give error
// hi()

//return a function from a function(a function can be assigned to a variable)

// function hello(message){
//     console.log(message)

//     var world=function(){
//     console.log("message")
//    }
//    console.log(world)
//    return world
// }

// w=hello("hi")
// console.log(w)
//include function inside object

// var student={
//     Name:"Gaurav",
//     Address:"Google", 
//     RollNumber: 12, 
//     isGraduated: false, 
//     details: function(){
//         console.log(this.Name)
//         console.log(this.Address)
//         console.log(this.RollNumber)
//         console.log(this.isGraduated)
//     },
//     getName: (LastName)=>{
//             return Name+" "+LastName
//     }
//    };
// console.log(student.getName("Swanat"))
//we call function a first class object
