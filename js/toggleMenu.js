////MENU TOOGLE
$('.burger-icon').click(function(){
    $('ul').toggleClass('hidden-menu');
    // $('#top-nav').toggleClass("full-height");// crea prob w radio
    $('#go-left,#go-right').toggle();

});

$('#menu-li-radio,#menu-li-tours,#menu-li-news').click(function(){
    $('ul').toggleClass('hidden-menu');
    // $('#top-nav').toggleClass("full-height");// crea prob w radio
    $('#go-left,#go-right').toggle();
});
// SHOW MODAL NEWS
$('#menu-li-news').click(function(){
    $('#news-container').css('display','flex');
});
// SHOW MODAL TOURS
$('#menu-li-tours').click(function(){
    $('#tours-container').css('display','flex');
});

// SHOW MODAL RADIO
$('#menu-li-radio').click(function(){
    $('#radio-player').css('display','flex');
});
