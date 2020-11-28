


// Branches Collapse Btn
function Collapse1(item){
    if (item.lastElementChild.classList.contains("fa-plus")){
        $(item).children().last().removeClass("fa-plus").addClass("fa-minus");
        $(item).next().children().css({"margin-top":"22px", "transition":"500ms"})
    }else {
        $(item).children().last().removeClass("fa-minus").addClass("fa-plus");
        $(item).next().children().css({"margin-top":"-840px", "transition":"500ms"})
    }
}
// SubBranches Collapse Btn
function categoryCollapse2(item){
    if (item.lastElementChild.classList.contains("fa-plus")){
        $(item).children().last().removeClass("fa-plus").addClass("fa-minus");
        $(item).next().children().css({"margin-top":"1.2rem", "transition":"500ms"})
    }else {
        $(item).children().last().removeClass("fa-minus").addClass("fa-plus");
        $(item).next().children().css({"margin-top":"-100%", "transition":"500ms"})
    }
}

// Branches Collapse Btn Mobile
function collapseMobile1(item){
    if (item.classList.contains("false")){
        $(item).removeClass("false").addClass("true");
        $(item).next().css({"height":"auto", "transition":"500ms", })
    }else {
        $(item).removeClass("true").addClass("false");
        $(item).next().css({"height":"0", "transition":"500ms", })
    }
}
// SubBranches Collapse Btn Mobile
function collapseMobile2(item){
    if (item.firstElementChild.classList.contains("fa-plus")){
        $(item).children().first().removeClass("fa-plus").addClass("fa-minus");
        $(item).next().css({"height":"auto", "transition":"500ms", })
    }else {
        $(item).children().first().removeClass("fa-minus").addClass("fa-plus");
        $(item).next().css({"height":"0", "transition":"500ms", })
    }
}




// Initialise Sliders
// Set min/max range on sliders as well as default values
var $priceSlider = $('#filter-price').slider({ tooltip_split: true, min: 100000,  max: 3000000, range: true, value: [100000, 1000000] });

function updateRangeSliderPrice(slider, slideEvt) {
    console.log('Current slider:' + slider);
    var sldmin = +slideEvt.value[0],
        sldmax = +slideEvt.value[1],
        // Find which filter group this slider is in (in this case it will be either height or weight)
        // This can be changed by modifying the data-filter-group="age" attribute on the slider HTML
        filterGroup = slider.attr('data-filter-group'),
        // Set current selection in variable that can be pass to the label
        currentSelection = sldmin + 'تومان' + ' - ' + sldmax + 'تومان';

    // Update filter label with new range selection
    slider.siblings('.filter-label').find('.filter-selection').text(currentSelection);

    // Set min and max values for current selection to current selection
    // If no values are found set min to 0 and max to 100000
    // Store min/max values in rangeFilters array in the relevant filter group
    // E.g. rangeFilters['height'].min and rangeFilters['height'].max
    console.log('Filtergroup: '+ filterGroup);
    rangeFilters[filterGroup] = {
        min: sldmin || 0,
        max: sldmax || 100000
    };
    // Trigger isotope again to refresh layout
    $grid.isotope();

}


// Trigger Isotope Filter when slider drag has stopped
$priceSlider.on('slideStop', function(slideEvt){
    var $this =$(this);
    updateRangeSliderPrice($this, slideEvt);
});
