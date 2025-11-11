document.addEventListener('DOMContentLoaded', function() {
    // small helper to highlight current nav link
    const links = document.querySelectorAll('.main-nav a');
    links.forEach(a => { if (a.href === location.href) a.classList.add('active') })
})