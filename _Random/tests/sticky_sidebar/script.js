$(window).load(function(){
    $('#sidebar').affix({
      offset: {
        top: $('.navbar-default').height()
      }
    });
});