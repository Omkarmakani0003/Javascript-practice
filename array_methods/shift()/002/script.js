let stringArray = ["b", "d", "n", "a", "n", "a"];

while(stringArray[0] != 'a' && stringArray[0] != 'e' && stringArray[0] != 'i' && stringArray[0] != 'o' && stringArray[0] != 'u'){
    stringArray.shift()
}

console.log(stringArray)

