// [2,3,4,5,6] => [4,9,16,25,36]
var arr=[2,3,4,5,6]
var prod=1
for(let i=0;i<arr.length;i++){
    prod=prod*arr[i]
}
console.log(prod)
// var even_arr=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         even_arr.push(arr[i])
//     }
// }
// console.log(even_arr)
// for(let i=0;i<arr.length;i++){
//     arr[i] = arr[i] * arr[i]
// }
//now use map
function sqr(num){
    return num*num
}
function even(num){
    isEven=false
    if (num%2==0){
        isEven=true
    }
    return isEven
}
function prodofNumbers(a,b){
        return a*b
}
var arr1=[2,3,4,5,6,7,8,9]
// dd=arr1.map(sqr)
// console.log(dd)
// console.log(arr1.filter(even))
console.log(arr1.reduce(prodofNumbers))


