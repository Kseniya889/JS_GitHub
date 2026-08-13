
// ====Вибір мови "lang-switch"====

const langBtn = document.querySelector('.lang-btn');
const langMenu = document.querySelector('.lang-menu');

langBtn.addEventListener('click', () => {
  const expanded = langBtn.getAttribute('aria-expanded') === 'true';
  langBtn.setAttribute('aria-expanded', String(!expanded));
  langMenu.hidden = !langMenu.hidden; // просто перемикаємо hidden
});

langMenu.addEventListener('click', (e) => {
  if (e.target.dataset.lang) {
    console.log("Вибрана мова:", e.target.dataset.lang);
    langMenu.hidden = true;
    langBtn.setAttribute('aria-expanded', 'false');
  }
});



// ====модальний пошук (тільки іконка в хедері)====
const searchBtn = document.querySelector('.search-btn');
const searchModal = document.querySelector('.search-modal');

searchBtn.addEventListener('click', () => {
  searchModal.hidden = !searchModal.hidden;
});
