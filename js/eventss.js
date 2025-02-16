// Завдання 1 та 2

document.addEventListener('DOMContentLoaded', () => {
    const openModalButton = document.querySelector('[data-action="open-modal"]');
    const closeModalButton = document.querySelector('[data-action="close-modal"]');
    const backdrop = document.querySelector('.js-backdrop');

    openModalButton.addEventListener('click', () => {
        document.body.classList.add('show-modal');
    });

    closeModalButton.addEventListener('click', () => {
        document.body.classList.remove('show-modal');
    });

    backdrop.addEventListener('click', (event) => {
        if (event.target === backdrop) {
            document.body.classList.remove('show-modal');
        }
    });
});


