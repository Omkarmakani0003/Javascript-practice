function addMore(){
        let form = document.getElementById('form') 
        form.innerHTML += `
        <div class="item" >
         <h3>Items</h3>
          <div class="form_field">
            <label for="product">product:</label>
            <input type="text" id="product" name="product[]" required>
          </div>
          <div class="form_field">
            <label >Quantity:</label>
            <input type="number" id="qty" name="qty[]" required>
          </div>
          <div class="form_field">
             <label >Description:</label>
             <input type="text" id="desc"name="desc[]" required>
          </div>
          <div class="form_field">
            <label >Unit Price:</label>
            <input type="number" step="0.01" id="unit_price" name="unit_price[]" required>
          </div>
        </div>`
    }

    function remove(){
        let form = document.getElementById('form')
         if(form.children.length > 1){
           form.removeChild(form.lastElementChild)          
        }   
    }

    function generate(){

        let cName = document.getElementById('customer_name').value
        let email = document.getElementById('customer_email').value
        let address = document.getElementById('customer_address').value
        let product = document.getElementsByName('product[]')
        let qty = document.getElementsByName('qty[]')
        let description = document.getElementsByName('desc[]')
        let unit_price = document.getElementsByName('unit_price[]')
        
        if(cName == "" || cName == null || cName == undefined) {
           alert('Customer name is required');
           return false
        }
        if(email == "" || email == null || email == undefined) {
           alert('Customer email is required');
           return false
        }
        if(address == "" || address == null || address == undefined) {
           alert('Customer address  is required');
           return false
        }

        let obj_pro = []
        let obj_qty = []
        let obj_des = []
        let obj_price = []

        let mainobj = []

        product.forEach(e => {
           if(e.value == "" || e.value == null || e.value == undefined) {
             alert('product field is required');
             return false;
           }else{
             obj_pro.push(e.value);
           }
        });
        qty.forEach(e => {
          if(e.value == "" || e.value == null || e.value == undefined) {
           alert('qty field is required');
           return false;
          }else{
            obj_qty.push(e.value);
          } 
        });
        description.forEach(e => {
          if(e.value == "" || e.value == null || e.value == undefined) {
           alert('description field is required');
           return false;
          }else{
            obj_des.push(e.value);
          }
        });
        unit_price.forEach(e => {
          if(e.value == "" || e.value == null || e.value == undefined) {
           alert('price field is required');
           return false;
          }else{
            obj_price.push(e.value);
          }
        });

        obj_pro.forEach((product,i) => {
           mainobj.push({
              product : product,
              qty : obj_qty[i],
              description : obj_des[i],
              price : obj_price[i] 
           }) 
        })
    
      let date = new Date();
      document.getElementById('invoiceDate').innerText = date.toLocaleDateString();
        
      document.getElementById('name').innerText = cName 
      document.getElementById('email').innerText = email 
      document.getElementById('address').innerText = address 

      document.getElementById('items').innerHTML = ''
       let total = 0
        mainobj.forEach(e => {
          let gst = e.price * 18 / 100;
          document.getElementById('items').innerHTML += `
            <tr>
               <td>${e.product}</td>
               <td>${e.description}</td>
               <td>${e.qty}</td>
               <td>&#8377; ${e.price}</td>
               <td>18 <span>%</span></td>
               <td>&#8377; ${e.price * e.qty + gst}</td>
            </tr>
          `
          document.getElementById('total').innerText = ''
          total += e.price * e.qty + gst  
         })   
        document.getElementById('total').innerHTML = '&#8377; '+total  
    }

  
  