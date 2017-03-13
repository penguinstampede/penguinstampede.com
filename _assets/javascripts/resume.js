//= require jquery/dist/jquery
//= require foundation-sites/js/foundation.core
//= require foundation-sites/js/foundation.util.keyboard
//= require foundation-sites/js/foundation.util.triggers
//= require foundation-sites/js/foundation.util.motion
//= require foundation-sites/js/foundation.util.touch
//= require foundation-sites/js/foundation.util.mediaQuery
//= require foundation-sites/js/foundation.slider

$(function(){
  $(document).foundation();
  $('.sidebar .skills ul li').each(function(key, el){
    var the_slider = $('<div class="slider" data-slider></div>');
    the_slider.append('<span class="slider-handle" data-slider-handle></span>');
    the_slider.append('<span class="slider-fill" data-slider-fill></span>');
    the_slider.append('<input type="hidden">');
    var the_span = $(el).find('span');
    var rating = the_span.html();
    var slider_options = {
      start: 1,
      end: 5,
      initialStart: rating,
      draggable: false
    };
    the_span.replaceWith(the_slider);
    var slider = new Foundation.Slider(the_slider, slider_options);
  });
});

var el = document.body, className = 'phantom';
if(window._phantom){
  if(el.classList){
    el.classList.add(className);
  } else {
    el.className += ' ' + className;
  }
}
