

$(document).ready(function() {
  // carousel init...
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
    interval: 5000,
  });


  autoplay();

  function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 5000);
  };

});


$(document).ready(function() {
  // // dropdown init...
  $('.dropdown-trigger').dropdown({
  hover: false, // Activate on hover
  gutter: 10, // Spacing from edge
  belowOrigin: false, // Displays dropdown below the button
  coverTrigger: true,
  belowOrigin: true,
  alignment: 'right',
  closeOnClick: false,
  });

});




/* lightslider  */
$(document).ready(function() {
  $('#imageGallery').lightSlider({
      gallery:true,
      item:1,
      loop:true,
      control: true,
      enableSwipe: true,
      thumbItem:9,
      slideMargin:0,
      enableDrag: true,
      nextHtml: '',
      prevHtml: '',
      currentPagerPosition:'left',
      onSliderLoad: function(el) {
          el.lightGallery({
              selector: '#imageGallery .lslide'
          });
      }
  });
});
/* lightslider end */


// quantity dropdown
$(document).ready(function() {
  $('select').formSelect();
});
// quantity dropdown end

// des-spec-rev tab
$(document).ready(function() {
  $('.tabs').tabs();
});
// des-spec-rev tab end




// search-box
$(document).ready(function() {
  // // dropdown init...
  $('.dropdown-trigger.search').dropdown({
  hover: false, // Activate on hover
  gutter: 10, // Spacing from edge
  belowOrigin: true, // Displays dropdown below the button
  // coverTrigger: true,
  belowOrigin: true,
  alignment: 'right',
  // coverTrigger: true,
  closeOnClick: false,

  });

});


// $(document).ready(function(){
//    $('input.autocomplete').autocomplete({
//      data: {
//        "Apple": null,
//        "Microsoft": null,
//        "Google": 'https://placehold.it/250x250'
//      },
//    });
//  });

 // $('.dropdown-content').on('click', function(event) {
 //   event.preventDefault();
 // });
// search-box end
// cart-dropdown
// $(document).ready(function() {
//
//   $(".dropdown-trigger").dropdown({
//
//
//       inDuration: 500,
//       outDuration: 400,
//       // container: null,
//       // constrain_width: true, // Does not change width of dropdown to that of the activator
//       hover: true, // Activate on hover
//       gutter: 10, // Spacing from edge
//       belowOrigin: true, // Displays dropdown below the button
//       // alignment: 'left', // Displays dropdown with edge aligned to the left of button
//       coverTrigger: true,
//       belowOrigin: true,
//
//   });
//
// });
