$(function(){
    // 변수설정
    let $btn =$('#buttons1 button'),
        duration = 300,
        easing = 'easeinCric'


//1행

$btn.filter(':nth-Child(-n+4)')
.on('mouseover',function(){
        $(this).stop().animate({
            backgroundColor: '#ae5e9b',
            color: '#fff'
         },duration)
    })
    .on('mouseout',function(){
        $(this).stop().animate({
            backgroundColor: '#fff',
            color: '#ebc000'
    },duration)
});


//2행
$btn.filter(':nth-Child(n+5):nth-Child(-n+8)')
.on('mouseover',function(){
    $(this).stop().animate({ 
        borderWidth: '12px',
        color: '#ae5e9b'
    },duration)
})
.on('mouseout',function(){
    $(this).stop().animate({ 
        borderWidth: '0px',
        color: '#ebc000'
    },duration)
});

//3행

$btn.filter(':nth-Child(n+9)')
.on('mouseover',function(){
    // find는 자식요소에서 검색
    $(this).find('>span').stop().animate({
        width: '100%'
    },duration)
})
.on('mouseout', function(){
    $(this).find('>span').stop(true).animate({
        width: '0%'
    }, duration);
});


});