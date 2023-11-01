/////////////
//// Description for Post Page /////


$(function() {
    $('.js-popover').popover({
        container: 'body'
    })
})

const JS_CSRFTOKEN = document.querySelector('[name=csrfmiddlewaretoken]').value;
const JS_ICON_HEART_GRAY = 'static/img/heart.png';
const JS_ICON_HEART_BLUE = 'static/img/Twitter.png';

$(function() {
    // Executed when js_menu js clicked
    $('.js-menu').click(function(){
        // $(this): Self element, namely div.js-menu
        // next(): Next to div.js-menu, namely div.menu1
        // toggle: Switch show and hide
        $(this).next().toggle();

    })
})