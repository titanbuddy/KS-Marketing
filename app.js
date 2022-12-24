const burger = document.querySelector('.burger');
const navLinkContainer = document.querySelector('.nav-links');
const cancelContainer = document.querySelector('.cancel-container');
// const buttonsBtn = document.querySelectorAll("[data-carousel-button]");
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    burger.classList.toggle('burger-toggle');
    navLinkContainer.classList.toggle('active');

    navLinks.forEach(e => {
        e.addEventListener('click', () => {
            navLinkContainer.classList.remove('active');
            burger.classList.remove('burger-toggle');
        });
    })
});
cancelContainer.addEventListener('click', () => {
    navLinkContainer.classList.remove('active');
    burger.classList.toggle('burger-toggle');

});
// buttonsBtn.forEach(btn =>  {
//     btn.addEventListener('click', () => {
//         const offset = btn.dataset.carouselButton === "next" ? 1 : -1;
//         const slides = btn.closest("[data-carousel]").querySelector('[data-slides]');
//         const activeSlide = slides.querySelector('[data-active');
//         let newIndex = [...slides.children].indexOf(activeSlide) + offset;
//         if (newIndex <0) newIndex = slides.children.length -1;
//         if (newIndex >= slides.children.length) newIndex = 0;
//         slides.children[newIndex].dataset.active = true;
//         delete activeSlide.dataset.active;
//     });
// });
