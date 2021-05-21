$(function(){



$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling >200){
    $('.navbar').addClass('bg');
    }
    else{
    $('.navbar').removeClass('bg');
    }

    });


    var containerEl = document.querySelector('.rim');

    var mixer = mixitup(containerEl);


    $(document).ready(function(){
        $('.venobox').venobox(); 
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    
$('.slide_text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
        speed:1500,
  });
// icon slider 
//   $('.slide_rim').slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: false,
//         speed:1500,
//   });


  $('.s_rim').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed:1500,


    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
      
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
      
       
       
      ]
  });


});