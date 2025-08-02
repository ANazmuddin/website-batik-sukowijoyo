document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const faBars = '<i class="fas fa-bars"></i>';
    const faTimes = '<i class="fas fa-times"></i>';

    hamburger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('nav-active');

        // Toggle Hamburger Icon
        hamburger.classList.toggle('toggle');
        if (hamburger.classList.contains('toggle')) {
            hamburger.innerHTML = faTimes;
            hamburger.style.color = 'white'; // Ganti warna ikon saat menu terbuka
        } else {
            hamburger.innerHTML = faBars;
            hamburger.style.color = 'var(--dark-color)'; // Kembalikan warna ikon
        }
    });
});