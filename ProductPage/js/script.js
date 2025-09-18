const products = [
  {
    "id": 1,
    "name": "Wireless Headphones",
    "category": "Electronics",
    "description": "Bluetooth over-ear headphones with noise cancellation.",
    "image": "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80",
    "price": 79.99,
    "originalPrice": 99.99,
    "discount": 20,
    "rating": 4.5,
    "stock": 253
  },
  {
    "id": 2,
    "name": "Running Shoes",
    "category": "Footwear",
    "description": "Comfortable and lightweight running shoes for all terrains.",
    "image": "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80",
    "price": 59.99,
    "originalPrice": 89.99,
    "discount": 33,
    "rating": 4.2,
    "stock": 178
  },
  {
    "id": 3,
    "name": "Smart Watch",
    "category": "Electronics",
    "description": "Smart watch with heart rate monitor and GPS.",
    "image": "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80",
    "price": 129.99,
    "originalPrice": 149.99,
    "discount": 13,
    "rating": 4.7,
    "stock": 421
  },
  {
    "id": 4,
    "name": "Gaming Mouse",
    "category": "Computers",
    "description": "Ergonomic gaming mouse with RGB lighting.",
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    "price": 29.99,
    "originalPrice": 49.99,
    "discount": 40,
    "rating": 4.3,
    "stock": 97
  },
  {
    "id": 5,
    "name": "Yoga Mat",
    "category": "Fitness",
    "description": "Non-slip yoga mat with carrying strap.",
    "image": "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=800&q=80",
    "price": 24.99,
    "originalPrice": 34.99,
    "discount": 29,
    "rating": 4.6,
    "stock": 132
  },
  {
    "id": 6,
    "name": "Coffee Maker",
    "category": "Home",
    "description": "Automatic drip coffee maker with timer.",
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    "price": 49.99,
    "originalPrice": 69.99,
    "discount": 29,
    "rating": 4.1,
    "stock": 88
  },
  {
    "id": 7,
    "name": "Laptop Stand",
    "category": "Office",
    "description": "Adjustable aluminum laptop stand for desk setup.",
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    "price": 34.99,
    "originalPrice": 44.99,
    "discount": 22,
    "rating": 4.4,
    "stock": 109
  },
  {
    "id": 8,
    "name": "4K Monitor",
    "category": "Computers",
    "description": "27-inch 4K UHD monitor with HDR support.",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    "price": 299.99,
    "originalPrice": 349.99,
    "discount": 14,
    "rating": 4.8,
    "stock": 223
  },
  {
    "id": 9,
    "name": "Electric Toothbrush",
    "category": "Personal Care",
    "description": "Rechargeable electric toothbrush with 3 modes.",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    "price": 39.99,
    "originalPrice": 59.99,
    "discount": 33,
    "rating": 4.5,
    "stock": 156
  },
  {
    "id": 10,
    "name": "Portable Charger",
    "category": "Electronics",
    "description": "10000mAh power bank with fast charging support.",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    "price": 25.99,
    "originalPrice": 35.99,
    "discount": 28,
    "rating": 4.3,
    "stock": 201
  },
  {
    "id": 11,
    "name": "Fitness Tracker",
    "category": "Fitness",
    "description": "Tracks steps, heart rate, and sleep.",
    "image": "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80",
    "price": 44.99,
    "originalPrice": 64.99,
    "discount": 31,
    "rating": 4.2,
    "stock": 178
  },
  {
    "id": 12,
    "name": "Bluetooth Speaker",
    "category": "Audio",
    "description": "Portable waterproof Bluetooth speaker.",
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
    "price": 39.99,
    "originalPrice": 49.99,
    "discount": 20,
    "rating": 4.6,
    "stock": 210
  },
  {
    "id": 13,
    "name": "LED Desk Lamp",
    "category": "Home",
    "description": "Touch control lamp with USB charging port.",
    "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    "price": 19.99,
    "originalPrice": 29.99,
    "discount": 33,
    "rating": 4.4,
    "stock": 90
  },
  {
    "id": 14,
    "name": "Air Fryer",
    "category": "Kitchen",
    "description": "Oil-less air fryer with digital display.",
    "image": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
    "price": 89.99,
    "originalPrice": 109.99,
    "discount": 18,
    "rating": 4.7,
    "stock": 312
  },
  {
    "id": 15,
    "name": "Water Bottle",
    "category": "Fitness",
    "description": "Stainless steel insulated water bottle.",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    "price": 17.99,
    "originalPrice": 24.99,
    "discount": 28,
    "rating": 4.5,
    "stock": 76
  },
  {
    "id": 16,
    "name": "Noise Cancelling Earbuds",
    "category": "Audio",
    "description": "Wireless earbuds with active noise cancellation.",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    "price": 99.99,
    "originalPrice": 129.99,
    "discount": 23,
    "rating": 4.6,
    "stock": 342
  },
  {
    "id": 17,
    "name": "Smart Light Bulbs",
    "category": "Home",
    "description": "Color-changing LED bulbs with app control.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    "price": 29.99,
    "originalPrice": 39.99,
    "discount": 25,
    "rating": 4.3,
    "stock": 105
  },
  {
    "id": 18,
    "name": "Backpack",
    "category": "Accessories",
    "description": "Durable waterproof backpack with laptop compartment.",
    "image": "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
    "price": 49.99,
    "originalPrice": 69.99,
    "discount": 29,
    "rating": 4.4,
    "stock": 187
  },
  {
    "id": 19,
    "name": "Keyboard",
    "category": "Computers",
    "description": "Mechanical keyboard with RGB backlight.",
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    "price": 59.99,
    "originalPrice": 79.99,
    "discount": 25,
    "rating": 4.5,
    "stock": 167
  },
  {
    "id": 20,
    "name": "Instant Camera",
    "category": "Photography",
    "description": "Capture instant photos with retro design.",
    "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    "price": 69.99,
    "originalPrice": 89.99,
    "discount": 22,
    "rating": 4.6,
    "stock": 98
  },
  {
    "id": 21,
    "name": "Electric Kettle",
    "category": "Kitchen",
    "description": "Fast boiling electric kettle with auto shut-off.",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    "price": 34.99,
    "originalPrice": 44.99,
    "discount": 22,
    "rating": 4.5,
    "stock": 112
  },
  {
    "id": 22,
    "name": "Smartphone Tripod",
    "category": "Photography",
    "description": "Adjustable tripod for smartphones and cameras.",
    "image": "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    "price": 19.99,
    "originalPrice": 29.99,
    "discount": 33,
    "rating": 4.1,
    "stock": 65
  },
  {
    "id": 23,
    "name": "Wireless Charger",
    "category": "Electronics",
    "description": "Fast wireless charging pad compatible with Qi devices.",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    "price": 24.99,
    "originalPrice": 34.99,
    "discount": 29,
    "rating": 4.3,
    "stock": 142
  },
  {
    "id": 24,
    "name": "Electric Shaver",
    "category": "Personal Care",
    "description": "Rechargeable electric shaver with precision blades.",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    "price": 49.99,
    "originalPrice": 59.99,
    "discount": 17,
    "rating": 4.2,
    "stock": 98
  },
  {
    "id": 25,
    "name": "Camping Tent",
    "category": "Outdoors",
    "description": "Waterproof 2-person lightweight camping tent.",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "price": 89.99,
    "originalPrice": 119.99,
    "discount": 25,
    "rating": 4.6,
    "stock": 145
  },
  {
    "id": 26,
    "name": "Gaming Chair",
    "category": "Furniture",
    "description": "Ergonomic gaming chair with lumbar support.",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    "price": 149.99,
    "originalPrice": 179.99,
    "discount": 17,
    "rating": 4.5,
    "stock": 130
  },
  {
    "id": 27,
    "name": "LED String Lights",
    "category": "Home",
    "description": "Decorative outdoor waterproof LED string lights.",
    "image": "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    "price": 14.99,
    "originalPrice": 19.99,
    "discount": 25,
    "rating": 4.7,
    "stock": 77
  },
  {
    "id": 28,
    "name": "Portable Blender",
    "category": "Kitchen",
    "description": "USB rechargeable portable blender for smoothies.",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    "price": 34.99,
    "originalPrice": 44.99,
    "discount": 22,
    "rating": 4.3,
    "stock": 89
  },
  {
    "id": 29,
    "name": "Desk Organizer",
    "category": "Office",
    "description": "Multi-compartment desk organizer with pen holder.",
    "image": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    "price": 15.99,
    "originalPrice": 22.99,
    "discount": 30,
    "rating": 4.4,
    "stock": 65
  },
  {
    "id": 30,
    "name": "Action Camera",
    "category": "Photography",
    "description": "Waterproof 4K action camera with wide-angle lens.",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    "price": 89.99,
    "originalPrice": 129.99,
    "discount": 31,
    "rating": 4.5,
    "stock": 180
  },
  {
    "id": 31,
    "name": "Electric Grill",
    "category": "Kitchen",
    "description": "Compact indoor electric grill with non-stick surface.",
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "price": 54.99,
    "originalPrice": 69.99,
    "discount": 21,
    "rating": 4.4,
    "stock": 102
  },
  {
    "id": 32,
    "name": "Wireless Keyboard",
    "category": "Computers",
    "description": "Slim wireless keyboard with long battery life.",
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    "price": 39.99,
    "originalPrice": 49.99,
    "discount": 20,
    "rating": 4.3,
    "stock": 75
  },
  {
    "id": 33,
    "name": "Smart Thermostat",
    "category": "Home",
    "description": "WiFi-enabled smart thermostat with app control.",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    "price": 129.99,
    "originalPrice": 159.99,
    "discount": 19,
    "rating": 4.6,
    "stock": 134
  },
  {
    "id": 34,
    "name": "Wireless Earbuds",
    "category": "Audio",
    "description": "Compact true wireless earbuds with charging case.",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    "price": 49.99,
    "originalPrice": 69.99,
    "discount": 29,
    "rating": 4.2,
    "stock": 220
  },
  {
    "id": 35,
    "name": "Electric Scooter",
    "category": "Outdoors",
    "description": "Foldable electric scooter with long battery life.",
    "image": "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
    "price": 299.99,
    "originalPrice": 349.99,
    "discount": 14,
    "rating": 4.5,
    "stock": 95
  },
  {
    "id": 36,
    "name": "Desk Chair",
    "category": "Furniture",
    "description": "Comfortable ergonomic desk chair with adjustable height.",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    "price": 89.99,
    "originalPrice": 119.99,
    "discount": 25,
    "rating": 4.4,
    "stock": 160
  },
  {
    "id": 37,
    "name": "Portable Projector",
    "category": "Electronics",
    "description": "Mini portable projector with HD resolution.",
    "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    "price": 129.99,
    "originalPrice": 159.99,
    "discount": 19,
    "rating": 4.3,
    "stock": 70
  },
  {
    "id": 38,
    "name": "Bluetooth Headset",
    "category": "Audio",
    "description": "Wireless Bluetooth headset with noise cancellation.",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    "price": 39.99,
    "originalPrice": 59.99,
    "discount": 33,
    "rating": 4.2,
    "stock": 135
  },
  {
    "id": 39,
    "name": "Electric Blanket",
    "category": "Home",
    "description": "Soft electric blanket with adjustable heat settings.",
    "image": "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
    "price": 59.99,
    "originalPrice": 79.99,
    "discount": 25,
    "rating": 4.6,
    "stock": 140
  },
  {
    "id": 40,
    "name": "Cordless Vacuum",
    "category": "Home",
    "description": "Lightweight cordless vacuum cleaner with powerful suction.",
    "image": "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=800&q=80",
    "price": 129.99,
    "originalPrice": 159.99,
    "discount": 19,
    "rating": 4.7,
    "stock": 190
  },
  {
    "id": 41,
    "name": "Digital Camera",
    "category": "Photography",
    "description": "Compact digital camera with 20MP sensor.",
    "image": "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    "price": 199.99,
    "originalPrice": 249.99,
    "discount": 20,
    "rating": 4.5,
    "stock": 130
  },
  {
    "id": 42,
    "name": "Smart Door Lock",
    "category": "Home",
    "description": "Keyless smart door lock with fingerprint sensor.",
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    "price": 149.99,
    "originalPrice": 179.99,
    "discount": 17,
    "rating": 4.6,
    "stock": 85
  },
  {
    "id": 43,
    "name": "Robot Vacuum",
    "category": "Home Appliances",
    "description": "Smart robot vacuum with mapping and scheduling.",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    "price": 249.99,
    "originalPrice": 299.99,
    "discount": 17,
    "rating": 4.7,
    "stock": 160
  },
  {
    "id": 44,
    "name": "Electric Guitar",
    "category": "Musical Instruments",
    "description": "Solid body electric guitar with maple neck.",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    "price": 299.99,
    "originalPrice": 349.99,
    "discount": 14,
    "rating": 4.8,
    "stock": 100
  },
  {
    "id": 45,
    "name": "Cookware Set",
    "category": "Kitchen",
    "description": "10-piece non-stick cookware set with lids.",
    "image": "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80",
    "price": 129.99,
    "originalPrice": 159.99,
    "discount": 19,
    "rating": 4.4,
    "stock": 110
  },
  {
    "id": 46,
    "name": "Portable Hard Drive",
    "category": "Computers",
    "description": "1TB portable external hard drive USB 3.0.",
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    "price": 59.99,
    "originalPrice": 79.99,
    "discount": 25,
    "rating": 4.5,
    "stock": 145
  },
  {
    "id": 47,
    "name": "Wireless Mouse",
    "category": "Computers",
    "description": "Ergonomic wireless mouse with adjustable DPI.",
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    "price": 24.99,
    "originalPrice": 34.99,
    "discount": 29,
    "rating": 4.3,
    "stock": 180
  },
  {
    "id": 48,
    "name": "Smartphone Case",
    "category": "Accessories",
    "description": "Shockproof smartphone case with raised edges.",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    "price": 14.99,
    "originalPrice": 19.99,
    "discount": 25,
    "rating": 4.4,
    "stock": 95
  },
  {
    "id": 49,
    "name": "Fitness Dumbbells",
    "category": "Fitness",
    "description": "Pair of adjustable weight dumbbells for workouts.",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    "price": 49.99,
    "originalPrice": 69.99,
    "discount": 29,
    "rating": 4.7,
    "stock": 150
  },
  {
    "id": 50,
    "name": "Electric Pressure Cooker",
    "category": "Kitchen",
    "description": "Multi-function electric pressure cooker with timer.",
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "price": 79.99,
    "originalPrice": 99.99,
    "discount": 20,
    "rating": 4.6,
    "stock": 180
  }
];

let cart = [];

products.forEach((e)=>{
    document.getElementById('product-list').innerHTML += `
    <div class="product">
        <img src="${e.image}" alt="Product 1">
        <div class="product-details">
            <p class="product-name">${e.name}</p>
            <p class="product-description">${e.category}</p>
            <p class="product-price"><span class="discounted-price">Rs. ${e.originalPrice}</span><span class="original-price">Rs. ${e.price}</span></p>
            <button class="add-to-cart" onclick="addtocart('${e.id}','${e.image}','${e.name}','${e.category}','${e.originalPrice}','${e.price}')">Add to Cart</button>
        </div>
    </div>
    `
})

let categories = [];
products.forEach((e)=>{  
  if(!categories.includes(e.category)){
    categories.push(e.category)
  }
})
categories.forEach((e)=>{
    document.getElementById('category').innerHTML += `<li><a href="#" onclick="searchByCategory('${e}')">${e}</a></li>`
})

function search(){
   let value = document.getElementById('search').value
   let search = products.filter((e)=>e.name == value)
   document.getElementById('product-list').innerHTML = ''
   if(search.length > 0){
     search.forEach((e)=>{
       document.getElementById('product-list').innerHTML += `
       <div class="product">
         <img src="${e.image}" alt="Product 1">
         <div class="product-details">
            <p class="product-name">${e.name}</p>
            <p class="product-description">${e.category}</p>
            <p class="product-price"><span class="discounted-price">Rs. ${e.originalPrice}</span><span class="original-price">Rs. ${e.price}</span></p>
            <button class="add-to-cart" onclick="addtocart('${e.id}','${e.image}','${e.name}','${e.category}','${e.originalPrice}','${e.price}')">Add to Cart</button>
        </div>
      </div>
    `
    })
   }else{
    document.getElementById('product-list').innerHTML += `
         <h2 style="color: red;">Item not found</h2>
       `
   }
}

function searchByCategory(category){
   let search = products.filter((e)=> category === 'all' ? e.category : e.category == category)
   document.getElementById('product-list').innerHTML = ''
   if(search.length > 0){
     search.forEach((e)=>{
       document.getElementById('product-list').innerHTML += `
       <div class="product">
         <img src="${e.image}" alt="Product 1">
         <div class="product-details">
            <p class="product-name">${e.name}</p>
            <p class="product-description">${e.category}</p>
            <p class="product-price"><span class="discounted-price">Rs. ${e.originalPrice}</span><span class="original-price">Rs. ${e.price}</span></p>
            <button class="add-to-cart" onclick="addtocart('${e.id}','${e.image}','${e.name}','${e.category}','${e.originalPrice}','${e.price}')">Add to Cart</button>
        </div>
      </div>
    `
    })
   }else{
    document.getElementById('product-list').innerHTML += `
         <h2 style="color: red;">Item not found</h2>
      `
   }
}

function checkoffer(){
    let check = products.some((e)=> e.price < 500)
    if(check){
       if(products.every((e)=>e.stock > 0)){
        alert('You have great offer, some products price is under 500 and all in stock')
       }
    }
}

function addtocart(id,image,name,category,originalPrice,price){
   if(!cart.includes(name)){
      cart.push({id:id,image:image,name:name,category:category,originalPrice:originalPrice,price:price})   
   }else{
     alert('this product is already added into cart')
   }
}

function carts(){
   document.getElementById('product-list').innerHTML = ''
   cart.forEach((e)=>{
    if(cart.length > 0){
       
       document.getElementById('product-list').innerHTML += `
       <div class="product">
         <img src="${e.image}" alt="Product 1">
         <div class="product-details">
            <p class="product-name">${e.name}</p>
            <p class="product-description">${e.category}</p>
            <p class="product-price"><span class="discounted-price">Rs. ${e.originalPrice}</span><span class="original-price">Rs. ${e.price}</span></p>
            <button class="add-to-cart" onclick="remove('${e.id}')">Remove</button>
        </div>
      </div>
    `
    }else{
       document.getElementById('product-list').innerHTML += `
         <h2 style="color: red;">Item not found</h2>
      `
    }
     
   })
}

function remove(id){
   let removeable = cart.filter((e)=> e.id == id)
   console.log(removeable)
}


