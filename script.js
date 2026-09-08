const typed = new Typed('.multiple-text',{
    strings: [
        'CS Student', 
        'Game Developer', 
        'Frontend Developer', 
        '2D Artist', 
        '3D Artist'
    ],
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
    loop: true
});

const menuIcon = document.getElementById('menu-icon');
const nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
});