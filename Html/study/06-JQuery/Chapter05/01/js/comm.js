$(function () {

    // slideshow를 가진 요소마다 작업을 수행
    $('.slideshow').each(function(){
        let $slide = $(this).find('img'), // 모든슬라이드
            슬라이드개수 = $slide. length, // 슬라이드개수
            현재슬라이드 = 0; // 현재 슬라이드를 나타내는 인덱스

           // 처음 슬라이드 보이기
             function 슬라이드이동() {
                
                // 다음슬라이드를 표시할 인덱스
                // %(나머지) =  마지막 슬라이드라면 처음으로 보내기
                let 다음슬라이드 = (현재슬라이드 + 1)%슬라이드개수
                //현재 슬라이드 없애기
                $slide.eq(현재슬라이드),fadeOut();
                //다음 슬라이드 보이기
                $slide.eq(다음슬라이드),fadeIn();
                
                // 다음 슬라이드 인덱스를 현재 슬라이드에  대입
                현재슬라이드 = 다음슬라이드;
          }

          setInterval (슬라이드이동, 5000)
          
    })


});