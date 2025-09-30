let arr = [8, 12, 5, 7, 15, 10, 9, 4, 6, 11, 3, 14, 18];
let reverse_arr = []

for(let i = arr.length; i > 0; i--){
         reverse_arr.push(arr[i-1])
        // console.log(i)
         arr.pop()
         
}

 console.log(arr)
 console.log(reverse_arr)
