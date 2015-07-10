$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll >= 100) {
        $('.sidebar').css('margin-top', 0);
    } else {
        $('.sidebar').css('margin-top', 51);
    }
});