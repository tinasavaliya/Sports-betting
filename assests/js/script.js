$(document).ready(function() {
  $(".navbar-toggler .navbar-toggler-icon").on("click", function () {
    $(".navbar-toggler .navbar-toggler-icon").toggleClass("close");
  });
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".header-bottom").addClass("active");
      $(".header-top").addClass("open");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $(".header-bottom").removeClass("active");
      $(".header-top").removeClass("open");
    }
  });
  $(".slider-main").slick({
    slidesToShow:5,
    slidesToScroll:2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:true,
    prevArrow:
      '<div class="prev-property"> <svg xmlns="http://www.w3.org/2000/svg" height="42px" width="22px" fill="#fff" viewBox="0 0 384 512"><path d="M380.6 81.7c7.9 15.8 1.5 35-14.3 42.9L103.6 256 366.3 387.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-320-160C6.8 279.2 0 268.1 0 256s6.8-23.2 17.7-28.6l320-160c15.8-7.9 35-1.5 42.9 14.3z"/></svg></div>',
    nextArrow:
      '<div class="next-property"><svg xmlns="http://www.w3.org/2000/svg" height="42px" width="22px" fill="#fff" viewBox="0 0 384 512"><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z"/></svg></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".leatest-main").slick({
    slidesToShow:3,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed:10000000,
    arrows:true,
    prevArrow:
      '<div class="prev"> <svg xmlns="http://www.w3.org/2000/svg" height="15px" width="10px" fill="#000" viewBox="0 0 384 512"><path d="M380.6 81.7c7.9 15.8 1.5 35-14.3 42.9L103.6 256 366.3 387.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-320-160C6.8 279.2 0 268.1 0 256s6.8-23.2 17.7-28.6l320-160c15.8-7.9 35-1.5 42.9 14.3z"/></svg></div>',
    nextArrow:
      '<div class="next"><svg xmlns="http://www.w3.org/2000/svg" height="15px" width="10px" fill="#000" viewBox="0 0 384 512"><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z"/></svg></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $('.mlb-leatest-video a').fancybox({
  });
  var $grid = $('.grid').isotope({
    itemSelector: '.france-condo',
  layoutMode: 'fitRows'
  });
  // filter items on button click
  $('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    
  });

  $(".filter-button-group li button").on("click", function () {
    $(".filter-button-group li button").removeClass("active");
    $(this).addClass("active");
  });
  $('.mlb-leatest-video a').fancybox({
  });
 // Number of initially visible tyreek-under elements
 var visibleCount = 4;

 // Hide the remaining tyreek-under elements
 $('.tyreek-under-load-more').slice(visibleCount).hide();

 // Click event for the "Load More" button
 $('#load-more-btn').click(function () {
   // Show the hidden tyreek-under elements
   $('.tyreek-under-load-more:hidden').slice(0, 2).slideDown();

   // Check if there are more hidden elements
   if ($('.tyreek-under-load-more:hidden').length === 0) {
     // If no more hidden elements, hide the "Load More" button
     $('#load-more-btn').hide();
   }
 });
 // Number of initially visible tyreek-under elements
 var visiblCount = 6;

 // Hide the remaining tyreek-under elements
 $('.dolor-tab').slice(visiblCount).hide();

 // Click event for the "Load More" button
 $('#load-more').click(function () {
   // Show the hidden tyreek-under elements
   $('.dolor-tab:hidden').slice(0, 2).slideDown();

   // Check if there are more hidden elements
   if ($('.dolor-tab:hidden').length === 0) {
     // If no more hidden elements, hide the "Load More" button
     $('#load-more').hide();
   }
 });
 // Number of initially visible tyreek-under elements
 var vissibleCount = 9;

 // Hide the remaining tyreek-under elements
 $('.guldess').slice(vissibleCount).hide();

 // Click event for the "Load More" button
 $('#view-more').click(function () {
   // Show the hidden tyreek-under elements
   $('.guldess:hidden').slice(0, 2).slideDown();

   // Check if there are more hidden elements
   if ($('.guldess:hidden').length === 0) {
     // If no more hidden elements, hide the "Load More" button
     $('#view-more').hide();
   }
 });
 // Number of initially visible tyreek-under elements
 var vessibleCount = 5;

 // Hide the remaining tyreek-under elements
 $('.right-product').slice(vessibleCount).hide();

 // Click event for the "Load More" button
 $('#view-more2').click(function () {
   // Show the hidden tyreek-under elements
   $('.right-product:hidden').slice(0, 2).slideDown();

   // Check if there are more hidden elements
   if ($('.right-product:hidden').length === 0) {
     // If no more hidden elements, hide the "Load More" button
     $('#view-more2').hide();
   }
 });
});
