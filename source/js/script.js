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
