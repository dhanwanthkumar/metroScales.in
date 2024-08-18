window.addEventListener('load', function() {
    // Slide-in animation for product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('show');
        }, index * 100);
    });

    // Zoom-in animation for nav categories
    const navItems = document.querySelectorAll('.nav-categories li');
    navItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, index * 100);
    });
});
