

$(document).ready(function () {
    $('.slider-item-rr').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: false,
        dotsClass: 'dots-style',
        autoplay: false,
        prevArrow: `<svg class="arrow-left1" xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
        <circle cx="29" cy="29" r="28.5" stroke="#BBBBBB"/>
        <path opacity="0.3" d="M31.191 21.8867L24.625 28.4528L31.191 35.0188" stroke="#484242" stroke-width="2"/>
        </svg>`,
        nextArrow: `<svg class="arrow-right1" xmlns="http://www.w3.org/2000/svg" width="118" height="118" viewBox="0 0 118 118" fill="none">
    <g filter="url(#filter0_d_114_8861)">
      <circle cx="29" cy="29" r="28.5" transform="matrix(-1 0 0 1 88 20)" stroke="#BBBBBB"/>
    </g>
    <path opacity="0.3" d="M56.809 41.8867L63.375 48.4528L56.809 55.0188" stroke="#484242" stroke-width="2"/>
  </svg>`,
        // centerMode: true,
        // variableWidth: true
        responsive: [{
            breakpoint: 769,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false,
               dots: true
            }
         }]
    });
});

$(document).ready(function () {
    $('.slider2-content').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        dotsClass: 'dots-style',
        autoplay: false,
        prevArrow: `<svg class="arrow-left1" xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
        <circle cx="29" cy="29" r="28.5" stroke="#BBBBBB"/>
        <path opacity="0.3" d="M31.191 21.8867L24.625 28.4528L31.191 35.0188" stroke="#484242" stroke-width="2"/>
        </svg>`,
        nextArrow: `<svg class="arrow-right1" xmlns="http://www.w3.org/2000/svg" width="118" height="118" viewBox="0 0 118 118" fill="none">
    <g filter="url(#filter0_d_114_8861)">
      <circle cx="29" cy="29" r="28.5" transform="matrix(-1 0 0 1 88 20)" stroke="#BBBBBB"/>
    </g>
    <path opacity="0.3" d="M56.809 41.8867L63.375 48.4528L56.809 55.0188" stroke="#484242" stroke-width="2"/>
  </svg>`,
        // centerMode: true,
        // variableWidth: true
        responsive: [{
            breakpoint: 769,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false,
               dots: true
            }
         }]
    });
});

$(document).ready(function () {
    $('.last-img-line1').slick({
        slidesToShow:4,
        slidesToScroll:1,
        arrows:false,
        dots:false,
        touchMove:false,
        pauseOnFocus:false,
        lazyLoad:'progressive',
        pauseOnHover:false,
        autoplay:true,
        autoplaySpeed:0,
        speed:5000,
        swipe:false,
        waitForAnimate:false,
        cssEase:'linear',
        variableWidth:true
    });
});

$(document).ready(function () {
    $('.last-img-line2').slick({
        // infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // arrows: false,
        // dots: false,
        // dotsClass: 'dots-style',
        autoplay: true,
        centerMode: true,
        // // variableWidth: true,
        // variableWidth: true,
        useTransform: true
    });
});