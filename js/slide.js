const slideshowContainer = document.querySelector('.slideshow-container');
const slidesWrapper = document.querySelector('.slides-wrapper');
const slides = document.querySelectorAll('.slide');

let startX, startY, initialX, initialY;
let isSwiping = false;
let slideIndex = 0;

// Auto slide every 5 seconds
setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    updateSlidePosition();
}, 5000);

function updateSlidePosition() {
    slidesWrapper.style.transform = `translateX(${-slideIndex * 100}%)`;
}

slideshowContainer.addEventListener('touchstart', (e) => {
    isSwiping = true;
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    initialX = slidesWrapper.getBoundingClientRect().left;
});

slideshowContainer.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;
    const touch = e.touches[0];
    const currentX = touch.clientX;
    const currentY = touch.clientY;
    const diffX = currentX - startX;
    const diffY = currentY - startY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        e.preventDefault();
        slidesWrapper.style.transform = `translateX(${initialX + diffX}px)`;
    }
});

slideshowContainer.addEventListener('touchend', (e) => {
    isSwiping = false;
    const touch = e.changedTouches[0];
    const endX = touch.clientX;
    const diffX = endX - startX;

    if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
            slideIndex = Math.max(slideIndex - 1, 0);
        } else {
            slideIndex = Math.min(slideIndex + 1, slides.length - 1);
        }
    }

    updateSlidePosition();
});
