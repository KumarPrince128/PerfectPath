function onClickMenu() {
    document.getElementById("menu1").classList.toggle("icon");
    document.getElementById("left-dropdown").classList.toggle("change");
}

function onClickHamburger() {
    document.getElementById("menu2").classList.toggle("icon");
    document.getElementById("full-dropdown").classList.toggle("full-menu");
}

function onClicklogo() {
    document.getElementById("right-dropdown").classList.toggle("login-dropdown");
}

const slideImage = document.querySelectorAll(".slide-image");
const slideContainer = document.querySelector(".slide-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const navigationDots = document.querySelector(".navigation-dots");

let numberOfImages = slideImage.length;
let currentSlide = 0;

// Set up the slider

function init() {
    /*   
      slideImage[0] = 0
      slideImage[1] = 100%
      slideImage[2] = 200%
      */

    slideImage.forEach((img, i) => {
        img.style.left = i * 100 + "%";
    });

    slideImage[0].classList.add("active");

    createNavigationDots();
}

init();

// Create navigation dots

function createNavigationDots() {
    for (let i = 0; i < numberOfImages; i++) {
        const dot = document.createElement("div");
        dot.classList.add("single-dot");
        navigationDots.appendChild(dot);

        dot.addEventListener("click", () => {
            goToSlide(i);
        });
    }

    navigationDots.children[0].classList.add("active");
}

// Next Button

nextBtn.addEventListener("click", () => {
    if (currentSlide >= numberOfImages - 1) {
        goToSlide(0);
        return;
    }

    currentSlide++;
    goToSlide(currentSlide);
});

// Previous Button

prevBtn.addEventListener("click", () => {
    if (currentSlide <= 0) {
        goToSlide(numberOfImages - 1);
        return;
    }

    currentSlide--;
    goToSlide(currentSlide);
});

// Go To Slide

function goToSlide(slideNumber) {
    let slideWidth = slideImage[0].clientWidth;
    slideContainer.style.transform =
        "translateX(-" + slideWidth * slideNumber + "px)";

    currentSlide = slideNumber;

    setActiveClass();
}

// Automatic Go To Slide

setInterval(function () {
    currentSlide += 1;
    if (currentSlide >= numberOfImages) {
        currentSlide = 0;
    }

    let slideWidth = slideImage[0].clientWidth;
    slideContainer.style.transform =
        "translateX(-" + slideWidth * currentSlide + "px)";
    
    setActiveClass();
}, 3500);

// Set Active Class

function setActiveClass() {
    // Set active class for Slide Image

    let currentActive = document.querySelector(".slide-image.active");
    currentActive.classList.remove("active");
    slideImage[currentSlide].classList.add("active");

    //   set active class for navigation dots

    let currentDot = document.querySelector(".single-dot.active");
    currentDot.classList.remove("active");
    navigationDots.children[currentSlide].classList.add("active");
}