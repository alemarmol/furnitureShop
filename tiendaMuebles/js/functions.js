$(document).ready(function(){
  $('.slider').slider({full_width: true});
  $('.slider').slider('pause');
  $('.slider').slider('start');
  $('.slider').slider('next');
  $('.slider').slider('prev');
});

(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space