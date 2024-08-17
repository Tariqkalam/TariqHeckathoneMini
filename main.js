
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/database-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA6Hjs4agc46_aVBjwr557whu7FF0nWEcY",
    authDomain: "hackathon-sunday.firebaseapp.com",
    projectId: "hackathon-sunday",
    storageBucket: "hackathon-sunday.appspot.com",
    messagingSenderId: "170582528936",
    appId: "1:170582528936:web:77d05891c57a5b4762439d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);




// function to get products from API and render them on the page
function getProducts() {
    // make API request to get products
    fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            const productsList = document.getElementById('products-list');
            data.forEach(product => {
                const productListItem = document.createElement('li');
                productListItem.textContent = `${product.name} - ${product.price}`;
                productsList.appendChild(productListItem);
            });
        })
        .catch(error => console.error(error));
}

// function to get orders from API and render them on the page
function getOrders() {
    // make API request to get orders
    fetch('/api/orders')
        .then(response => response.json())
        .then(data => {
            const ordersList = document.getElementById('orders-list');
            data.forEach(order => {
                const orderRow = document.createElement('tr');
                orderRow.innerHTML = `
                    <td>${order.id}</td>
                    <td>${order.date}</td>
                    <td>${order.total}</td>
                    <td>${order.status}</td>`;
                ordersList.appendChild(orderRow);
            });
        })
        .catch(error => console.error(error));
}

// function to get cart items from API and render them on the page
function getCart() {
    // make API request to get cart items
    fetch('/api/cart')
        .then(response => response.json())
        .then(data => {
            const cartList = document.getElementById('cart-list');
            data.forEach(item => {
                const cartItemRow = document.createElement('tr');
                cartItemRow.innerHTML = `
                    <td>${item.product.name}</td>
                    <td>${item.quantity}</td>
                    <td>${item.price}</td>
                    <td>${item.subtotal}</td>`;
                cartList.appendChild(cartItemRow);
            });
        })
        .catch(error => console.error(error));
}

// function to add event listener to buttons
function addEventListeners() {
    document.getElementById('view-more').addEventListener('click', () => getProducts());
    document.getElementById('view-more-orders').addEventListener('click', () => getOrders());
    document.getElementById('checkout').addEventListener('click', () => checkout());
    document.getElementById('remove-from-wishlist').addEventListener('click', () => removeFromWishlist());
}

// call functions to initialize page
getProducts();
getOrders();
getCart();
addEventListeners();

// function to handle checkout process
function checkout() {
    // make API request to create order
    fetch('/api/create-order', { method: 'POST' })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

// function to handle removing item from wishlist
function removeFromWishlist() {
    // make API request to remove item from wishlist
    fetch('/api/remove-from-wishlist', { method: 'DELETE' })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}