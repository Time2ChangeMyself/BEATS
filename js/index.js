const body = document.body;
const modalWindow = $('.modal');
const closeBtn = document.querySelector('.modal__close');
const humburgerMenu = document.querySelector('.humburger');
const menuLink = modalWindow.find('.menu__link');

humburgerMenu.addEventListener('click', e => {
  e.preventDefault();
  modalWindow.css({
    'display' : 'block'
  });
  body.style.overflow = "hidden";
});

closeBtn.addEventListener('click', e => {
  e.preventDefault();
  modalWindow.css({
    'display' : 'none'
  });
  // body.style.overflow = "scroll";
});



 menuLink.on('click', e => {
    e.preventDefault();
    modalWindow.css({
    'display' : 'none'
  });
 }) 
  
    
    
    


