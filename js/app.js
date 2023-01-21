const buttons = document.querySelectorAll("[data-carousel-button]");
const primaryNav = document.querySelector('.navBar__list');
const navToggle = document.querySelector('.mobileNavToggle');
const toggleLine = document.querySelector('.toggle__line');
const mainHeader = document.querySelector('.mainHeader');
const hero = document.querySelector('.hero');
const headerOffset = mainHeader.offsetHeight;
const heroOffset = hero.offsetHeight;


buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = document.querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  });
});

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');

  if(visibility === "false"){
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }

});

window.addEventListener('scroll', () =>{
  if(window.scrollY > headerOffset + heroOffset) {
    navToggle.setAttribute('data-scroll', true);
  } else {
    navToggle.setAttribute('data-scroll', false);
  }
});