const body = document.body;
const modalWindow = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close');
const humburgerMenu = document.querySelector('.humburger');

humburgerMenu.addEventListener('click', e => {
  e.preventDefault();
  modalWindow.style.display = "block";
  body.style.overflow = "hidden";
});

closeBtn.addEventListener('click', e => {
  e.preventDefault();
  modalWindow.style.display = "none";
  body.style.overflow = "scroll";
});

