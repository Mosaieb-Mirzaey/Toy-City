
// bootstrap Number Btn
(function ( $ ) {
    $.fn.bootstrapNumber = function( options ) {

        var settings = $.extend({
            upClass: 'default',
            downClass: 'default',
            upText: '+',
            downText: '-',
            center: true
        }, options );

        return this.each(function(e) {
            var self = $(this);
            var clone = self.clone(true, true);

            var min = self.attr('min');
            var max = self.attr('max');
            var step = (parseInt(self.attr('step')) || 1);

            function setText(n) {
                if (isNaN(n) || (min && n < min) || (max && n > max)) {
                    return false;
                }

                clone.focus().val(n);
                clone.trigger('change');
                return true;
            }

            var group = $("<div class='input-group'></div>");
            var down = $("<button type='button'>" + settings.downText + "</button>").attr('class', 'btnDown btn btn-outline-' + settings.downClass).click(function() {
                setText(parseInt(clone.val() || clone.attr('value')) - step);
            });
            var up = $("<button type='button'>" + settings.upText + "</button>").attr('class', 'btnUp btn btn-outline-' + settings.upClass).click(function() {
                setText(parseInt(clone.val() || clone.attr('value')) + step);
            });
            $("<span class='input-group-btn'></span>").append(down).appendTo(group);
            clone.appendTo(group);
            if(clone && settings.center) {
                clone.css('text-align', 'center');
            }
            $("<span class='input-group-btn'></span>").append(up).appendTo(group);

            // remove spins from original
            clone.prop('type', 'text').keydown(function(e) {
                if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                    (e.keyCode == 65 && e.ctrlKey === true) ||
                    (e.keyCode >= 35 && e.keyCode <= 39)) {
                    return;
                }
                if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                    e.preventDefault();
                }

                var c = String.fromCharCode(e.which);
                var n = parseInt(clone.val() + c);

                if ((min && n < min) || (max && n > max)) {
                    e.preventDefault();
                }
            });

            self.replaceWith(group);
        });
    };
} ( jQuery ));
$('#after').bootstrapNumber();
$('.colorful').bootstrapNumber({
    upClass: 'success',
    downClass: 'danger'
});


// ******* Tool Tip *******
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


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


// Large size
function largeFunction(large) {
    if (large.matches) { // If media query matches
        //owlCarousel
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

        // تنطیمات آلبوم تب
        $("#pills-tabContent .tabInLg").addClass("tab-pane");
    }else {
        // تنطیمات آلبوم تب
        $("#pills-tabContent .tabInLg").removeClass("tab-pane");
    }
}
var large = window.matchMedia("(min-width: 992px)")
largeFunction(large) // Call listener function at run time
large.addListener(largeFunction) // Attach listener function on state changes







$('.sliderTop .owl-nav').addClass("d-flex justify-content-between");


//انیمیشن تیترها در اسلایدر پیج اصلی
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


// انیمیشن رده بندی سن
function ageIconHoverIn(item){
    $(item).addClass("animate__animated animate__heartBeat")
}
function ageIconHoverOut(item){
    $(item).removeClass("animate__animated animate__heartBeat")
}

//انیمیشن کارت های کتگوری پایین اسلایدر صفحه اصلی
function albumCardHoverIn(item){
    $(item).prev().css({"top": '20rem', "transition": '0.4s', "transform": 'scale(1.1) rotate(4deg)'})
}
function albumCardHoverOut(item){
    $(item).prev().css({"top": '11rem', "transition": '0.4s', "transform": 'scale(1) rotate(0deg)'})
}

//دکمه های اسلایدر صفحه اصلی
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
