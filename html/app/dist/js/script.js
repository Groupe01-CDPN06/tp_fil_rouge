$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if(scroll >= 100) {
        $('.sidebar-nav').css('top', 0);
    } else {
        $('.sidebar-nav').css('top', 50);
    }
});