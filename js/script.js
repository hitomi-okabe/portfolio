const hamBtn = document.getElementById('hamBtn');
const navMenu = document.getElementById('navMenu');
const overlay = document.getElementById('overlay');

hamBtn.addEventListener('click', () => {
    hamBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});

navMenu.addEventListener('click', () => {
    hamBtn.classList.remove('active');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
});
