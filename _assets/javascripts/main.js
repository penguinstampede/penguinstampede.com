(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
e=o.createElement(i);r=o.getElementsByTagName(i)[0];
e.src='//www.google-analytics.com/analytics.js';
r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
ga('create','UA-2434459-9','auto');ga('send','pageview');

var el = document.body, className = 'phantom';
if(window._phantom){
  if(el.classList){
    el.classList.add(className);
  } else {
    el.className += ' ' + className;
  }
}
