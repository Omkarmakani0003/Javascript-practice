let fibonaci = [0,1]

for(let i = 2; i <= 10; i++){
   fibonaci.push(fibonaci[i] = fibonaci[i-1] + fibonaci[i-2])
}
console.log(fibonaci)
