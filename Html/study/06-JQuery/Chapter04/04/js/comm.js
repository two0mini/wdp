$(function(){
    // 
    let $nav = $('.page-main>aside'),
        $navBtn = $nav.find('button');

    // open을 클릭했을때
    $navBtn.on('click', function(){
        // aisde에 open을 추가
            $nav.toggleClass('open');

            // 만약 aisde에  .open을 가지고 있다면
            if($nav.hasClass('open')){
                // 참(가지고 있다면)
                $nav.stop().animate({left: '-70px'});
                // attr 속성변경
                $navBtn.find('img').attr('src', 'img/btn_close.png');
            }else{
                // 거짓 (가지고 있지 않다면)
                $nav.stop().animate({left: '-350px'});
                $navBtn.find('img').attr('src', 'img/btn_open.png');
            };
        });

});