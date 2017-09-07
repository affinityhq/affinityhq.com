$(document).ready(function() {
    var $about = $('.nav-item2');
    var $services = $('.nav-item3');
    var $contact = $('.nav-item4');
    var $breakBtn = $('.break-btn');

    var $gallery = $('.gallery');
    var $contactForm = $('.contact');
    var $mission = $('.mission');

    var $whole = $('html, body');
    var $arrow = $('.fa-angle-down');
    
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