$(document).ready(function() {
    var $about = $('.nav-item2');
    var $services = $('.nav-item3');
    var $contact = $('.nav-item4');
    var $breakBtn = $('.break-btn');
    var $masthead = $('.masthead');

    var $gallery = $('.gallery');
    var $contactForm = $('.contact');
    var $mission = $('.mission');

    var $whole = $('html, body');
    var $arrow = $('.fa-angle-down');

    $(window).scroll(function() {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = 50;
        if (y_scroll_pos > scroll_pos_test) {
            $masthead.css({"background-color": "#353535"});
        } else {
            $masthead.css({"background-color": "transparent"});
        }
    })
    
    //Smooth scroll arrow
    $arrow.click(function(){
        $whole.animate({
            scrollTop: $mission.offset().top
        }, 'slow');
    });

    //Smooth scroll our process
    $about.click(function(){
        $whole.animate({
            scrollTop: $mission.offset().top
        }, 'slow');
    });

    //Smooth scroll services
    $services.click(function(){
        $whole.animate({
            scrollTop: $gallery.offset().top
        }, 'slow');
    });

    //Smooth scroll contact
    $contact.click(function(){
        $whole.animate({
            scrollTop: $contactForm.offset().top
        }, 'slow');
    });

    //Smooth scroll break btn
    $breakBtn.click(function(){
        $whole.animate({
            scrollTop: $contactForm.offset().top
        }, 'slow');
    });
});