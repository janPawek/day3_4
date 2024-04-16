// card.js
const addToCartButton = document.querySelector('.add-to-cart');
const cartCounter = document.querySelector('.cart-counter');

addToCartButton.addEventListener('click', () => {
    // Logic to add product to cart
    // Update cart counter
    cartCounter.textContent = parseInt(cartCounter.textContent) + 1;
});
