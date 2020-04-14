$(function () {

  //gnb
  var $navDepth1 = $('.gnb nav');

  //초기화
  $navDepth1.removeClass('active');

  $navDepth1.on('focusin mouseenter',function(){
    $(this).addClass('active');
  });
  $navDepth1.on('focusout mouseleave',function(){
    $(this).removeClass('active');
  });


  //control
  var $play = $('.fban_ctrl > .play'),
      $stop = $('.fban_ctrl > .stop'),
      $prev = $('.fban_ctrl > .prev'),
      $next = $('.fban_ctrl > .next');

  $play.hide();
  $stop.on('click', function() {
    $(this).next('.play').show();
    $(this).hide();
    $(this).parent('.fban_ctrl').siblings('.slick_g').slick('slickPause');
  });

  $play.on('click', function() {
    $(this).prev('.stop').show();
    $(this).hide();
    $(this).parent('.fban_ctrl').siblings('.slick_g').slick('slickPlay');
  });
  $prev.on('click', function() {
    $(this).parent('.fban_ctrl').siblings('.slick_g').slick('slickPrev');
  });

  $next.on('click', function() {
    $(this).parent('.fban_ctrl').siblings('.slick_g').slick('slickNext');
  });

  //slick-popup
  $('.slick_popupzon').slick({
    speed: 500,
    autoplay:true,
  });

  //관련사이트
  $('.fban_slide').slick({
    autoplay: true,
    dots: false,
    pauseOnDotsHover: false,
    pauseOnHover: false,
    arrows: false,
    autoplaySpeed: 5000,
    fade: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    cssEase: 'linear',
    // responsive: [{
    //     breakpoint: 1001,
    //     settings: {
    //       slidesToShow: 4
    //     }
    //   },
    //   {
    //     breakpoint: 1000,
    //     settings: {
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 680,
    //     settings: {
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 2
    //     }
    //   },
    // ]
  });

  //Login
  $(function($){
  	var loginWindow = $('.mw_login');
  	var login = $('#login');
  	var uid = $('.i_text.uid');
  	var upw = $('.i_text.upw');
  	var oid = $('.i_text.oid');

  	// Show Hide
  	$('.login_trigger').click(function(){
  		loginWindow.addClass('open');
  	});
  	$('#login .close').click(function(){
  		loginWindow.removeClass('open');
  	});
  	// o_login
  	$('.o_anchor').click(function(){
  		login.removeClass('g_login');
  		login.addClass('o_login');
  	});
  	// g_login
  	$('.g_anchor').click(function(){
  		login.removeClass('o_login');
  		login.addClass('g_login');
  	});
  	// Warning
  	$('#keepid').change(function(){
  		if($('#keepid[checked]')){
  			$('.warning').toggleClass('open');
  		};
  	});
  	// Input Clear
  	var i_text = $('.item>.i_label').next('.i_text');
  	$('.item>.i_label').css('position','absolute');
  	i_text
  		.focus(function(){
  			$(this).prev('.i_label').css('visibility','hidden');
  		})
  		.blur(function(){
  			if($(this).val() == ''){
  				$(this).prev('.i_label').css('visibility','visible');
  			} else {
  				$(this).prev('.i_label').css('visibility','hidden');
  			}
  		})
  		.change(function(){
  			if($(this).val() == ''){
  				$(this).prev('.i_label').css('visibility','visible');
  			} else {
  				$(this).prev('.i_label').css('visibility','hidden');
  			}
  		})
  		.blur();
  	// Validation
  	$('#login>.g_login input[type=submit]').click(function(){
  		if(uid.val() == '' && upw.val() == ''){
  			alert('ID와 PASSWORD를 입력하세요!');
  			return false;
  		}
  		else if(uid.val() == ''){
  			alert('ID를 입력하세요!');
  			return false;
  		}
  		else if(upw.val() == ''){
  			alert('PASSWORD를 입력하세요!');
  			return false;
  		}
  	});
  	$('#login>.o_login input[type=submit]').click(function(){
  		if(oid.val() == ''){
  			alert('Open ID를 입력하세요!');
  			return false;
  		}
  	});
  	// ESC Event
  	$(document).keydown(function(event){
  		if(event.keyCode != 27) return true;
  		if (loginWindow.hasClass('open')) {
  			loginWindow.removeClass('open');
  		}
  		return false;
  	});
  	// Hide Window
  	loginWindow.find('>.bg').mousedown(function(event){
  		loginWindow.removeClass('open');
  		return false;
  	});
  });

  //scrollUp
  $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '100', // Distance from top before showing element (px)
      scrollDistance: 30,
      topSpeed: 500, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: 'TOP', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

  $('#scrollUp').each(function () {
      var $window = $(window), // 창을 jQuery 오브젝트 화
          $document = $(document),
          $scrollUp = $(this),   // 헤더를 jQuery 객체 화
          // 헤더의 기본 위치를 검색
          bodyOffset = $('body').offset().top;

      // 윈도우의 스크롤 이벤트를 모니터링
      // (창이 스크롤 할 때마다 작업을 수행하기)
      $window.on('scroll', function () {
        var scrollHeight = $document.height();
        var scrollPosition = $window.height() + $window.scrollTop();
        if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
              $scrollUp.addClass('sticky');
          } else {
              $scrollUp.removeClass('sticky');
          }
      });

      // 윈도우의 스크롤 이벤트를 발생시키는
      // (헤더의 초기 위치를 조정하기 위해)
      $window.trigger('scroll');
  });

    //includeHTML
    includeHTML();

    // tab
    function openCity(cityName) {
      var i;
      var x = document.getElementsByClassName("city");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      document.getElementById(cityName).style.display = "block";
    }

});
