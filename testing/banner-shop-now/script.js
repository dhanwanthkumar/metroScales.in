window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    const promoContainer = document.querySelector(".promo-container");
    
    // Hide preloader after content is fully loaded
    preloader.style.display = "none";
    promoContainer.style.display = "flex";
});
