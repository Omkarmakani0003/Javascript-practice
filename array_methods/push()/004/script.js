let names = ["Alice", "Bob", "Charlie", "Diana", "Ave", "Frank", "Grace", "Annah", "Ian", "Jack"]
let startFromA = []
names.forEach((e)=>{
      if(e[0] == 'A'){
        startFromA.push(e)
      }
})

console.log(startFromA)