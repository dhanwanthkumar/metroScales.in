document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.closest('.product');
            const productId = product.dataset.id;
            const productName = product.dataset.name;
            const productPrice = parseFloat(product.dataset.price);
            const productImage = product.querySelector('img').src; // Get the image URL

            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

            const existingProduct = cartItems.find(item => item.id === productId);

            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cartItems.push({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    quantity: 1,
                    image: productImage // Store the image URL
                });
            }

            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            showPopup(productName, productPrice, productImage);
        });
    });
});

function showPopup(productName, productPrice, productImage) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const popupProductName = document.getElementById('popup-product-name');
    const popupProductPrice = document.getElementById('popup-product-price');
    const popupImage = document.getElementById('popup-image');
    const popupShipping = document.getElementById('popup-shipping');
    const popupTotal = document.getElementById('popup-total');

    popupProductName.textContent = productName;
    popupProductPrice.textContent = `₹ ${productPrice.toFixed(2)}`;
    popupImage.src = productImage;
    popupShipping.textContent = `Shipping: ₹ 100`; // Example shipping cost
    const cartTotal = productPrice + 100; // Example calculation
    popupTotal.textContent = `Cart total: ₹ ${cartTotal.toFixed(2)}`;

    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
