/// DRAGGABLE AND RESIZABLE NEWS
document.addEventListener('DOMContentLoaded', (event)=>{
  console.log('DOM is fully Loaded');
});
window.addEventListener('load', (event)=>{
  console.log('page is fully Loaded');
});
//NEWS
$('#news-container').draggable({
  start: function( event, ui ) {
    $(this).css('transform','none');
  }
}).resizable({
                // alsoResize:"#body-container-news",
                alsoResize:"#body-container-news",

                minWidth: 250
              });
//TOURS
$('#tours-container').draggable({
  start: function( event, ui ) {
    $(this).css('transform','none');
  }
}).resizable({
              alsoResize:"#body-container-tours",
              minWidth: 250
            });
// RADIO PLAYER
$('#radio-player').draggable({
  start: function( event, ui ) {
    $(this).css('transform','none');
  }
});

// IMG GALLERY
$('#img-gallery').draggable().resizable({
  alsoResize: '#img-container>img, #header-gallery',
  // minWidth: 350,
  maxWidth: 780,
  // minHeight: 400,
  // maxHeight: 592,
});