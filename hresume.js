
$(document).ready(function() {


    // on clicking the about link,
    // insert a dom element after the action-strip, give it a class name of about-slidedown
    // put the contents of about-copy into about-slidedown
    // toggle about-slidedown's visibility, with a slide down effect
    // TODO: make hide/show more modular
    // TODO: add a close button
    // TODO: fade bg color in and out
    $('.documentation a.toggle-about-box').toggle(function() {
    
        $('.about-slidedown').remove();
        $("<div>").addClass('about-slidedown').insertAfter('.action-strip').hide();
    
        $('.about-slidedown').html($('#about-copy').html()).slideDown();
        $('body').css('background-color', '#cfcfcf');
    
    }, function() {
    
        $('.about-slidedown').slideUp();
        $('body').css('background-color', '#ffffff');
    
    });
});


