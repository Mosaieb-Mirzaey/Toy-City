
new WOW().init();
// SmoothScroll runner
new SmoothScroll ('a[href*="#header"]', {
    easing: 'linear',
    speed: 1000,
});


$(window).on('scroll load' , function () {
    if ($(window).scrollTop() > 250) {
        $('#go-to-top').css('opacity' , '1').css('visibility' , 'visible');
    } else {
        $('#go-to-top').css('opacity' , '0').css('visibility' , 'hidden');
    }
});


let owl = $('.sliderTop .owl-carousel');
owl.owlCarousel({
    autoplay: true,
    loop: true,
    nav:true,
    smartSpeed:3000,
    autoplayTimeout: 8000,
    dots: true,
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

function albumCardHoverIn(item){
    $(item).prev().css({"top": '20rem', "transition": '0.4s', "transform": 'scale(1.1) rotate(4deg)'})
}
function albumCardHoverOut(item){
    $(item).prev().css({"top": '11rem', "transition": '0.4s', "transform": 'scale(1) rotate(0deg)'})
}
$('.sliderTop .owl-nav .owl-prev').css({
    "transform":"rotate(180deg)",
    "background-color": "#ab0112",
    "padding": "2rem 1.7rem"
}).html(`<img src="images/Banner/Chevron.svg" width="40px" alt="arrow slider">`);

$('.sliderTop .owl-nav .owl-next').css({
    "background-color": "#ab0112",
    "padding": "2rem 1.7rem"
}).html(`<img src="images/Banner/Chevron.svg" width="40px" alt="arrow slider">`)

//گلوله های پایین اسلایدر
$(".sliderTop .owl-dots button").html(`<span class="fa fa-circle"></span>`);

// دکمه جستجو در حالت موبایل
function mobileSearch(item){
    let searchBtn = document.querySelector(".bgSearchMobile")
    if (searchBtn.classList.contains("deactivate")){
        searchBtn.classList.remove("deactivate");
        searchBtn.classList.add("activate")
    }else {
        searchBtn.classList.remove("activate");
        searchBtn.classList.add("deactivate");
    }
}

// دکمه منوبار در حالت موبایل
function navbarBtn(item){
    let navBtn = document.querySelector(".navSlide .categoryMobile");

    if (navBtn.classList.contains("deactivate")){
        $(item).find("i").removeClass("fa-bars");
        $(item).find("i").addClass("fa-times")
        navBtn.classList.remove("deactivate");
        navBtn.classList.add("activate")
    }else {
        $(item).find("i").removeClass("fa-times");
        $(item).find("i").addClass("fa-bars");
        navBtn.classList.remove("activate");
        navBtn.classList.add("deactivate");
    }
}
