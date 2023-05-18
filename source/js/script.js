let burger = document.querySelector('.header__burger');
let navigation = document.querySelector('.menu');

if (navigation) {
  burger.classList.remove('header__burger--nojs');
  navigation.classList.remove('menu--nojs');
  burger.onclick = function () {
    if (burger.classList.contains('header__burger--close')) {
      navigation.classList.remove('menu--close');
      navigation.classList.add('menu--open');
      burger.classList.remove('header__burger--close');
      burger.classList.add('header__burger--open');
    } else if (burger.classList.contains('header__burger--open')) {
      navigation.classList.add('menu--close');
      navigation.classList.remove('menu--open');
      burger.classList.add('header__burger--close');
      burger.classList.remove('header__burger--open');
    }
  }
}

let popover = document.querySelector('.popover-paratunka');
let link = document.querySelector('.day-1__link-paratunka');
let btnClose = document.querySelector('.popover-paratunka__btn-close');
let btnReturn = document.querySelector('.popover-paratunka__btn-return');

if (link) {
  link.onclick = function () {
    popover.classList.add('popover-paratunka--open');
  }
}

if (popover) {
  btnClose.onclick = function () {
    popover.classList.remove('popover-paratunka--open');
  }
}

if (popover) {
  btnReturn.onclick = function () {
    popover.classList.remove('popover-paratunka--open');
  }
}
