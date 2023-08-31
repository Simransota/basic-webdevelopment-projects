// Select the .fa-bars icon element
const bar = document.querySelector(".fa-bars");

// Select the .nav-list element
const menu = document.querySelector(".nav-list");

// Add a click event listener to the .fa-bars icon
bar.addEventListener("click", () => {
    // Toggle the 'show-menu' class on the .nav-list element
    menu.classList.toggle("show-menu");
});
