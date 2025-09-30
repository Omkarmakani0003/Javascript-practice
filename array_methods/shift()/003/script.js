let numbers = [3, 5, 8, 2, 7, 12, 15, 20];
let sum = 0
let i = 0
// while(i < 3){
//     sum += numbers.shift()
//     i++
// }

for(let i = 0; i < 3; i++){
    sum += numbers.shift()
}

console.log(numbers)
console.log(sum)
