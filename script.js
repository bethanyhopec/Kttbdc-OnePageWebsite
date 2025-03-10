document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector(".dropdown");
    const menu = document.querySelector(".dropdown-menu");

    dropdown.addEventListener("mouseenter", function() {
        menu.style.display = "block";
    });

    dropdown.addEventListener("mouseleave", function() {
        menu.style.display = "none";
    });
});

function openPopup(id) {
    document.getElementById(id).style.display = "flex";
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
}
// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
    let dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(menu => {
        if (!menu.parentElement.contains(event.target)) {
            menu.classList.remove('show');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".partners-carousel");
    const partners = Array.from(carousel.children);

    setInterval(() => {
        carousel.appendChild(partners[0]); 
        partners.push(partners.shift());
    }, 2000); 

});

// Ensure pop-ups remain hidden on page load
document.addEventListener("DOMContentLoaded", function () {
    // Hide all pop-ups initially
    document.querySelectorAll(".popup").forEach((popup) => {
        popup.style.display = "none";
    });

    // Attach event listeners to buttons inside .logo-card
    document.querySelectorAll(".logo-card button").forEach((button) => {
        button.addEventListener("click", function () {
            let unit = this.innerText.toLowerCase(); // Convert button text to lowercase
            openPopup(`${unit}-popup`);
        });
    });
});
