document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById('overlay');
    const logo = document.getElementById('logo');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        overlay.classList.add('show-logo');
    }, 0);

    setTimeout(() => {
        overlay.style.display = 'none';
        mainContent.classList.add('visible');
    }, 2000); // 2000ms = 2 seconds
});
