document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.buy-now').addEventListener('click', function() {
        const productTitle = document.querySelector('.product-title').textContent;
        const productPrice = parseFloat(document.querySelector('.price').textContent.replace('₹', '').replace(',', ''));
        const productQuantity = parseInt(document.getElementById('quantity').value);
        const productTotalPrice = (productPrice * productQuantity).toFixed(2);

        // Safely retrieve the image source
        const productImageElement = document.querySelector('.product-images-carousel img');
        const productImage = productImageElement ? productImageElement.src : '';

        // Debugging: Log the product image source
        console.log('Product Image Source:', productImage);

        const product = {
            title: productTitle,
            price: productPrice,
            quantity: productQuantity,
            totalPrice: productTotalPrice,
            image: productImage // Store the image source
        };

        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Redirect to the cart page
        window.location.href = 'cart.html';
    });
});
