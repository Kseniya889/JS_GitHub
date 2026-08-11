// ! кнопки для advantages__section
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

// ! кнопки для cooperation__section


document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("checkbox");
  const submit = document.querySelector(".contact-form__submit");

  // початково кнопка вимкнена
  submit.disabled = !checkbox.checked;

  // при зміні стану чекбокса
  checkbox.addEventListener("change", () => {
    submit.disabled = !checkbox.checked;
  });
});





// ! кнопка з телефоном, яка відкриває модальне вікно
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById('modal');
  const openBtn = document.getElementById('openModal');
  const closeBtn = document.getElementById('closeModal');

  openBtn.onclick = () => modal.style.display = 'flex';   // показати і центрувати
  closeBtn.onclick = () => modal.style.display = 'none';  // сховати
  window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };
});




// ! СЛАЙДЕР
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
    currentIndex = index;
  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.getAttribute("data-index"));
      showSlide(index);
    });
  });

  setInterval(() => {
    let nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }, 5000);
});




// ! слайдер мов з крапками (dots) 

document.addEventListener("DOMContentLoaded", () => {
  const langSelectors = document.querySelectorAll(".lang-selector");

  langSelectors.forEach(selector => {
    const dropdown = selector.querySelector(".lang-selector__dropdown");
    const langText = selector.querySelector(".lang-selector__text");

    // відкривати/закривати список мов
    selector.addEventListener("click", () => {
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });

    // вибір мови
    dropdown.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        const selectedLang = e.target.dataset.lang;
        langText.textContent = e.target.textContent; // змінюємо напис
        dropdown.style.display = "none";

        console.log("Вибрана мова:", selectedLang);
        // тут можна викликати функцію для зміни контенту сайту
      }
    });

    // закриття меню при кліку поза селектором
    document.addEventListener("click", (e) => {
      if (!selector.contains(e.target)) {
        dropdown.style.display = "none";
      }
    });
  });
});
