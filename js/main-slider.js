(function($) {

    $(document).ready(function(){
        "use strict";
        //Main Slider
        var owl = $('.step1 .owl-carousel');
        owl.owlCarousel({
            autoplay: false,
            rtl:true,
            loop: true,
            nav:true,
            smartSpeed:550,
            autoplayTimeout: 3000,
            dots: false,
            responsive:{
                touchDrag: true,
                0:{
                    items:1,
                    nav:true
                },
                576:{
                    items:2,
                    nav:false
                },
                768:{
                    items:3,
                    nav:false
                },
                992:{
                    items:4,
                    nav:true,
                    loop:true
                }
            },
        });

        // add animate.css class(es) to the elements to be animated
        function setAnimation ( _elem, _InOut ) {
            // Store all animationend event name in a string.
            // cf animate.css documentation
            var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

            _elem.each ( function () {
                var $elem = $(this);
                var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

                $elem.addClass($animationType).one(animationEndEvent, function () {
                    $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
                });
            });
        }

// Fired before current slide change
        owl.on('change.owl.carousel', function(event) {
            var $currentItem = $('.owl-item', owl).eq(event.item.index);
            var $elemsToanim = $currentItem.find("[data-animation-out]");
            setAnimation ($elemsToanim, 'out');
        });

// Fired after current slide has been changed
        var round = 0;
        owl.on('changed.owl.carousel', function(event) {

            var $currentItem = $('.owl-item', owl).eq(event.item.index);
            var $elemsToanim = $currentItem.find("[data-animation-in]");

            setAnimation ($elemsToanim, 'in');
        })

        owl.on('translated.owl.carousel', function(event) {
            console.log (event.item.index, event.page.count);

            if (event.item.index == (event.page.count - 1))  {
                if (round < 1) {
                    round++
                    console.log (round);
                } else {
                    owl.trigger('stop.owl.autoplay');
                    var owlData = owl.data('owl.carousel');
                    owlData.settings.autoplay = false; //don't know if both are necessary
                    owlData.options.autoplay = false;
                    owl.trigger('refresh.owl.carousel');
                }
            }
        });
    });


})(jQuery);
