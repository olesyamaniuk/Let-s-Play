document.addEventListener('DOMContentLoaded', () => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const navListRef = document.querySelector('.navigation__list');
  const headerRef = document.querySelector('.header');
  const navigationRef = document.querySelector('.navigation'); 

  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');
    navListRef.classList.toggle('is-open');
    headerRef.classList.toggle('is-open');
    navigationRef.classList.toggle('is-open'); 
  });

  document.querySelectorAll('.navigation__link').forEach((n) =>
    n.addEventListener('click', () => {
      navListRef.classList.remove('is-open');
      menuBtnRef.classList.remove('is-open');
      headerRef.classList.remove('is-open');
      navigationRef.classList.remove('is-open'); 
    })
  );
});

function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const buttonImg = element.querySelector(".toggle-button img"); 

  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
    buttonImg.src = "/image/faq/Group 35538.png"; 
  } else {
    answer.style.display = "none";
    buttonImg.src = "/image/faq/Group 35539.png"; 
  }
}










