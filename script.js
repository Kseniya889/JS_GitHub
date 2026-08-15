
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


// burger
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
