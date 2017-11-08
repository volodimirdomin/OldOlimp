$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
 


$(window).scroll(function(){
    $(".main-title").css("opacity", 1 - $(window).scrollTop() / 600);
  });


$(document).ready(function() {
  var origheight = $("#home").height();
  var height = $(window).height();
  if (height > origheight) {
    $("#home").height(height);
  }
  
  $(window).scroll(function(){
    var x = $(this).scrollTop();
    $('#home').css('background-position','center -'+parseInt(x/5)+'px');
});  
});