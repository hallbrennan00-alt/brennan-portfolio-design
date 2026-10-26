
/* BRENNAN HALL PORTFOLIO
   MOBILE NAVIGATION MENU */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function() {

        // Open or close the navigation menu
        navMenu.classList.toggle("active");

        // Check whether the menu is open
        const isOpen = navMenu.classList.contains("active");

        // Update accessibility information
        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        // Change the button icon
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close menu after clicking a navigation link
    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function(link) {

        link.addEventListener("click", function() {

            navMenu.classList.remove("active");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        });
    });
}
