// const items = document.querySelectorAll('.reviews-switcher__item');


// items.forEach(item => {
//   item.addEventListener('click', function(e) {
//     e.preventDefault();

//     items.forEach(item => {
//       item.classList.remove('reviews-switcher__item_active');
//     })
//     const target = e.currentTarget;
//     target.classList.add('reviews-switcher__item_active');
   
//   })
// });

const findBlock = alias => {
  return $('.reviews__item').filter((ndx,item) => {
    return $(item).attr('data-linked') == alias;
  })
} ;

$('.reviews-switcher__link').on('click', function(event) {
  event.preventDefault();
  const currrentButton = $(event.currentTarget);
  const target = currrentButton.attr('data-open');
  const itemToShow = findBlock(target);
  
  const curItem = currrentButton.closest('.reviews-switcher__item');

  itemToShow.addClass('reviews__item_active').siblings().removeClass("reviews__item_active");
  curItem.addClass('reviews-switcher__item_active').siblings().removeClass('reviews-switcher__item_active');
  

});

