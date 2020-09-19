

let searchBox = document.querySelector("#search-box");
let search = document.querySelector("header .search");
let navbarNav = document.querySelector("#navbarNav");

search.addEventListener("click", function (){
    if (searchBox.classList.contains("deactivate")){
        navbarNav.classList.remove("show")
        searchBox.classList.remove("deactivate");
        searchBox.classList.add("activate")
    }else {
        searchBox.classList.remove("activate");
        searchBox.classList.add("deactivate");
        navbarNav.classList.remove("show")
    }
})


let imgJava1 = document.querySelector(".imgJava1");
let stepContent = document.querySelector(".step-content");

function animatedStep1() {
    let offset = 290;
    let distance;
    function calcLengthOfTop() {
        let scrollTop = window.scrollY;
        let elementOffset = stepContent.offsetTop;
        distance = (elementOffset - scrollTop);
        return distance
    }

    if (calcLengthOfTop() >= offset){
        imgJava1.innerHTML = `<img class="img-step1" onscroll="animatedStep1()" src="images/Banner/step-1-animation.gif" alt="animation1">`
    }
}
window.addEventListener("scroll", animatedStep1)



let imgJava2 = document.querySelector(".imgJava2");
let stepContent2 = document.querySelector(".step-2-content");

function animatedStep2() {
    let offset = 400;
    let distance;
    function calcLengthOfTop() {
        let scrollTop = window.scrollY;
        let elementOffset = stepContent2.offsetTop;
        distance = (elementOffset - scrollTop);
        return distance
    }

    if (calcLengthOfTop() <= offset){
        imgJava2.innerHTML = `<img class="img-step2 d-none d-lg-block" src="images/Banner/step-2-animation.gif" alt="animation2">`
    }
}
window.addEventListener("scroll", animatedStep2)




let svgEffectEnd2 = document.querySelector("#animation-2 .step-line svg");
let animation2 = document.querySelector("#animation-2");

function animatedSvg2() {
    let offset = 600;
    let distance;
    function calcLengthOfTop() {
        let scrollTop = window.scrollY;
        let elementOffset = animation2.offsetTop;
        distance = (elementOffset - scrollTop);
        return distance
    }

    if (calcLengthOfTop() < offset){
        svgEffectEnd2.classList.add("svgEffectEnd-2")
    }
}
window.addEventListener("scroll", animatedSvg2)



let svgEffectEnd3 = document.querySelector(".step-3 .step-3-line svg");
let animation3 = document.querySelector("#animation-2");

function animatedSvg3() {
    let offset = 600;
    let distance;
    function calcLengthOfTop() {
        let scrollTop = window.scrollY;
        let elementOffset = animation3.offsetTop;
        distance = (elementOffset - scrollTop);
        return distance
    }

    if (calcLengthOfTop() < offset){
        svgEffectEnd3.classList.add("svgEffectEnd-3")
    }
}
window.addEventListener("scroll", animatedSvg3)

