document.addEventListener('DOMContentLoaded', function() {
    const cartContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Get cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Display each item in the cart
    let total = 0;
    cartItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('cart-item');
        listItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-item-info">
                <span class="product-name">${item.title}</span>
                <span>Qty: ${item.quantity}</span>
                <span class="product-price">₹${item.totalPrice}</span>
            </div>
            <button class="remove-item" data-index="${index}">Remove</button>
        `;
        cartContainer.appendChild(listItem);
        total += parseFloat(item.totalPrice);
    });

    // Update the total price
    totalPriceElement.textContent = total.toFixed(2);

    // Add event listener to "Clear Cart" button
    document.getElementById('clear-cart-button').addEventListener('click', function() {
        localStorage.removeItem('cartItems');
        cartContainer.innerHTML = '';
        totalPriceElement.textContent = '0.00';
    });

    // Add event listener to "Remove" buttons
    cartContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-item')) {
            const index = e.target.getAttribute('data-index');
            cartItems.splice(index, 1);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            window.location.reload(); // Refresh the page to update the cart
        }
    });
});
