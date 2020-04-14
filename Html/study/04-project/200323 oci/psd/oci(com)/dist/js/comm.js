
    $(document).ready(function(){    

      //nav
      // open

      $('.nav-bar').on('click',function(){
        $('.nav-wrap').animate({
          left:'0'
        });
         $('.nav-bg').fadeIn(500);
      });
      

      // close
       $('.nav-close').on('click',function(){
        $('.nav-wrap').animate({
          left:'-75%'
        }); 
         $('.nav:-bg').fadeOut(500);
      });
     
     // depth2 열고 닫기
  $('.nav-depth1 > li').on('click',function(event){
    event.preventDefault();
    $('.nav-depth2').hide();
    $(this).children('.nav-depth2').slideToggle("slow");
  })

          // slide 설정
     $('.slide-main').slick({
      infinite:true,
      dots:true,
        arrow:true,
        autoplay: true,
  autoplaySpeed: 2000,    
    });
 
});

    