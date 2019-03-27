$(document).ready(function () {

$('.menu-ico').click(function(){
  $('.b-aside').toggleClass('active');
  $(this).toggleClass('active');
});


$(document).on('click', function(e) {
  if (!$(e.target).closest(".menu-ico , .b-aside").length) {
    $('.b-aside').removeClass('active');
    $('.menu-ico').removeClass('active');
  }
  e.stopPropagation();
});



 $(".b-lang").msDropdown({roundedBorder:false});

 $(".select_val").msDropdown({roundedBorder:false});


/*function moveMenu(){
  if ($(window).width() < 768) {
         $(function(){ 
      $('.b-header-contacts').appendTo('.b-header-menu')

                                    

     })            
  } else{
         $(function(){ 
      $('.b-header-contacts').appendTo('.b-header-contacts__wrapper')


     })        
  }
}
moveMenu();

$(window).resize(function(){
    moveMenu();
});*/
 

});



