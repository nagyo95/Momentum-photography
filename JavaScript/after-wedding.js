document.addEventListener('DOMContentLoaded', function(){
    const hamburgerButton = document.querySelector(".hamburger");
    const navBar = document.querySelector (".navbar");

    hamburgerButton.addEventListener("click", function(){
        navBar.classList.toggle("active");
    })
})
