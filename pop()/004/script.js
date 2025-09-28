let arr = [-10, -5, -3, 4, -1, 2, -7, -8];

arr.forEach((e)=>{
    if(arr[arr.length - 1] < 0){
       arr.pop()
    }
})

console.log(arr);
