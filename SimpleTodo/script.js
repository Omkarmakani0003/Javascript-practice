let list = document.getElementById('todo-list')
let id = 0
function addTodo(){
    id++
    let task = document.getElementById('task-input').value
    if(task != ""){
       list.innerHTML += `<li id="${id}"><p>${task}</p><button class="remove" onclick="remove(${id})">remove</button></li>`
       document.getElementById('task-input').value = ''
       document.querySelector('.errorMsg').innerHTML = ''
    }else{
       document.querySelector('.errorMsg').innerHTML = '<p>Enter your task</p>'
       return false
    } 
}

function remove(id){
    document.getElementById(id).remove()
}