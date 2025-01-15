const hamburger = document.querySelector(".hamburger");
const rightNavHeader = document.querySelector(".right-nav-header");
const navInfo = document.querySelector(".nav-info");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    rightNavHeader.classList.toggle("active");
    navInfo.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() => {
    hamburger.classList.remove("active");
    rightNavHeader.classList.remove("active");
    navInfo.classList.remove("active");
}))