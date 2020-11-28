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



// ******* اسلایدر *******
var generalInfo = $('#generalInfo .owl-carousel');
generalInfo.owlCarousel({
    autoplay: false,
    rtl:true,
    loop: true,
    nav:true,
    smartSpeed:550,
    dots: true,
    responsive:{
        touchDrag: true,
        0:{
            items:1,
            nav:false,
            dots: false,
        },
        576:{
            items:1,
            nav:false
        },
        768:{
            items:1,
            nav:false
        },
        992:{
            items:1,
            nav:true,
            loop:true,
            dots: true,
        }
    },
});
// گلوله های پایین اسلایدر
let dotBtn = document.querySelectorAll('#generalInfo .owl-dots button');
$("#generalInfo .owl-dots button").each(function (item){
    console.log(item)
    let a= item;
    dotBtn[item].innerHTML = `<img src='../images/product/icon-ferrari-foldable-led-twist-scooter-red-${item+1}.jpg' class=""/>`;
});


// Address Bar Hover
let originAttr;
function addressBarHoverIn(item){
    originAttr = $(item).prev().attr("src");
    var splitAttr = originAttr.match(/(.+)(\..+)/);
    let srcAttr = splitAttr[splitAttr.length - 2];

    $(item).prev().attr("src",`${srcAttr}-hover.png`)
}
function addressBarHoverOut(item){
    $(item).prev().attr("src",`${originAttr}`)
}


// tabProduct
function tabProduct(item) {
    $("#tabProduct li img").remove();
    $("#tabProduct li a").css({"color": "#666"})
    $(`<img src="../images/icon/tabProduct.png" alt="tabProductIcon">`).insertAfter(item)
    $(item).css({"color": "white"});
}

