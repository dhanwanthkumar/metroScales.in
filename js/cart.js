document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const clearCartButton = document.getElementById('clear-cart-button');

    // Function to update the total price
    const updateTotalPrice = (cartItems) => {
        const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        totalPriceElement.textContent = totalPrice.toFixed(1);
    };

    // Function to remove item from cart
    const removeFromCart = (productId) => {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems = cartItems.filter(item => item.id !== productId);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        renderCartItems();
    };

    // Function to render cart items
    const renderCartItems = () => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItemsContainer.innerHTML = '';

        cartItems.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p>$${item.price} x ${item.quantity}</p>
                    <button class="remove-item" data-id="${item.id}">Remove</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        updateTotalPrice(cartItems);

        // Attach event listeners to remove buttons
        const removeButtons = document.querySelectorAll('.remove-item');
        removeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.dataset.id;
                removeFromCart(productId);
            });
        });
    };

    // Function to clear the cart
    const clearCart = () => {
        localStorage.removeItem('cartItems');
        renderCartItems();
    };

    // Attach event listener to clear cart button
    clearCartButton.addEventListener('click', clearCart);

    // Initial render of cart items
    renderCartItems();
});
