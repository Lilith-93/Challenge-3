$(document).ready(function(){

  $('a.back-to-top').click(function(){

    $('body').animate({
      scrollTop: 0
    }, 700);

    return false;

  });


  $('.slider-button-next').click(function(){

    // Prépare la prochaine images
    $('.is-hidden').addClass('right');

    // L'animation
    setTimeout(function(){
      $('.is-showing').addClass('left');
      $('.is-showing').removeClass('is-showing');
      $('.is-hidden').addClass('is-showing');
      $('.is-showing').removeClass('is-hidden right');
    }, 100);

    // Clear Classes
    setTimeout(function(){
      $('.left').addClass('is-hidden');
      $('.is-hidden').removeClass('left');
    }, 450);

  });



  $('.slider-button-prev').bind('click', function(){

    // Prépare la prochaine images
    $('.is-hidden').addClass('left');

    // L'animation
    setTimeout(function(){
      $('.is-showing').addClass('right');
      $('.is-showing').removeClass('is-showing');
      $('.is-hidden').addClass('is-showing');
      $('.is-showing').removeClass('is-hidden left');
    }, 100);

    // Clear Classes
    setTimeout(function(){
      $('.right').addClass('is-hidden');
      $('.is-hidden').removeClass('right');
    }, 450);

  });




});
