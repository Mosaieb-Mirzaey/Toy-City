

// Header mobile Button toggle

let navbarList = document.querySelector(".mainNav ul");
let navbarBtn = document.querySelector(".mainNav .nav-small button");
let navBtnIcon = document.querySelector(".toggler .fa");


navbarBtn.addEventListener("click" , function (){
    if (navBtnIcon.classList.contains("fa-bars")){
        navBtnIcon.classList.remove("fa-bars");
        navBtnIcon.classList.add("fa-times");
        navbarList.style.top = "4.1rem"

    }else{
        navBtnIcon.classList.remove("f-times");
        navBtnIcon.classList.add("fa-bars");
        navbarList.style.top = "-8.1rem"
    }
})
