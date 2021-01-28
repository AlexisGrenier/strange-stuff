
$('.triggerShip').on({
    mouseenter: function(){
        $('.side-nav-li').css('width','500px');
        $('.side-nav-li ul').css('opacity','1');
        $('.triggerShip').addClass('triggerShip-active');
        $('#artist-profil-container').css('opacity','0');
    },
})

$('#side-nav').on({

    mouseleave: function(){
        $('.side-nav-li').css('width','0px');
        $('.side-nav-li ul').css('opacity','0');
        $('.triggerShip').removeClass('triggerShip-active');
        $('#artist-profil-container').css('opacity','1');


    },
})