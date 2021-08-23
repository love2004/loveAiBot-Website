const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const developerMenu = document.querySelector('#developer-page');
  const featureMenu = document.querySelector('#feature-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 835 && scrollPos < 870) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    featureMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 835 && scrollPos < 1420) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    developerMenu.classList.remove('highlight');
    featureMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 835 && scrollPos < 2065) {
    homeMenu.classList.remove('highlight');
    developerMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    featureMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 835 && scrollPos < 3000){
    homeMenu.classList.remove('highlight');
    developerMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    featureMenu.classList.add('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);


