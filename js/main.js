$(document).ready(function(){
   $('.view--head').addClass("view transitionHd");
   $('.view--subhead').addClass("view transitionSub");
   $('.view--arrow').addClass("view transitionArr");


var mis = $('.survey--head');
mis.waypoint(function(direction){
  console.log(direction);
  if(direction == 'down'){
  mis.addClass('trans');
}else{
  mis.removeClass('trans');

}
},{offset:'90%'});


//FOOD SLIDING ACCROSS PAGE
$('.slider img:gt(0)').hide();
  setInterval(function(){
    $('.slider :first-child').fadeOut()
       .next('img').fadeIn()
       .end().appendTo('.slider');},
    10000);


//MENU BOUNCING LINK FOR ARROW ON LANDING PAGE
setInterval(function() { $(".view--arrow").effect( "bounce", {times:5}, 1000 );}, 10000);
$("#nav1").localScroll();
$("#nav2").localScroll();
//MENU BOUNCING MENU LINKS  PAGE
setInterval(function() { $(".menu--head1").effect( "bounce", {times:5}, 1000 );}, 5000);
setInterval(function() { $(".menu--head2").effect( "bounce", {times:5}, 1000 );}, 5000);
setInterval(function() { $(".menu--head3").effect( "bounce", {times:5}, 1000 );}, 5000);
setInterval(function() { $(".menu--head4").effect( "bounce", {times:5}, 1000 );}, 5000);
//END OF MENU BOUNCING MENU LINKS  PAGE

$('.close-btn').click(function(){
     $('.lightbox').css("display","none");
});

$('.menu_btn').click(function(){
    $('.lightbox').css("display","flex");

});











});
