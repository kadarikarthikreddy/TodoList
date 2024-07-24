var menuIcon = document.querySelector('.menu-bar');
var sidebar = document.querySelector('.side-bar');
var container = document.querySelector('.container');
var cont = document.querySelector('.list-container');

menuIcon.onclick =function(){
  sidebar.classList.toggle('small-side');
  container.classList.toggle('large-container');
  cont.classList.toggle('list-large-container');
}

