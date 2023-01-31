$('.slides-container').slick({
   slidesToShow: 5,
   slidesToScroll: 2,
   autoplay: true,
   autoplaySpeed: 1500,
   draggable: true,
   infinite: true,
   mobileFirst: true,
   swipe: true,
   swipeToSlide: true,
   dots: true,
   centerMode: true,
   variableWidth: false,
});

$(document).ready(function () {
   $('button[data-categoría="todos"]').addClass('active');
});

$('.js-filter').on('click', function () {
   var categoría = $(this).data('categoría');
   $('.js-filter').removeClass('active');
   $(this).addClass('active');

   if (categoría === 'todos') {
      $('.slides-container').slick('slickUnfilter');
   } else {
      $('.slides-container').slick('slickUnfilter');
      $('.slides-container').slick('slickFilter', '.' + categoría);
   }
});

$('.slides-container').on('wheel', (function (e) {
   e.preventDefault();
   if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickPrev');
   } else {
      $(this).slick('slickNext');
   }
}));