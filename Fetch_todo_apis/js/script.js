let list = document.getElementById('todo-list')
function getTodos(){
    fetch("http://localhost:5000/api/todo/getTodo")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
       list.innerHTML = ''
       data.data.forEach(element => {
         if(data.data.length > 0){
            list.innerHTML += `
            <li id="${element._id}">
                <p>${element.todo}</p>
                <div class="btn">
                  <button class="edit" onclick="edit('${element._id}')">edit</button>
                  <button class="remove" onclick="remove('${element._id}')">remove</button>
                </div>  
            </li>
           `  
         } 
       });    
    })
}
getTodos()

function addTodo(){
    let task = document.getElementById('task-input').value

    fetch("http://localhost:5000/api/todo/add",{
        method : 'POST',
        headers : { 'Content-type' : 'application/json' },
        body : JSON.stringify({todo : task})
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        if(data.success == false){
           document.querySelector('.errorMsg').innerHTML = data.messages
           document.querySelector('.successMsg').innerHTML = ''
        }else{
           document.querySelector('.errorMsg').innerHTML = ''
           document.querySelector('.successMsg').innerHTML = data.messages
           document.getElementById('task-input').value = ''
           getTodos()
        }
    })
}

function remove(id){
 fetch(`http://localhost:5000/api/todo/delete/${id}`,{
        method : 'DELETE',
        headers : { 'Content-type' : 'application/json' },
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
         if(data.success == false){
           document.querySelector('.errorMsg').innerHTML = data.messages
           document.querySelector('.successMsg').innerHTML = ''
        }else{
           document.querySelector('.errorMsg').innerHTML = ''
           document.querySelector('.successMsg').innerHTML = data.messages
           document.getElementById('task-input').value = ''
           getTodos()
        }
    })
}

function edit(id){
    fetch(`http://localhost:5000/api/todo/edit/${id}`)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data);
        document.getElementById('task-input').value = data.data.todo
        document.getElementById('add-task-btn').setAttribute('onclick',`update('${data.data._id}')`)
        document.getElementById('add-task-btn').innerText = 'Update'
    })
}

function update(id){

    let task = document.getElementById('task-input').value

    fetch(`http://localhost:5000/api/todo/update/${id}`,{
        method : 'PUT',
        headers : { 'Content-type' : 'application/json' },
        body : JSON.stringify({todo : task})
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        if(data.success == false){
           document.querySelector('.errorMsg').innerHTML = data.messages
           document.querySelector('.successMsg').innerHTML = ''
        }else{
           document.querySelector('.errorMsg').innerHTML = ''
           document.querySelector('.successMsg').innerHTML = data.messages
           document.getElementById('task-input').value = ''
           document.getElementById('add-task-btn').setAttribute('onclick',`addTodo()`)
           document.getElementById('add-task-btn').innerText = 'Add Task'
           getTodos()
        }
    })
}
