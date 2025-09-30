let arr = [5, 3, 7, 2, 8, 10, 4];

let stopValue = 8;

for(let i = arr.length - 1; i >= 0; i--){
   if(arr[i] == stopValue){
      break
   }
   arr.pop()
}
console.log(arr);
