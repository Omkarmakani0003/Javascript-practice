let names = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank", "Grace", "Hannah", "Ian", "Jack"]

let moreThanFiveLetter = []

names.forEach((e)=>{
    if(e.length >= 5){
        moreThanFiveLetter.push(e)
    } 
})
console.log(moreThanFiveLetter);
