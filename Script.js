// =======================================
// Dee Solutions Portfolio
// Main JavaScript File
// =======================================

// Wait until the page has loaded
document.addEventListener("DOMContentLoaded", function () {

    // Fade in page
    document.body.style.opacity = "1";

    // Navbar shadow when scrolling
    const navbar = document.querySelector("header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 30) {
            navbar.classList.add("shadow-2xl");
        } else {
            navbar.classList.remove("shadow-2xl");
        }

    });

    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

    // Hero image animation
    const profile = document.querySelector('img[alt="Malik Adeoye"]');

    if (profile) {

        profile.style.transition = "transform 0.5s ease";

        profile.addEventListener("mouseenter", function () {
            profile.style.transform = "translateY(-10px)";
        });

        profile.addEventListener("mouseleave", function () {
            profile.style.transform = "translateY(0)";
        });

    }

});

// Page loading animation
window.onload = function () {

    document.body.style.transition = "opacity 0.8s ease";

    document.body.style.opacity = "1";

};
