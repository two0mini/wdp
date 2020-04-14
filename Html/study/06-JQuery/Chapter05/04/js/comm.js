$(function(){

    $('.page-header').each(function(){

        let $window = $(window),
            $header = $(this);

        // body 요소에 div 요소를 마지막 자식요소로 삽입
        $('body').append('<div class="page-header-clone"></div>')

        // header의 컨텐츠를 복제
        let 헤더복제컨텐츠 = $header.contents().clone(),
            헤더복제 = $('.page-header-clone')


        // page-header-clone 요소에 헤더복제컨텐츠를 삽입
        $('.page-header-clone').append(헤더복제컨텐츠)

        // 윈도우를 스크롤 했을 때
        $window.on('scroll', function(){
            let 윈도우스크롤값 = $window.scrollTop(),
                위쪽에서헤더저변까지의거리 = $header.offset().top + $header.outerHeight();

            console.log(`윈도우의 스크롤 값 : ${윈도우스크롤값}`);
            console.log(`위쪽에서 헤더 저변까지의 거리 : ${위쪽에서헤더저변까지의거리}`)

            // 만약 윈도우의 스크롤 값이 위쪽에서 헤더 저변까지의 거리보다 크다면
            // header에 .visible 삽입
            if(윈도우스크롤값 > 위쪽에서헤더저변까지의거리){
                헤더복제.addClass('visible');
            }else{
                헤더복제.removeClass('visible');
            }

        });

        // 스크롤 이벤트를 발생시켜 초기 위치를 결정
        $window.trigger('scroll');
    })
})