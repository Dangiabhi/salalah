var hamburger = document.querySelector('#checkbox');
var nav = document.querySelector('.nav-box');

hamburger.addEventListener('click',showMenu);

function showMenu(e){
    if(nav.classList.contains('active')){
        nav.classList.remove('active')
    }else{
        nav.classList.add('active');
    }
};

$(document).ready(function() {

$('.brands-slider').slick({
    dots: false,
    infinite: false,
    arrows:false,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 7,
   
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode:true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode:false,
        }
      }
     
    ]
  });

});
$('.banner-slider').slick({
    dots:true,
    arrows:true,
    autoplay:true,
    speed:300,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='assets/images/icon/left.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='assets/images/icon/right.svg'>",
});

$('.store-slider').slick({
    rows: 2,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='assets/images/icon/left-black.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='assets/images/icon/right-black.svg'>",
})

$('.dining-slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='assets/images/icon/left.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='assets/images/icon/right.svg'>",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
     
    ]
})