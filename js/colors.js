const button = $('.colors-list__link');

const returnPositionItem = (item) => {
  const items = item.closest('.colors-list').find('.colors-list__item');
  items.css({
    'position':'static',
    "z-index":"0",
    "left":"0"
  })
};

const measureWidth = (item) => {
  const screenWidth = $(window).width();
  const link = $('.colors-list__link')
  const titleWidth = link.width() * link.length;
  let contentWidth = '';
  const textContainer = item.find('.colors-list__text')
  const textPadding = textContainer.outerWidth(true) - textContainer.width();
  
  if(screenWidth - titleWidth >= 524) {
     contentWidth = 524; 
  } else if(window.matchMedia('(max-width: 480px)').matches) {
    contentWidth = screenWidth - link.width();
    const leftCoord = $(".colors-list")[0].offsetLeft;
    item.css({
      'position': "absolute",
      'top':0,
      'left': -leftCoord - link.width(),
      'bottom':0,
      'z-index':100,
     })
    

  } else {
    contentWidth = screenWidth - titleWidth; 
  }

  const obj = {
    container: contentWidth,
    textWidth: contentWidth - textPadding,
  }
  return obj;
};

const openItem = (item) => {
  const hiddenContent = item.find('.colors-list__content');
  const textContainer = item.find('.colors-list__text')
  const reqWidth = measureWidth(item);

  
  hiddenContent.width(reqWidth.container);
  textContainer.width(reqWidth.textWidth)
  item.addClass("active");
};

const closeEveryItem = (container) => {
  const content = container.find('.colors-list__content');
  const items = $('.colors-list__item');
  items.removeClass('active')
  content.width(0);

};

button.on('click', e => {
  e.preventDefault();
  const currentBtn = $(e.currentTarget);
  const item = currentBtn.closest('.colors-list__item');
  const container = item.closest('.colors-list');
  console.log(item)
  if(item.hasClass('active')) {
    closeEveryItem(container);
    returnPositionItem(item)
  } else {
    closeEveryItem(container);
    openItem(item);
  }
});
const list = $(".colors-list");
console.log(document.querySelector('.colors-list').offsetLeft)
console.log(list[0].offsetLeft)

