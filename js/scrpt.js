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
            arrows: false,
            dots: true,
            infinite: true,
            speed: 400,
            fade: true,
            cssEase: 'linear'
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


/* PICTURE ONCLICK */
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})
