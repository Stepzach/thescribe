document.addEventListener("DOMContentLoaded", () => {
    // Get all the necessary elements
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = mobileMenu.querySelectorAll('a'); 

    // Function to toggle the menu
    function toggleMenu() {
        // Toggle the 'active' class on the menu and the button
        mobileMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');

        // Toggle body scroll
        if (mobileMenu.classList.contains('active')) {
            // Disable scroll
            document.body.style.overflow = 'hidden';
        } else {
            // Enable scroll
            document.body.style.overflow = '';
        }
    }

    // Event listener for the hamburger button
    menuToggle.addEventListener('click', toggleMenu);

    // Event listener for all links inside the menu
    // (This closes the menu when a link is clicked)
    menuLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
});
