let couplesImg = document.getElementById("couples-img");
let weddingImg = document.getElementById("wedding-img");
let afterWeddingImg = document.getElementById ("after-wedding-img");


function changeImagesWhenResized () {
    if(window.innerWidth < 1024) {
        couplesImg.src = "/assets/couples.jpeg";
        weddingImg.src = "/assets/wedding.jpeg";
        afterWeddingImg.src = "/assets/after-wedding.jpeg";
    }
     else {
        couplesImg.src = "/assets/standing1.jpeg";
        weddingImg.src = "/assets/standing2.jpeg";
        afterWeddingImg.src = "/assets/standing3.jpg";
    }
}

changeImagesWhenResized();
window.addEventListener ("resize", changeImagesWhenResized);

document.addEventListener('DOMContentLoaded', function(){
    const hamburgerButton = document.querySelector(".hamburger");
    const navBar = document.querySelector (".navbar");

    hamburgerButton.addEventListener("click", function(){
        navBar.classList.toggle("active");
    })
})

