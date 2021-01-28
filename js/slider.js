////SLIDER MENU CENTERED
let slider = document.querySelector('.items');
let isDown = false;
let startx;
let scrollLeft;
let winWidth = window.innerWidth;
console.log(winWidth);
let sliderWidth = document.querySelector('.items').scrollWidth;
console.log(sliderWidth);
let sliderScroll = (sliderWidth/2)-(winWidth/2);
console.log(sliderScroll);
slider.scrollTo(sliderScroll, 0);


slider.addEventListener('mousedown', (e) => {
isDown = true;
e.preventDefault();
slider.classList.add('active');
startX = e.pageX - slider.offsetLeft;
scrollLeft = slider.scrollLeft;
console.log(isDown);
console.log('window size is ' + winWidth)


});

slider.addEventListener('mouseleave', () => {
isDown = false;
});

slider.addEventListener('mouseup', () => {
isDown = false;
slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
if(!isDown) return // stop the func from running
e.preventDefault();
const x = e.pageX - slider.offsetLeft;
const walk = x - startX;
slider.scrollLeft = scrollLeft - walk;
console.log('mouse moves '+ walk);
});
