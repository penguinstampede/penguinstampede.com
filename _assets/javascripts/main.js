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

  $('#tozap .submit').on('click', function(ev){
    var err = false;
    ev.preventDefault();
    $(this).addClass('disabled');
    $('#contact .callout').hide();
    $('#contact .callout p').html('');
    var emailcheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( (emailcheck.test($('#youremail').val()) == false) || ($('#youremail').val() == '') ) {
      err = true;
      errmsg = 'Please make sure your email address is correct before submitting.';
    }
    $('input:required').each(function(key, val){
      if ($(this).val() == ''){
        err = true;
        errmsg = 'Please make sure all required fields are filled out before submitting.';
      }
    });
    $('select:required').each(function(key, val){
      if ($(this).val() == ''){
        err = true;
        errmsg = 'Please make sure all required fields are filled out before submitting.';
      }
    });
    $('textarea:required').each(function(key, val){
      if ($(this).val() == ''){
        err = true;
        errmsg = 'Please make sure all required fields are filled out before submitting.';
      }
    });
    if (!err) {
      var formdata = $('#tozap').serialize();
      var tozap = $.post('https://hooks.zapier.com/hooks/catch/2056452/mcmxnb/', formdata);
      tozap.done(function(data){
        if (data.status == 'success'){
          ga('send', 'pageview', '/contact');
          $('.complete').fadeOut();
          $('#tozap').fadeOut(400, function(){
            $('#thanks').fadeIn();
          });
        } else {
          console.log(data);
          $('#contact .callout p').html(data.error);
          $('#contact .callout').fadeIn();
        }
      });
    } else{
      $(this).removeClass('disabled');
      $('#contact .callout p').html(errmsg);
      $('#contact .callout').fadeIn();
    }
  });
});
