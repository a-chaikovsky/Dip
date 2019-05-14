 $(document).ready(function() {
     var scroll_start = 0;

     var startChange = $('#startchange');

     var offset = startChange.offset();

     $(document).scroll(function() {
         scroll_start = $(this).scrollTop();

         if(scroll_start > offset.top) {
            $('#myNav').css({
                backgroundColor: '#000',
                transition: '.8s',
                marginTop: '0'
            });
         } else {
             $('#myNav').css({
                backgroundColor: 'transparent',
                 transition: '.4s',
                 marginTop: '10px'
             });
         }
     });

 });


$(document).ready(function() {

    $( '.menu-trigger' ).click(function() {
        $( 'nav ul' ).slideToggle( 500 );
    });

    $( '#pullUp' ).click(function() {
        $( '.rotate-shadows' ).toggleClass('stop');

        $( 'button' ).toggleClass('btn__color');
    });

});

