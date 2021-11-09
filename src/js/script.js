import PerfectScrollbar from 'perfect-scrollbar';

window.addEventListener("load", function(event) {
    console.log("'Todos los recursos terminaron de cargar!");
    
    initScrollBar();
    initMobileMenu();
}); 

function initScrollBar() {
  const container = document.querySelector('.wrapper');
  const ps = new PerfectScrollbar(container);
}

function initMobileMenu() {
  const menuBtn = document.querySelector('.menu-icon');
  menuBtn.addEventListener('click', onMenuIconClick);
}

function onMenuIconClick() {
  const menu = document.querySelector('nav ul');
  menu.classList.toggle('opened')
}