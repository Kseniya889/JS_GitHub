
// ====Вибір мови "lang-switch"====

// const langBtn = document.querySelector('.lang-btn');
// const langMenu = document.querySelector('.lang-menu');

// langBtn.addEventListener('click', () => {
//   const expanded = langBtn.getAttribute('aria-expanded') === 'true';
//   langBtn.setAttribute('aria-expanded', String(!expanded));
//   langMenu.hidden = !langMenu.hidden; // просто перемикаємо hidden
// });

// langMenu.addEventListener('click', (e) => {
//   if (e.target.dataset.lang) {
//     console.log("Вибрана мова:", e.target.dataset.lang);
//     langMenu.hidden = true;
//     langBtn.setAttribute('aria-expanded', 'false');
//   }
// });




const langBtn = document.querySelector('.lang-switch__btn');
const langMenu = document.querySelector('.lang-switch__menu');


langBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // щоб клік по кнопці не закривав меню
  const expanded = langBtn.getAttribute('aria-expanded') === 'true';
  langBtn.setAttribute('aria-expanded', String(!expanded));
  langMenu.hidden = !langMenu.hidden;
});

langMenu.addEventListener('click', (e) => {
  if (e.target.dataset.lang) {
    console.log("Вибрана мова:", e.target.dataset.lang);
    langMenu.hidden = true;
    langBtn.setAttribute('aria-expanded', 'false');
  }
});

// закриття при кліку поза меню
document.addEventListener('click', (e) => {
  if (!langMenu.hidden && !langMenu.contains(e.target) && e.target !== langBtn) {
    langMenu.hidden = true;
    langBtn.setAttribute('aria-expanded', 'false');
  }
});




// ====модальний пошук (тільки іконка в хедері)====
// 

const searchBtn = document.querySelector('.search__btn');
const searchModal = document.querySelector('.search__modal');

searchBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  searchModal.classList.toggle('search-modal--active');
});

document.addEventListener('click', (e) => {
  if (searchModal.classList.contains('search-modal--active') && !searchModal.contains(e.target) && e.target !== searchBtn) {
    searchModal.classList.remove('search-modal--active');
  }
});


// // burger
// const burger = document.querySelector('.burger');
// const nav = document.querySelector('.nav');

// burger.addEventListener('click', () => {
//   nav.classList.toggle('active');
// });


document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('navMenu');

    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        navMenu.classList.toggle('active');

        // Блокировка скролла при открытом меню
        document.body.style.overflow = navMenu.classList.contains('active')
            ? 'hidden'
            : '';
    });

    // Закрытие меню при клике на ссылку
    const navLinks = document.querySelectorAll('.nav__list a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            burger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Закрытие меню при клике вне области
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) &&
            !burger.contains(e.target) &&
            navMenu.classList.contains('active')) {

            burger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});



// активний пункт має змінюватися по кліку
const navItems = document.querySelectorAll('.nav__item');

navItems.forEach(item => {
  item.addEventListener('click', () => {

    navItems.forEach(el =>
      el.classList.remove('nav__item--active')
    );

    item.classList.add('nav__item--active');
  });
});
