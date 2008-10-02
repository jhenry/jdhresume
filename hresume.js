
$(document).ready(function() {
    
    // Set up events for the about-link.
    $('.documentation a.toggle-about-box').toggle(function() {
        open_about_box();
    }, function() {
        exit_about_box();
    });
});

// Fade body background into grey.
// Insert a hidden dom element after the action-strip.
// Put the contents of #about-copy into #about-slidedown.
// Show #about-slidedown, with a slide down effect.
function open_about_box () {
    $('body').animate({ backgroundColor: "#cfcfcf" }, "fast");
    $('<div id="about-slidedown">').insertAfter('.action-strip').hide();
    $('#about-slidedown').html($('#about-copy').html()).slideDown({duration: "fast", complete: cleanup_slidedown});
    
}

// Hide #about-slidedown, with a slide up effect.
function exit_about_box () {
    $('#about-slidedown').slideUp({duration: "fast", complete: cleanup_slideup});
}

// Bind click events for closing about box.
function cleanup_slidedown () {
    $('#return a, #hd, #bd').click(function() {
          $('.documentation a.toggle-about-box').trigger("click"); 
          return false;
      });
}

// Fade body background back to white.
// Unbind click events for closing about box.
function cleanup_slideup () {
    $('body').animate({ backgroundColor: "#ffffff" }, "fast");
    $('#about-slidedown').remove();
    $('#return a,#hd,#bd').unbind('click');
}


