/**
 * Swarajya Veer - Chhatrapati Sambhaji Maharaj Tribute
 * Script: Static Gallery Mode
 *
 * Updated for new project structure:
 * - index.html is now in the root
 * - All static resources (images, style.css, script.js) are in the 'static/' folder
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Select the gallery images
    // Make sure in HTML, images are referenced like: <img src="static/images/image1.jpg" />
    const images = document.querySelectorAll('.slides img');
    const sliderContainer = document.querySelector('.slider-container');

    // 2. Performance Check
    if (images.length > 0) {
        console.log("Gallery initialized with " + images.length + " static images.");
    }

    // 3. Optional: Smooth Interactive Hover Effect
    // Since we removed auto-movement, we can add a small console log
    // or internal tracking when a user interacts with the gallery images.
    images.forEach((img, index) => {
        img.addEventListener('mouseenter', () => {
            // Highlighting the specific image index if needed for future features
            img.style.cursor = 'pointer';
        });

        // Clicking an image scrolls to the "Why Study" section (if present)
        img.addEventListener('click', () => {
            const infoSection = document.querySelector('.glass-card');
            if (infoSection) {
                infoSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 4. Navbar Transparency Effect
    // Makes the glassmorphism navbar dynamic on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(255, 255, 255, 0.8)";
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
        } else {
            navbar.style.background = "rgba(255, 255, 255, 0.4)";
            navbar.style.boxShadow = "0 10px 40px rgba(0,0,0,0.1)";
        }
    });
});