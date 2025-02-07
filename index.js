// script.js
let cartCount = 0;

// Get references to the button and cart count element
const addToCartButton = document.getElementById('add-to-cart');
const cartCountElement = document.getElementById('cart-count');

// Add event listener to the button
addToCartButton.addEventListener('click', () => {
  cartCount++; // Increment the cart count
  cartCountElement.textContent = cartCount; // Update the cart count display
  alert('Item added to cart!'); // Optional: Show a confirmation message
});