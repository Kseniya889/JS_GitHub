const buttons = document.querySelectorAll('.advantages__button');
const details = document.querySelectorAll('.advantages__details');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // активна кнопка
    buttons.forEach(b => b.classList.remove('advantages__button--active'));
    btn.classList.add('advantages__button--active');

    // приховати всі блоки
    details.forEach(d => d.classList.remove('advantages__details--active'));

    // показати потрібний блок
    const target = btn.getAttribute('data-target');
    document.querySelector(`.advantages__details--${target}`).classList.add('advantages__details--active');
  });
});
