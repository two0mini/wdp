$(function(){

let $btn = $('#buttons2 button'); 

$btn.each(function(index){
   let pos = Math.random()*100-40;
    //let pos = index*40-40;
    $(this).css('top', pos);
})
.on('mouseover',function(){
    $(this).stop().animate({
        backgroundColor : '#faee00',
        color : '#000'
    });
    $(this).find('img:fisrt-child').stop().animate({opacity:0});
    $(this).find('img:nth-child(2)').stop().animate({opacity:1});
})
.on('mouseout',function(){
    $(this).stop().animate({
        backgroundColor : '#fff',
        color : '#01b169'
    });
    $(this).find('img:fisrt-child').stop().animate({opacity:1});
    $(this).find('img:nth-child(2)').stop().animate({opacity:0});
});

});