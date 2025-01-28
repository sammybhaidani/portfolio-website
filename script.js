const navbar = document.getElementById('navbar');
const scrollThreshold = 5;


window.addEventListener('scroll', () => {
    console.log('scroll top: ' + document.documentElement.scrollTop);
    console.log('scroll Y: ' + window.scrollY)
    if (window.scrollY > scrollThreshold) {
        navbar.classList.add('rounded-4xl', 'drop-shadow-xl', 'bg-neutral-100');
    } else {
        navbar.classList.remove('rounded-4xl', 'drop-shadow-xl', 'bg-neutral-100');
    }
})