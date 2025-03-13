document.addEventListener("DOMContentLoaded", function() {
    loadComponent("header-placeholder", "header.html");
    loadComponent("footer-placeholder", "footer.html");
});

function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${filePath}:`, error));
}



// document.addEventListener("DOMContentLoaded", function () {
//     const header = document.querySelector("header");
//     const menuToggle = document.querySelector(".menu-toggle");
//     const navLinks = document.querySelector(".nav-links");

//     // Sticky Navbar Effect
//     window.addEventListener("scroll", function () {
//         if (window.scrollY > 50) {
//             header.classList.add("sticky");
//         } else {
//             header.classList.remove("sticky");
//         }
//     });

//     // Mobile Menu Toggle
//     menuToggle.addEventListener("click", function () {
//         navLinks.classList.toggle("active");
//     });

//     // Close dropdowns when clicking outside
//     document.addEventListener("click", function (e) {
//         if (!e.target.closest(".nav-links")) {
//             document.querySelectorAll(".dropdown").forEach(dropdown => {
//                 dropdown.style.opacity = "0";
//                 dropdown.style.visibility = "hidden";
//                 dropdown.style.transform = "translateY(10px)";
//             });
//         }
//     });
// });
