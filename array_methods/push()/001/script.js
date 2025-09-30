let primeNumber = []
function isPrime(n){
   for(let i = 2; i < n; i++){
      if(n % i === 0){
        return false
      }
   }
   return true
}

for(let i = 2; i <= 30; i++){
   if(isPrime(i)){
      primeNumber.push(i)
   } 
}

console.log(primeNumber);


