let str = "omkar";
let strToArr = str.split('')
let newArr = []

for(let i = 0; i < strToArr.length; i++){
    if(newArr.length <= 3){
       newArr.push(strToArr[strToArr.length - 1])
       strToArr.pop()
    }
}

console.log(strToArr)
console.log(newArr)
