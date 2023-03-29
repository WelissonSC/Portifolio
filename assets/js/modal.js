const fade = document.querySelector('[data-modal="fade"]')
const modal = document.querySelector('[data-modal="modal"]')
const button = document.querySelector('[data-modal="button"]')
const linkButton = document.querySelector('[data-modal="modalcv"]')


// const fecha = () => {
//     fade.style.display = 'none';
//     modal.style.display = 'none';
//     button.style.display = 'none';
// }

// const exibir = () => {
//     fade.style.display = 'block';
//     modal.style.display = 'block';
//     button.style.display = 'block';
// }

// [linkButton, button, fade].forEach((element) => {
//     element.addEventListener('click', fecha(), exibir())
// });

linkButton.addEventListener('click', () => {
    fade.style.display = 'block';
    modal.style.display = 'block';
    button.style.display = 'block';
})

button.addEventListener('click', () => {
    fade.style.display = 'none';
    modal.style.display = 'none';
    button.style.display = 'none';
})


fade.addEventListener('click', () => {
    fade.style.display = 'none';
    modal.style.display = 'none';
    button.style.display = 'none';
})

