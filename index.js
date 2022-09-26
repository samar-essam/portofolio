


$(document).ready(function(){
    var typed = new Typed('.element', {
        // Waits 1000ms after typing "First"
        strings: ['Freelancer ^1000 ' , 'Web designer' , 'photograper' ],
        typeSpeed:100,
        backSpeed:100,
        loop:true,
        loopCount:Infinity,
      });
      

})
$(document).ready(function(){
  $(".loading .loader").fadeOut(2000 , ()=>{
      $(".loading .loader").parent().fadeOut(2000,()=>{
          $(".loading").remove();
          $("body").css("overflow-y" , "auto")
      })
  });
})


$(".mobile-nav-toggle ").click(function () {
  let headerWidth = $("#header").outerWidth();

  if ($("#header").css("left") == "0px") {
    $("#header").animate({ left: `-${headerWidth}` }, 1000);
    $("#footer").css({ position: `static` , width: `auto`});
    $("#main").css("marginLeft" , "0");
    $(".fa-align-justify").toggleClass("fa-times");
    $("body").css("overflow-y" , "auto")
   
  }
   else {
    $("#header").animate({ left: `0` }, 1000);
    $(".fa-align-justify").toggleClass("fa-times");
    $("body").css("overflow-y" , "hidden")
  
  }
});


let aboutOffset = $("#about").offset().top;
$(window).scroll(function(){
    let wscroll = $(window).scrollTop();

    if(wscroll>aboutOffset-50){
        $(".back-to-top").fadeIn(500);
    }
    else{
        $(".back-to-top").fadeOut(500);
    }
});


// hover header

var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });





var mixer = mixitup('.port');


$('.counter').counterUp({
  delay: 10,
  time: 2000
});
