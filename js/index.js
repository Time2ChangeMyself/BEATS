const body = document.body;
const modalWindow = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close');
const humburgerMenu = document.querySelector('.humburger');
const menuLink = document.querySelectorAll('.menu__link')

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



menuLink.forEach((item) =>  {
  item.addEventListener('click', e => {
    
    modalWindow.style.display = "none";
    body.style.overflow = "scroll";
    
  })
});


