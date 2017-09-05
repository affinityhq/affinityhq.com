$(document).ready(function() {
    var $process = $('.nav-item2');
    var $services = $('.nav-item3');
    var $contact = $('.nav-item4');

    var $gallery = $('.gallery');
    var $contactForm = $('.contact');
    var $feature1 = $('.feature1');

    var $whole = $('html, body');
    var $arrow = $('.fa-angle-down');
    
    //Smooth scroll arrow
    $arrow.click(function(){
        $whole.animate({
            scrollTop: $feature1.offset().top
        }, 'slow');
    });

    //Smooth scroll our process
    $process.click(function(){
        $whole.animate({
            scrollTop: $feature1.offset().top
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
});