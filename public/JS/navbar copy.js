// navbar.js

// Toggle dropdown menu
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

dropdown.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
});

// Update cart counter (example: increment by 1)
const cartCounter = document.querySelector('.cart-counter');
let cartCount = 3; // Initial cart count

// Example: Increase cart count when an item is added
function addToCart() {
    cartCount++;
    cartCounter.textContent = cartCount;
}

// Example: Decrease cart count when an item is removed
function removeFromCart() {
    if (cartCount > 0) {
        cartCount--;
        cartCounter.textContent = cartCount;
    }
}
