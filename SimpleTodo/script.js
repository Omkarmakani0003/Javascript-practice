let list = document.getElementById('todo-list')
let id = 0
function addTodo(){
    id++
    let task = document.getElementById('task-input').value
    if(task != ""){
       list.innerHTML += `
            <li id="${id}">
                <p>${task}</p>
                <div class="btn">
                  <button class="edit" onclick="edit(${id})">edit</button>
                  <button class="remove" onclick="remove(${id})">remove</button>
                </div>  
            </li>
            `
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

function edit(id){
  let ele = document.getElementById(id)
  ele.innerHTML = `
      <input type="text" id="new-input" placeholder="Edit task" value="${ele.children[0].innerText}">
      <div class="btn">
        <button class="edit" onclick="save(${id})">save</button>
        <button class="remove" onclick="remove(${id})">remove</button>
      </div>  
  `
}

function save(id){
    let ele = document.getElementById(id)
    let newInput = document.getElementById('new-input').value
    ele.innerHTML = `
      <p>${newInput}</p>
      <div class="btn">
        <button class="edit" onclick="edit(${id})">edit</button>
        <button class="remove" onclick="remove(${id})">remove</button>
      </div>  
  `
}
