function iseven(x){
    if(x%2==0){
       console.log("it's even")
    }else{
       console.log("It's Odd")
    }
}
function printarr(arr){
    console.log(arr)
}
module.exports.iseven=iseven
module.exports.printarr=printarr