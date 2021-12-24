$(document).ready(function() {

  const openItem = item => {
    const container = item.closest('.team__item');
    const contentBlock = container.find('.team__content');
    contentBlock.height('360px');
    container.addClass('team__item_active');
  
    const triangle = item.find('.triangle');
    triangle.addClass('triangle_rotated')
  };
  
  const closeItem = list => {
    const items = list.find('.team__content');
    const itemsContainer = list.find('.team__item');
    const triangle = itemsContainer.find('.triangle');
  
  
    itemsContainer.removeClass('team__item_active');
    triangle.removeClass('triangle_rotated');
    items.height('0');
  
  
  
  };
  
  $('.team__name').on('click', e => {
    const currrentButton = $(e.currentTarget)
    const list = currrentButton.closest('.team__list');
    const active = currrentButton.closest('.team__item');
    const triangle = currrentButton.find('.triangle');
    
    if (active.hasClass('team__item_active')) {
      active.removeClass('team__item_active');
      triangle.removeClass('triangle_rotated');
  
      closeItem(list);
  
      
    } else {
      closeItem(list);
      openItem(currrentButton);
      
    }
  
  
  });
});

