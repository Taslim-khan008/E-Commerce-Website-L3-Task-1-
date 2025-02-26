// script.js
let cart = [];
let cartCount = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    cartCount++;
    updateCartCount();
    alert(${productName} added to cart!);
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cartCount;
}