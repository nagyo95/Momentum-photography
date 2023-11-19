// SLIDER

let currentIndex = 0;
const slides = document.querySelector('.img-container');
const totalSlides = document.querySelectorAll('.img-container img').length;

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
}

function updateSlide() {
    const translateValue = -currentIndex * 100;
    slides.style.transform = `translateX(${translateValue}%)`;
}

// Automatic slide change every 7 seconds
// setInterval(nextSlide, 7000);


// SCREEN SMALLER THAN 768
function updateSliderImages() {
    const screenWidth = window.innerWidth;
    let img1 = document.querySelector(".img-1");
    let img2 = document.querySelector(".img-2");
    let img3 = document.querySelector(".img-3");
    if (screenWidth < 768) {
        img1.src = "/assets/standing1.jpeg";
        img2.src="/assets/standing2.jpeg";
        img3.src= "/assets/standing3.jpg";

    } else {
        // Reset images to their original paths for larger screens
        img1.src = "/assets/0168_Lehel_es_Marianna_Utofotozas.jpg";
        img2.src = "/assets/couples.jpeg";
        img3.src = "/assets/0449_Laci_es_Emoke_Eskuvo.jpg";
    }
}

window.addEventListener('load', () => {
    updateSliderImages();
    // Call the updateSlide function to ensure the correct initial slide is displayed
    updateSlide();
});

window.addEventListener('resize', () => {
    updateSliderImages();
    // Call the updateSlide function to adjust the slider position after resizing
    updateSlide();
});





// HAMBURGER MENU
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.querySelector('.hamburger');
    const navBar = document.querySelector('.navbar');

    hamburgerButton.addEventListener('click', function() {
        navBar.classList.toggle('active');
    });

});