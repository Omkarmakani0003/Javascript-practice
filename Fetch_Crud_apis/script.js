function getData(){
   const table = document.getElementById('data')
    fetch('http://localhost:3000/')
       .then((res)=>{
       return res.json()
    })
    .then((data)=>{
        console.log(data)
      if(data.length > 0){
        table.innerHTML = ''
         data.forEach(element => {
              table.innerHTML += `<tr>
                                  <td>${element.id}</td>
                                  <td id="name${element.id}">${element.name}</td>
                                  <td id="rollno${element.id}">${element.rollno}</td>
                                  <td><button onclick="editData(${element.id})">Edit</button><button class="deleteBtn" onclick="deleteData(${element.id})">Delete</button></td>
                             </tr>`
         });
      }else{
         table.innerHTML = `<tr>
                                <td colspan='3' style=' text-align: center; color : red'> Data not found </td>
                            </tr>`
      }
   })
}

getData()

function addNew(){
   const name = document.getElementById('name').value
   const rollno = document.getElementById('rollno').value
   console.log(name , rollno)
   fetch('http://localhost:3000/new',
     {
        method : 'POST',
        headers : { 'Content-Type' : 'application/json'},
        body : JSON.stringify({name : name, rollno : rollno})
     }
   )
   .then((res)=>{
        return res.json()
   })
   .then((data)=>{
        if(data){
            getData()   
        }
   })

}

function deleteData(id){
    fetch(`http://localhost:3000/delete/${id}`,
        {
            method : 'DELETE',
            headers : {
                 'Content-Type' : 'application/json'
            }
        }
    )
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        if(data){
            getData()  
        }
    }) 
}

function editData(id){
  const name = document.getElementById(`name${id}`).innerText
  const rollno = document.getElementById(`rollno${id}`).innerText
  document.getElementById('name').value = name
  document.getElementById('rollno').value = rollno

  document.getElementById('button').setAttribute('onclick',`update(${id})`)
  document.getElementById('button').innerText = 'Update'
}

function update(id){
   const name = document.getElementById('name').value
   const rollno = document.getElementById('rollno').value
   console.log(name , rollno)
   fetch(`http://localhost:3000/update/${id}`,
     {
        method : 'PUT',
        headers : { 'Content-Type' : 'application/json'},
        body : JSON.stringify({name : name, rollno : rollno})
     }
   )
   .then((res)=>{
        return res.json()
   })
   .then((data)=>{
        if(data){
            getData()   
        }
   })
}