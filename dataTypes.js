// //datatypes
// // 2 types of dataTypes - 1. primitive data type (Numbers- 1,2,3,1.1, String- "Rajan", boolean- true and false, Null (Object), Undefined)
// //                         2. Non Primitive data types (object, array, etc)
// // mostly data are store d into variable..for ex: Numbers, String, boolean, Null, Undefined 

// //Type Coercion (auto-conversion)

// //conditions

// //loops

// object {data of diffrent primitive data types}// why so?
//1. boolean
// var isValid="Gaurav";
// isValid=true;
// isValid=12
// var name;
// console.log(name)

// //object
// // var variable_name = {key: value, key2:value2,.......,key10:value10}
// var student={Name:"Gaurav",Address:"Google", RollNumber: 12, isGraduated: false, 12: "123"};
// console.log(student)
// console.log(student.Address)
// console.log(student["12"])
// //null is used in terms with objects..
// student=null
// console.log(student)
// student=undefined
// console.log(student)

// var name1 = null;
// var first= true+10+30+" Rohan"
// console.log(first)
// first="Rohan"+10+30
// console.log(first)


//conditions

// console.log(number+" is Odd number")
// console.log(number+" is Even number")
/*
if(condition){
    //Statement-1
    //Statement-2
    ...
    ...
}

if(condition){
    //Statement-1
    //Statement-2
    ...
    ...
}else{
    //Statement-11
    //Statement-22
    ..
}



if(condition){
    //Statement-1
    //Statement-2
    ...
    ...
}else if(condition){
    //Statement-11
    //Statement-22
    ..
}
*/
// var number=100;
// if(number%2===0){
//     if(number>10){
//         console.log(number + " is greater than 10")
//     }else if(number<10){
//         console.log(number + " is smaller than 10")
//     }else{
//         console.log(number + " is equal to ten")
//     }
//     console.log(number+" is Even number")
// }else{
//     if(number>101){
//         console.log(number + " is greater than 101")
//     }else if(number<10){
//         console.log(number + " is smaller than 101")
//     }else{
//         console.log(number + " is equal to 101")
//     }
//     console.log(number+" is Odd number")
// }

//loops 3 types 
/*
1. while loop

while(condition){
    //Statement-1
    ..
    ..

}

2. do-while loop

do{
    Statement-1
    Statement-2
    ...
}while(condition)
*/
count=3
while(count<0){
    console.log("Hello World")
    count=count-1
    console.log("value of count is "+count)
    if(count==0){
        console.log("Oops the while loop is about to end")
    }
}

var count=3
do{
    console.log("Hello World")
    count=count-1
    console.log("value of count is "+count)
    if(count==0){
        console.log("Oops the while loop is about to end")
    }
}while(count>0)
