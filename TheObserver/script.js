
// додати/прибрати клас active для menu та menuBtn по кліку
const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function () {

  menu.classList.toggle('active');
  menuBtn.classList.toggle('active');

  const isOpen = menu.classList.contains('active');

  menuBtn.setAttribute('aria-expanded', isOpen);

});