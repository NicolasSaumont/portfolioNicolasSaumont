jQuery(document).ready(function () {

/*Toggle menu*/

  let toggle = document.querySelector('.toggle');
  let body = document.querySelector('body');
  let navbar = document.querySelector('.navbar-nav');

  toggle.addEventListener('click', function(){
    body.classList.toggle('toggle_menu_on');
  })

  navbar.addEventListener('click', function(){
    body.classList.toggle('toggle_menu_on');
  })

/*MENU -- PROJECTS ----- CURRENTLY WORKIN ON THIS PART -----*/

  // $('.project-item').click(function (e) {
  //   var id = $(this).attr('class');
  //   var id = id.substring(27);

  //   $('.project-item').removeClass('active');
  //   $(this).addClass('active');

  //   $('.main .col').removeClass('active');
  //   $('.project--' + id).addClass('active');

  //   $('.images.desktop .row').removeClass('active');
  //   $('.images--' + id).addClass('active');

  // })

    $('.project-item').click(function (e) {
    var id = $(this).attr('class');
    var id = id.substring(27);

    $('.project-item').removeClass('active');
    $(this).addClass('active');

    $('.main .col').removeClass('active');
    $('.project--' + id).addClass('active');

    $('.images.desktop .row').removeClass('active');
    $('.images--' + id).addClass('active');

  })

  // $('.project-item').click(function (e) {
  //   var id = $(this).attr('class');
  //   var id = id.substring(27);

  //   alert('etape1)');

  //   $('.project-item').removeClass('active');
  //   $(this).addClass('active');

  //   $('.main .col').removeClass('active');
  //   $('.project--' + id).addClass('active');

  //   $('.images.desktop .row').removeClass('active');
  //   $('.images--' + id).addClass('active');

  //   if ($('.images--' + id).classList.contains('hidden')) {
  //     $('.images--' + id).classList.remove('hidden');
  //     setTimeout(function () {
  //       $('.images--' + id).classList.remove('visuallyhidden');
  //     }, 20);
  //   } else {
  //     $('.images--' + id).classList.add('visuallyhidden');
  //     $('.images--' + id).addEventListener('transitionend', function(e) {
  //       $('.images--' + id).classList.add('hidden');
  //     }, {
  //       capture: false,
  //       once: true,
  //       passive: false
  //     });
  //   }

  // }, false)



/*MENU -- HOME*/

  $('.logo').click(function (e) {

    $('.project-item').removeClass('active');
    $('.images.desktop .row').removeClass('active');

    $('.main .col').removeClass('active');
    $('.home').addClass('active');
  })

});
