const bars = document.querySelector(".fa-bars");
const sidebars = document.querySelector(".sidebar");
const closingButton = document.querySelector(".fa-xmark");

bars.addEventListener("click",()=>{
    sidebars.classList.toggle("show-sidebar");
});

closingButton.addEventListener("click",()=>{
    sidebars.classList.remove("show-sidebar");
});