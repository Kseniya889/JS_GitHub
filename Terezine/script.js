
  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".advantages__button");
    const details = document.querySelectorAll(".advantages__details");

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const target = button.getAttribute("data-target");

        // зняти active з усіх кнопок
        buttons.forEach(btn => btn.classList.remove("advantages__button--active"));
        // зняти active з усіх блоків
        details.forEach(detail => detail.classList.remove("advantages__details--active"));

        // додати active до натиснутої кнопки
        button.classList.add("advantages__button--active");

        // знайти блок з відповідним модифікатором
        const targetDetail = document.querySelector(`.advantages__details--${target}`);
        if (targetDetail) {
          targetDetail.classList.add("advantages__details--active");
        }
      });
    });
  });



/*Вимкнення кнопки поки чекбокс не відмічено*/
 document.addEventListener('DOMContentLoaded', () => {
  // --- advantages переключалка ---
  const buttons = document.querySelectorAll('.advantages__button');
  const details = document.querySelectorAll('.advantages__details');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-target');

      buttons.forEach(btn => btn.classList.remove('advantages__button--active'));
      details.forEach(detail => detail.classList.remove('advantages__details--active'));

      button.classList.add('advantages__button--active');

      const targetDetail = document.querySelector(`.advantages__details--${target}`);
      if (targetDetail) {
        targetDetail.classList.add('advantages__details--active');
      }
    });
  });

  // --- логіка для форми: чекбокс + кнопка Надіслати ---
  const checkbox = document.getElementById('checkbox');
  const submit = document.querySelector('.contact-form__submit');
  const form = document.querySelector('.contact-form--main__form'); // або твій селектор форми

  // Якщо кнопки або чекбокса немає — нічого не робимо
  if (!submit) return;

  // Ініціалізуємо стан (якщо чекбокс відсутній — кнопка активна за замовчуванням)
  if (checkbox) {
    submit.disabled = !checkbox.checked;
  } else {
    submit.disabled = false;
  }

  // Обробник зміни чекбокса
  if (checkbox) {
    checkbox.addEventListener('change', () => {
      submit.disabled = !checkbox.checked;
      // для доступності: aria
      checkbox.setAttribute('aria-checked', checkbox.checked ? 'true' : 'false');
    });
  }

  // Додаткова валідація при сабміті: не дозволяємо відправити форму без згоди
  if (form) {
    form.addEventListener('submit', (e) => {
      if (checkbox && !checkbox.checked) {
        e.preventDefault();
        // візуально показати помилку
        const consentBlock = document.querySelector('.contact-form__consent') || checkbox.parentElement;
        if (consentBlock) {
          consentBlock.classList.add('contact-form__consent--error');
          // додаткове повідомлення (якщо потрібно)
          let msg = consentBlock.querySelector('.consent-error-message');
          if (!msg) {
            msg = document.createElement('div');
            msg.className = 'consent-error-message';
            msg.textContent = 'Будь ласка, підтвердіть згоду, щоб продовжити.';
            consentBlock.appendChild(msg);
          }
          // фокус на чекбокс для зручності
          checkbox.focus();
        }
      }
    });
  }
});
