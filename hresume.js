
$(document).ready(function() {

    // on clicking the about link,
    // insert a dom element after the action-strip, give it a class name of about-slidedown
    // put the contents of about-copy into about-slidedown
    // toggle about-slidedown's visibility, with a slide down effect
    // TODO: clean this up
    // TODO: put a fade on the bg color
    $('.documentation a.toggle-about-box').toggle(function() {
          return show_about_box();
    }, function() {
        return close_about_box();
    });
    
});

function show_about_box () {
    $('.about-slidedown').remove();
    $("<div>").addClass('about-slidedown').insertAfter('.action-strip').hide();

    $('.about-slidedown').html($('#about-copy').html()).slideDown();
    $('body').css('background-color', '#cfcfcf');
    
    $('.close-button,#hd,#bd').click(function() {
        $('.documentation a.toggle-about-box').trigger("click"); 
        $('.close-button,#hd,#bd').unbind('click'); // no open/close after the window is closed.
        return false;
    });
    return false;
}

function close_about_box () {
    $('.about-slidedown').slideUp();
    $('body').css('background-color', '#ffffff');
    return false
}