const sections = $('section');
const display = $('.wrapper__content');
let inScroll = false;

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile()

sections.first().addClass('active');



const performTransition = (sectionNum) =>  {
   
  if(inScroll == false) {
    inScroll = true;
    const sideMenu = $('.fixed-menu')
    const currentSection = sections.eq(sectionNum);
    const menuTheme = currentSection.attr('data-menu-theme')
    const position = sectionNum * -100;

    if(menuTheme == 'modified') {
      sideMenu.addClass('fixed-menu_modified')
    } else {
      sideMenu.removeClass('fixed-menu_modified')
    }
   
    display.css (
     'transform',`translateY(${position}%)`
    )

    sections.eq(sectionNum).addClass('active').siblings().removeClass('active');

    sideMenu.find('.fixed-menu__item').eq(sectionNum).addClass('fixed-menu__item_active').siblings().removeClass('fixed-menu__item_active')

    setTimeout(() => {
      inScroll = false;
    }, 1100);
  }

}

const scrollViewport = (direction) => {
  const activeSection = sections.filter('.active');
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction == 'next' && nextSection.length>0) {
    performTransition(nextSection.index())

  }
  if (direction == 'prev' && prevSection.length>0) {
    performTransition(prevSection.index())

  }
  
}

$(window).on('wheel', e => {
  const deltaY = e.originalEvent.deltaY;
  console.log(deltaY);

  if(deltaY > 0) {
    scrollViewport('next')
    
  } else {
    scrollViewport('prev')
  }
});

$(window).on('keydown', e => {
  console.log(e.keyCode);

  const tagName = e.target.tagName.toLowerCase();

  if (tagName !== "input" && tagName !== "textarea") {

    if (e.keyCode == 40) {
      scrollViewport('next')
    }
  
    if (e.keyCode == 38) {
      scrollViewport('prev')
    }
  }
  
} )

$('[data-scroll-to]').on('click', e=> {
  e.preventDefault();

  const currentLink = $(e.currentTarget);
  const target = currentLink.attr('data-scroll-to');

  const reqSection = $(`[data-section-id=${target}]`);
  performTransition(reqSection.index());
  
  
})

$('.wrapper').on("touchmove", e => {
  e.preventDefault();
})


if(isMobile) {
  //https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
  $("body").swipe( {
    //Generic swipe handler for all directions
    swipe:function(event, direction) {
       let scrollDirection = '';
      if(direction == "down") {
        scrollDirection = 'prev'
        scrollViewport(scrollDirection);
      }
  
      if(direction == "up") {
        scrollDirection = 'next'
        scrollViewport(scrollDirection);
      }
      
    }
  });
  
}






