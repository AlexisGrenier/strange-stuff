  let mainTitle = document.getElementById('main-title');
  const panoramaItemsContainer = document.getElementById('panorama-item-container');
  console.log(panoramaItemsContainer);

  // Jquery variables
  const $illustration1s = $('#illustration-1s');
  const $illustration2s = $('#illustration-2s');
  const $illustration3s = $('#illustration-3s');
  const $illustration4s = $('#illustration-4s');
  const $illustration5s = $('#illustration-5s');
  const $illustration6s = $('#illustration-6s');
  const $illustration7s = $('#illustration-7s');
  
const $toursContainer = $('#tours-container');
const $newsContainer = $('#news-container');
const $radioPlayer = $('#radio-player');

  // MOUSE OVER
  panoramaItemsContainer.addEventListener('mouseover', (event) =>{
      let target = event.target;
      let prevTarget = target.previousElementSibling;
      $(target).closest('div').toggleClass('flotte');
      
  // console.log('Mouse Over' + 'Target is ' + target.id);
      switch(target.id) {
          case 'illustration-1' :
            mainTitle.textContent = 'ON TOUR';
            $illustration1s.fadeIn();

            break;
          case 'illustration-2' :
            mainTitle.textContent = 'SHOP';
            $illustration2s.fadeIn();
          break;
          case 'illustration-3' :
            mainTitle.textContent = 'NEWS';
            $illustration3s.fadeIn();
          break;
          case 'illustration-4' :
            mainTitle.textContent = 'RADIO';
            $illustration4s.fadeIn();
          break;
          case 'illustration-5' :
            mainTitle.textContent = 'VIDEOS';
            $illustration5s.fadeIn();
          break;
          case 'illustration-6' :
            mainTitle.textContent = 'CONTACT';
            $illustration6s.fadeIn();
          break;
          case 'illustration-7' :
            mainTitle.textContent = 'THE CREW';
            $illustration7s.fadeIn();
          break;
      }
  
  });
/// mouse out
  panoramaItemsContainer.addEventListener('mouseout', (event) =>{
    let target = event.target;
    $(target).closest('div').toggleClass('flotte');
    mainTitle.textContent = '';
    // console.log('Mouse out '+ 'target is '+target.id);
    switch(target.id) {
      case 'illustration-1' :
        $illustration1s.fadeOut();
        break;
      case 'illustration-2' :
        $illustration2s.fadeOut();
      break;
      case 'illustration-3' :
                    $illustration3s.fadeOut();
      break;
      case 'illustration-4' :
                    $illustration4s.fadeOut();
      break;
      case 'illustration-5' :
                    $illustration5s.fadeOut();
      break;
      case 'illustration-6' :
                    $illustration6s.fadeOut();
      break;
      case 'illustration-7' :
                    $illustration7s.fadeOut();
      break;
  }
  });
// MOUSE CLICK
panoramaItemsContainer.addEventListener('click', (event) =>{
  let target = event.target;
  switch(target.id){
    case 'illustration-1' :
      $toursContainer.css('display','flex');
            break;
    case 'illustration-3' :
      $newsContainer.css('display','flex');
          break;
    case 'illustration-4' :
      $radioPlayer.css('display','flex');
          break;
         }
});