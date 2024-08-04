document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded');
});

const slideshowContainer = document.querySelector('.slideshow-container');
const slidesWrapper = document.querySelector('.slides-wrapper');
const slides = document.querySelectorAll('.slide');

let isDown = false;
let startX;
let scrollLeft;
let slideIndex = 0;

// Auto slide every 5 seconds
setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    slidesWrapper.style.transform = `translateX(${-slideIndex * 100}%)`;
}, 5000);

slideshowContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    slideshowContainer.classList.add('active');
    startX = e.pageX - slidesWrapper.offsetLeft;
    scrollLeft = slidesWrapper.scrollLeft;
});

slideshowContainer.addEventListener('mouseleave', () => {
    isDown = false;
    slideshowContainer.classList.remove('active');
});

slideshowContainer.addEventListener('mouseup', () => {
    isDown = false;
    slideshowContainer.classList.remove('active');
});

slideshowContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slidesWrapper.offsetLeft;
    const walk = (x - startX) * 3; // Scroll-fast
    slidesWrapper.style.transform = `translateX(${scrollLeft - walk}px)`;
});
