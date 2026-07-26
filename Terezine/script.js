
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

