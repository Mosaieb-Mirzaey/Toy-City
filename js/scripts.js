
new WOW().init();
// SmoothScroll runner
new SmoothScroll ('a[href*="#"]', {
    easing: 'linear',
    speed: 1000,
});

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




let searchBox = document.querySelector("#search-box");
let search = document.querySelector("header .search");
// let navbarNav = document.querySelector("#navbarNav");

search.addEventListener("click", function (){
    if (searchBox.classList.contains("deactivate")){
        // navbarNav.classList.remove("show")
        searchBox.classList.remove("deactivate");
        searchBox.classList.add("activate")
    }else {
        searchBox.classList.remove("activate");
        searchBox.classList.add("deactivate");
        // navbarNav.classList.remove("show")
    }
})


$(Window).on('scroll load' , function () {
    if ($(window).scrollTop() > 250) {
        $('#go-to-top').css('opacity' , '1').css('visibility' , 'visible');
    } else {
        $('#go-to-top').css('opacity' , '0').css('visibility' , 'hidden');
    }
});


var owl = $('.sliderTop .owl-carousel');
owl.owlCarousel({
    autoplay: true,
    loop: true,
    nav:true,
    smartSpeed:3000,
    autoplayTimeout: 8000,
    dots: false,
    // animateIn: 'animate__bounceInDown',
    // animateOut: 'animate__fadeOut',
    items:1,
});

$('.sliderTop .owl-nav').addClass("d-flex justify-content-between");

setInterval(function(){
    if ($('.owl-stage').children('.active')){
        window.setTimeout(function (){
            $('.sliderTop h2').addClass(`animate__animated animate__bounce`);
            $('.sliderTop p').addClass(`animate__animated animate__rubberBand`);
        }, 100)
    }
    $('.sliderTop h2').removeClass(`animate__animated animate__bounce`);
    $('.sliderTop p').removeClass(`animate__animated animate__rubberBand`);
}, 3000);


$('.sliderTop .owl-prev').html(`<span class="icon-control fa fa-angle-double-left ml-5"></span>`);
$('.sliderTop .owl-next').html(`<span class="icon-control fa fa-angle-double-right mr-5"></span>`);


function ageIconHoverIn(item){
    $(item).addClass("animate__animated animate__heartBeat")
}
function ageIconHoverOut(item){
    $(item).removeClass("animate__animated animate__heartBeat")
}
