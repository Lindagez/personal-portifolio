// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    // to see x botton
    menuBtn.classList.add('close');
    // to show menu bar content
    menu.classList.add('show');
    // to show left slides
    menuNav.classList.add('show');
    // to show right side slides
    menuBranding.classList.add('show');
    // to display the contents
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
     // to close the menu bar
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // to reapeat the icon menubar 
    showMenu = false;
  }
}
