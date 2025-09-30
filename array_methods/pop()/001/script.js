let arr = [8, 12, 5, 7, 15, 10, 9, 4, 6, 11, 3, 14, 18];

let sum = 0

arr.forEach((e)=>{
     
     if(sum < 50){
        sum += arr[arr.length - 1]
        arr.pop()
     }
})

console.log(arr)