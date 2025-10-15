let list = document.getElementById('todo-list')
let TaskList = JSON.parse(localStorage.getItem('tasks')) || []

getData()

function getData(id){
    let ele = document.getElementById('todo-list')
    ele.innerHTML = ''
    TaskList.forEach((e,i)=>{  
           ele.innerHTML += `
           <li id="${i}">
           <p>${e}</p>
           <div class="btn">
             <button class="edit" onclick="edit(${i})">edit</button>
             <button class="remove" onclick="remove(${i})">remove</button>
           </div>  
          </li>`  
    })
}

function addTodo(){
    let task = document.getElementById('task-input').value
    if(task != ""){

       TaskList.push(task)
       localStorage.setItem('tasks',JSON.stringify(TaskList))
       getData()

       document.getElementById('task-input').value = ''
       document.querySelector('.errorMsg').innerHTML = ''
    }else{
       document.querySelector('.errorMsg').innerHTML = '<p>Enter your task</p>'
       return false
    } 
}

function remove(id){
    TaskList.splice(id,1)
    localStorage.setItem('tasks',JSON.stringify(TaskList))
    getData()
}

function edit(id){
  let ele = document.getElementById(id)
  ele.innerHTML = `
      <input type="text" id="new-input" placeholder="Edit task" value="${TaskList[id]}">
      <div class="btn">
        <button class="save" onclick="save(${id})">save</button>
        <button class="remove" onclick="remove(${id})">remove</button>
      </div>  
  `
}

function save(id){
  let newINput = document.getElementById('new-input').value
  TaskList[id] = newINput
  localStorage.setItem('tasks',JSON.stringify(TaskList))
  getData()
}

function allclear(){  
  localStorage.clear()
  TaskList = []
  getData()
}


