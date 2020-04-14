$(function(){ 
    
   $('#typo')
   .on('mouseenter',function(){
    $(this).stop().animate({
        color: '#cea9e5', 
        backgroudColor: '#ae5e9b',
        fontSize: '50px'
    },1500, 'linear');
   
   })
   .on('mouseleave',function(){
    $(this).stop().animate({
        color: '', 
        backgroudColor: '',
        fontSize: ''
    },1500);
   });

   $('header').css('click',function(){
    $(this).css({color: 'red' });
});

});

