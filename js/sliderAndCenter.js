  let mainTitle = document.getElementById('main-title');

  // const container = document.getElementById('container');
  const panoramaItemsContainer = document.getElementById('panorama-item-container');
  console.log(panoramaItemsContainer);
  
  // MOUSE OVER
  panoramaItemsContainer.addEventListener('mouseover', (event) =>{
      let target = event.target;
      let prevTarget = target.previousElementSibling;
      $(target).closest('div').toggleClass('flotte');
      
  // console.log('Mouse Over' + 'Target is ' + target.id);
      switch(target.id) {
          case 'illustration-1' :
            mainTitle.textContent = 'ON TOUR';
                        $('#illustration-1s').fadeIn();

            break;
          case 'illustration-2' :
            mainTitle.textContent = 'SHOP';
                        $('#illustration-2s').fadeIn();
          break;
          case 'illustration-3' :
            mainTitle.textContent = 'STRANGE NEWS';
                        $('#illustration-3s').fadeIn();
          break;
          case 'illustration-4' :
            mainTitle.textContent = 'STRANGE STATION';
                        $('#illustration-4s').fadeIn();
          break;
          case 'illustration-5' :
            mainTitle.textContent = 'VIDEOS';
                        $('#illustration-5s').fadeIn();
          break;
          case 'illustration-6' :
            mainTitle.textContent = 'CONTACT';
                        $('#illustration-6s').fadeIn();
          break;
          case 'illustration-7' :
            mainTitle.textContent = 'THE CREW';
                        $('#illustration-7s').fadeIn();
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
                    $('#illustration-1s').fadeOut();
        break;
      case 'illustration-2' :
                    $('#illustration-2s').fadeOut();
      break;
      case 'illustration-3' :
                    $('#illustration-3s').fadeOut();
      break;
      case 'illustration-4' :
                    $('#illustration-4s').fadeOut();
      break;
      case 'illustration-5' :
                    $('#illustration-5s').fadeOut();
      break;
      case 'illustration-6' :
                    $('#illustration-6s').fadeOut();
      break;
      case 'illustration-7' :
                    $('#illustration-7s').fadeOut();
      break;
  }

  });

// MOUSE CLICK
panoramaItemsContainer.addEventListener('click', (event) =>{
  let target = event.target;
  switch(target.id){
    case 'illustration-1' :
      $('#tours-container').css('display','flex');
            break;
    case 'illustration-2' :

          break;
    case 'illustration-3' :
      $('#news-container').css('display','flex');

          break;
    case 'illustration-4' :
      $('#radio-player').css('display','flex');

          break;
    case 'illustration-5' :
          
          break;
    case 'illustration-6' :
          
          break;
    case 'illustration-7' :
          
          break;  }
});