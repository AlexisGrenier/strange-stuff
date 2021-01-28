////SLIDER MENU CENTERED
const containerPanorama = document.querySelector('.items');
const contWidth = containerPanorama.scrollWidth;
console.log(contWidth);
let slider = document.querySelector('.items');
let winWidth = window.innerWidth;
let sliderWidth = document.querySelector('.items').scrollWidth;
let sliderScroll = (sliderWidth/2)-(winWidth/2);
slider.scrollTo(sliderScroll, 0);


// SLIDER CONTROLS
let sliderControls = document.getElementById('panorama-controls');
let controlLeft = document.getElementById('go-left');
let controlRight = document.getElementById('go-right');

sliderControls.addEventListener('click', function(event){
    let target = event.target;
    switch(target.id){
        case 'go-right' :
            slider.scrollLeft += 200;
            break;
        case 'go-left' :
            slider.scrollLeft -= 200;
            break;
    }
});
sliderControls.addEventListener('mouseup', function(event){
    isDown = false;
    console.log(isDown);
});
