$(function () {

  $('page-header').each(function(){
    
    let $window = $(window),
          $header = $(this);

          $window.on('scroll',function(){
              
            console.log(`윈도우의 스크롤 값 :  ${$window.scrollTop()}`)
            console.log(`헤더의 위치값 : ${$header.offset().top}`)

            // 만약 윈도우의 스크롤 값이 헤더의 위치갑보다 커지면
        })
        
            if($window.scrollTop() > $header.offset().top) {
                 // .sticky 붙여준다.
                 $header.addclass('sticky')
            }else{
                // 그 밖의 경우
                // header에 .sticky 뺴준다.
                $header.removeclass('sticky')
            }
            
            //윈도우의 스크롤 이벤트를 발생시키는
            // (헤더의 초기 위치를 조정)
            $window.trigger('scroll');
            })

 

});