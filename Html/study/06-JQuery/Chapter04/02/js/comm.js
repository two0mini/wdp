$(function(){
    
    // 변수설정
    let $imgs = $('#images p'),
        duration = 300;

    //첫번째 이미지
    $imgs.filter(':first-child')
    .on('mouseover',function(){
        $(this).find('strong,span').stop().animate({
            opacity: 1
        },duration);
    })
    $imgs.filter(':first-child')
    .on('mouseout',function(){
        $(this).find('strong,span').stop().animate({
            opacity: 0
        },duration);
    });

    //두번째 이미지
    $imgs.filter(':nth-child(2)')
    .on('mouseover',function(){
        $(this).find('strong').stop().animate({
            opacity: 1,  left : 0
        },duration);
        $(this).find('span').stop().animate({           
            opacity: 1
        },duration);
    })
     .on('mouseout',function(){
        $(this).find('stong').stop().animate({           
            opacity: 0,  left: '-200%'
        },duration);
        $(this).find('span').stop().animate({           
            opacity: 0
        },duration);
    });

    // 세번째 이미지

    $imgs.filter(':nth-child(3)')
    .on('mouseover',function(){
        $(this).find('stong').stop().animate({           
            bottom: '0px'            
        },duration);
        $(this).find('span').stop().animate({           
            opacity: 1
        },duration);
        $(this).find('img').stop(true).animate({
            top: '-20px'
         },duration);
    })
    .on('mouseout', function(){
     $(this).find('strong').stop(true).animate({
            bottom: '-80px'
        },duration);
        $(this).find('span').stop(true).animate({
            opacity: 0
        },duration);
        $(this).find('img').stop(true).animate({
            top: '0px'
        },duration*1.3);
    });

});