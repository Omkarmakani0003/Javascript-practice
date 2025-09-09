let products = [
  {
    "image": "https://picsum.photos/seed/product1/400",
    "title": "Wireless Headphones",
    "description": "High-quality wireless headphones with noise cancellation and long battery life.",
    "price": 89.99
  },
  {
    "image": "https://picsum.photos/seed/product2/400",
    "title": "Smart Watch",
    "description": "A sleek smart watch that tracks your fitness and shows notifications.",
    "price": 129.95
  },
  {
    "image": "https://picsum.photos/seed/product3/400",
    "title": "Bluetooth Speaker",
    "description": "Portable speaker with deep bass and waterproof design for outdoor use.",
    "price": 49.50
  },
  {
    "image": "https://picsum.photos/seed/product4/400",
    "title": "4K Action Camera",
    "description": "Capture your adventures in stunning 4K resolution with this rugged camera.",
    "price": 74.25
  },
  {
    "image": "https://picsum.photos/seed/product5/400",
    "title": "Gaming Mouse",
    "description": "Ergonomic mouse with RGB lighting and customizable buttons for gamers.",
    "price": 39.99
  },
  {
    "image": "https://picsum.photos/seed/product6/400",
    "title": "Mechanical Keyboard",
    "description": "Tactile and responsive mechanical keyboard with customizable RGB lighting.",
    "price": 59.99
  },
  {
    "image": "https://picsum.photos/seed/product7/400",
    "title": "Laptop Stand",
    "description": "Adjustable and portable laptop stand for better posture and airflow.",
    "price": 29.95
  },
  {
    "image": "https://picsum.photos/seed/product8/400",
    "title": "Noise-Cancelling Earbuds",
    "description": "Compact earbuds with active noise cancellation and a comfortable fit.",
    "price": 69.00
  },
  {
    "image": "https://picsum.photos/seed/product9/400",
    "title": "Smart LED Bulbs",
    "description": "Energy-saving smart bulbs that can be controlled with your phone or voice.",
    "price": 24.99
  },
  {
    "image": "https://picsum.photos/seed/product10/400",
    "title": "Portable Charger",
    "description": "High-capacity power bank with fast charging for all your devices.",
    "price": 34.95
  },
  {
    "image": "https://picsum.photos/seed/product11/400",
    "title": "Fitness Tracker",
    "description": "Track steps, heart rate, and sleep with this slim fitness band.",
    "price": 45.50
  },
  {
    "image": "https://picsum.photos/seed/product12/400",
    "title": "USB-C Hub",
    "description": "Multi-port USB-C hub with HDMI, USB 3.0, and card reader.",
    "price": 22.49
  },
  {
    "image": "https://picsum.photos/seed/product13/400",
    "title": "Desk Lamp with Wireless Charger",
    "description": "Modern desk lamp with adjustable brightness and built-in wireless charging pad.",
    "price": 38.89
  },
  {
    "image": "https://picsum.photos/seed/product14/400",
    "title": "Ergonomic Office Chair",
    "description": "Comfortable office chair with lumbar support and adjustable features.",
    "price": 159.99
  },
  {
    "image": "https://picsum.photos/seed/product15/400",
    "title": "Tablet Stand",
    "description": "Sturdy and foldable stand for tablets and phones for hands-free viewing.",
    "price": 18.75
  }
]
let cardview = document.getElementById('cardView');
products.forEach((e)=>{
    cardview.innerHTML += `
      <div class="card">
        <img src="${e.image}">
        <h2>${e.title}</h2>
        <p>${e.description}</p>
        <p>${e.price}</p>
      </div>
    `
})

