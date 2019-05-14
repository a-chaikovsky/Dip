$('h4').next().hide();
$('.accordion__up').click(function(){
    $(this).next().slideToggle();
    $('h4').not(this).next().stop(true,true).slideUp();
});