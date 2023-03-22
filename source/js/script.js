let burger = document.querySelector('.header__burger');
let menuWrapper = document.querySelector('.header__wrapper-navigation');

if (menuWrapper) {
  burger.classList.remove('header__burger--nojs');
  menuWrapper.classList.remove('header__wrapper-navigation--nojs');
  burger.onclick = function () {
  if (burger.classList.contains('header__burger--close')) {
    menuWrapper.classList.remove('header__wrapper-navigation--close');
    menuWrapper.classList.add('header__wrapper-navigation--open');
    burger.classList.remove('header__burger--close');
    burger.classList.add('header__burger--open');
  } else if (burger.classList.contains('header__burger--open')) {
    menuWrapper.classList.add('header__wrapper-navigation--close');
    menuWrapper.classList.remove('header__wrapper-navigation--open');
    burger.classList.add('header__burger--close');
    burger.classList.remove('header__burger--open');
  }
}
}
