/* MOUSE FOLLOW */
$(document).mousemove(function(e) {
    $('.pointer').css(
        {
            left:e.pageX,
            top:e.pageY
        }
    );
})


/* SLIDER */
$(document).ready(function() {
    $('.slider').slick(
        {
            arrows: true,
            dots: true,
        }
    );
});

// $(document).ready(function() {
// $('.slider').slick(
//     {
//         arrows: true,
//         dots: true
//         // slidesToShow: 3,
//         // centerMode: true,
//         // centerPadding: "0px",
//         // speed: 500
//     }
//   );
// });

/* VIDEO */
$(function(){
    var $refreshButton = $('#refresh');
    var $results = $('#css_result');
    
    function refresh(){
      var css = $('style.cp-pen-styles').text();
      $results.html(css);
    }
  
    refresh();
    $refreshButton.click(refresh);
    
    // Select all the contents when clicked
    $results.click(function(){
      $(this).select();
    });
  });

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  });

  /* UP */


$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $('#toTop').fadeIn();
  } else {
      $('#toTop').fadeOut();
    }
  });
  $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
    });
});
