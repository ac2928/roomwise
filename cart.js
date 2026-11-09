// cart.js
// This file has the shopping cart helper functions shared by every page.
// The cart is saved in the browser's localStorage, so it stays
// there when you move between pages or refresh.
// The cart is a list like: [ { id: 1, qty: 2 }, { id: 5, qty: 1 } ]

// Read the cart from localStorage (or start with an empty list).
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// Save the cart back to localStorage and refresh the count in the header.
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// Add one of a product to the cart (or increase its quantity if it's already there).
function addToCart(id) {
  const cart = getCart();
  const item = cart.find(function (i) { return i.id === id; });
  if (item) {
    item.qty = item.qty + 1;
  } else {
    cart.push({ id: id, qty: 1 });
  }
  saveCart(cart);
  alert("Added to cart!");
}

// Change how many of a product are in the cart. 0 or less removes it.
function setQuantity(id, qty) {
  let cart = getCart();
  if (qty <= 0) {
    cart = cart.filter(function (i) { return i.id !== id; });
  } else {
    const item = cart.find(function (i) { return i.id === id; });
    if (item) item.qty = qty;
  }
  saveCart(cart);
}

// Remove a product from the cart completely.
function removeFromCart(id) {
  setQuantity(id, 0);
}

// Add up the price of everything in the cart.
function getCartTotal() {
  let total = 0;
  getCart().forEach(function (item) {
    const product = findProduct(item.id);
    total = total + product.price * item.qty;
  });
  return total;
}

// Show the number of items in the cart link at the top of each page.
function updateCartCount() {
  const el = document.getElementById("cart-count");
  if (!el) return;
  let count = 0;
  getCart().forEach(function (item) { count = count + item.qty; });
  el.textContent = count;
}

// Run once when any page loads.
updateCartCount();
