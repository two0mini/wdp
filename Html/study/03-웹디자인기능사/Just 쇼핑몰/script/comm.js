$(function(){
    //nav
    let $nav = $('nav'); //nav 변수 선언

    // nav 태그에 포커스인, 마우스 오버 됐을 때
    $nav.on('focusin mouseenter', function(){
        // nav 태그에 .active 추가
        $(this).addClass('active');
    });
    //nav 태그에 포커스아웃, 마우스가 떠났을 때
    $nav.on('focusout mouseleave', function(){
        // nav 태그에 .active 삭제
        $(this).removeClass('active');
    })

    //slide
    let now = 1; // 현재 보여지는 이미지를 now 변수에 지정
    let max = 3; // 이미지의 개수를 max 변수에 지정
    let width = 100; // 이미지 가로사이즈 width 변수에 지정    
    // 3초 마다 명령 실행
    setInterval(function(){    
        if(now<3){
            // '.slide ul'의 'left: -100%' 애니메이션 시켜...
            $('.slide ul').animate({
                left : (now*width*(-1)) + '%'
            });
            now++; // now = now + 1
        }else{
            $('.slide ul').animate({
                left : '0'
            });
            now=1;
        }
    },3000);

    //modal
    // 공지사항 첫번째 글을 클릭했을 때
    $('.tab-bbs .cont li:first-child').on('click', function(){
        // 모달창에 on 클래스를 붙여 보여준다.
        $('.modal-wrap').addClass('on');
    });

    // 모달창에 닫기 버튼을 클릭했을 때
    $('#modal button').on('click', function(){
        $('.modal-wrap').removeClass('on');
    });

    //tab
    // 탭을 클릭했을 때
    $('.tab-g h2').on('click', function(event){
        //a링크 무효화
        event.preventDefault();
        // 모든 탭의 .on 지운다
        $('.tab-g').removeClass('on');
        // 클릭한 탭에 .on 추가한다.
        $(this).parent().addClass('on');
    })
    

    //갤러리 탭을 클릭했을 때
    // $('.tab-gal h2').on('click', function(){
    //     //.tab-gallery에 .on를 추가한다.
    //     $('.tab-gal').addClass('on');
    //     //.tab-bbs에 있는 .on은 삭제한다.
    //     $('.tab-bbs').removeClass('on');
    // });

    // //공지사항 탭을 클릭했을 때
    // $('.tab-bbs h2').on('click', function(){
    //     //.tab-bbs에 .on를 추가한다.
    //     $('.tab-bbs').addClass('on');
    //     //.tab-gal에 있는 .on은 삭제한다.
    //     $('.tab-gal').removeClass('on');
    // });
})