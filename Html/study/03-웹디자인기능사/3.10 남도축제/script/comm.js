$(function(){

    //#header 를 모두 선택해서
    $('#header').each(function(){

        let $window = $(window),
            $header = $(this),
            헤더의높이값 = $header.offset().top;

        // 윈도우의 스크롤 이벤트를 모니터링
        // 창이 스크롤 할 때마다 작업을 수행
        $(window).on('scroll', function(){
            // 윈도우의 스크롤 양을 확인하고
            // 헤더의 기본 위치를 지나가면 클래스 부여
            // 그렇지 않으면 삭제
            if( $(window).scrollTop() > 헤더의높이값 ){
                // 참일 때 실행문
                $header.addClass('sticky');
            } else {
                // 그 밖에 아무 조건에 해당하지 않을 경우..
                $header.removeClass('sticky');
            }
        });
    });

    //modal
    // .col1 를 찾아서
    $('.col1').each(function(){

        let $모달 = $('.modal-wrap'),
            $공지사항목록 = $('.col1 .cont li');

        // 공지사항의 2번째 글을 클릭했을 때
        $공지사항목록.eq(1).on('click', function(event){
            event.preventDefault();
            // .modal-wrap에 on 클래스 추가
            $모달.addClass('on');
        });

        // #modal의 button을 클릭했을 때
        $모달.find('button').on('click', function(){
            $모달.removeClass('on');
        });

    });

    // tab
    // .tab-wrap을 모두 찾아서...
    $('.tab-wrap').each(function(){
        // .tab-g > h3를 클릭했을 때
        $('.tab-g > h3').on('click', function(e){
            // link 해제
            e.preventDefault();
            // .tab-g에 붙어있는 모든 .on 지워주고
            $('.tab-g').removeClass('on');
            // 클릭한 .tab-g > h3의 부모 .tab-g에게 .on 추가
            $(this).parent().addClass('on');
        });
    });

    // slide
    // 변수 설정
    let now = 1, // 현재 이미지를 now 변수에 지정
        max = 3, // 이미지 갯수를 max 변수에 지정
        height = 100, // 이미지의 높이값을 height 변수에 지정
        슬라이드 = $('.slide ul');

    setInterval(function(){ // 주기적으로 실행 함수        

        if(now < 3){ // 현재 이미지가 첫번째, 두번째 이미지일 경우 (now = 1, 2)
            
            // .slide ul을 애니메이션 시켜
            슬라이드.animate({
                top : (now * height * (-1)) + 'vh'
            });
            now++; // now 변수에 1씩 더해 //now = now + 1;

        }else{ // 세번째 이미지일 경우
            슬라이드.animate({
                top : 0
            });
            now = 1; //now 변수에 1을 대입
        }


    },3000) // 3초마다 실행


});