const slider = $('.products__list').bxSlider({
  pager:false ,
  controls:false,
  touchEnabled:false
});


$('.arrow_left').on('click', e => {
  e.preventDefault();

  slider.goToPrevSlide();
});

$('.arrow_right').on('click', e => {
  e.preventDefault();

  slider.goToNextSlide();
});

