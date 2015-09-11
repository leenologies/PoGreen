$(document).ready(function(){
   $('.view--head').addClass("view transitionHd");
   $('.view--subhead').addClass("view transitionSub");
   $('.view--arrow').addClass("view transitionArr");



$(window).scroll(function(){
  var pageScroll = $(this).scrollTop();
   if(pageScroll==440){
     $('.survey--head').addClass("survey trans");
     $('.survey--subhead').addClass("survey trans2");

   }
});


//FOOD SLIDING ACCROSS PAGE
$('.slider img:gt(0)').hide();
  setInterval(function(){
    $('.slider :first-child').fadeOut()
       .next('img').fadeIn()
       .end().appendTo('.slider');},
    10000);


//MENU BOUNCING LINK FOR ARROW ON LANDING PAGE
setInterval(function() { $(".view--arrow").effect( "bounce", {times:5}, 1000 );}, 10000);

//MENU BOUNCING MENU LINKS  PAGE
setInterval(function() { $(".menu--head1").effect( "bounce", {times:5}, 1000 );}, 5000);
setInterval(function() { $(".menu--head2").effect( "bounce", {times:5}, 1000 );}, 5000);
setInterval(function() { $(".menu--head3").effect( "bounce", {times:5}, 1000 );}, 5000);
setInterval(function() { $(".menu--head4").effect( "bounce", {times:5}, 1000 );}, 5000);
//END OF MENU BOUNCING MENU LINKS  PAGE



});











/*
$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
   $('.logo').css({
     'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });

    $('.back-bird').css({
      'transform' : 'translate(0px, '+ wScroll /3 +'%)'
     });
     $('.fore-bird').css({
       'transform' : 'translate(0px, -'+ wScroll /50 +'%)'
      });

});*/
