let allmenubtn = document.querySelector(".all-menu-btn");
let allmenubg = document.querySelector(".all-menu-bg");
let closebtn = document.querySelector(".close-btn");

allmenubtn.onclick = function () {
    allmenubg.classList.toggle("active");
};

closebtn.onclick = function () {
    allmenubg.classList.toggle("active");
};


