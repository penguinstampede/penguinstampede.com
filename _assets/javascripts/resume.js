var el = document.body, className = 'phantom';
if(window._phantom){
  if(el.classList){
    el.classList.add(className);
  } else {
    el.className += ' ' + className;
  }
}
