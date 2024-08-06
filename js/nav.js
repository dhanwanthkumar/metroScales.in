document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('nav-list');

    menuIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('active');
        navList.classList.toggle('active');
    });
});
