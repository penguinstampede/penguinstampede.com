//= require jquery/dist/jquery
//= require foundation-sites/js/foundation.core
//= require foundation-sites/js/foundation.util.keyboard
//= require foundation-sites/js/foundation.util.box
//= require foundation-sites/js/foundation.util.triggers
//= require foundation-sites/js/foundation.util.mediaQuery
//= require foundation-sites/js/foundation.util.motion
//= require foundation-sites/js/foundation.reveal

$(function(){
  $(document).foundation();

  $('#tozap .submit').on('click', function(){
    var formdata = $('#tozap').serialize();
    $.post( "https://hooks.zapier.com/hooks/catch/2056452/mcmxnb/", formdata, function( data ) {
      console.log( data );
    });
  });
});
