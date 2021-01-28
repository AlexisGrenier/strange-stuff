document.addEventListener('DOMContentLoaded', (event)=>{
    console.log('DOM is fully Loaded');
});
window.addEventListener('load', (event)=>{
    console.log('page is fully Loaded');
});


let nextBtn = document.querySelector('#arrow-right');
let prevBtn = document.querySelector('#arrow-left');

let images = document.getElementsByClassName('my-img');
let imagesArray =[];

for (let i=0; i< images.length; i++){
        imagesArray.push(images[i]);
    }
let current = 0;
console.log(current);

function count(n) {
    current += n;
    if (current > images.length-1){
        current = 0;
    } else if (current < 0){
        current = images.length-1;

    }
    console.log(current);
    console.log(images.length);

}
imagesArray[current].classList.remove('hidde-img');

nextBtn.addEventListener('click', (event) => {
    imagesArray[current].classList.add('hidde-img');
    count(+1);
    imagesArray[current].classList.remove('hidde-img');
})

prevBtn.addEventListener('click', (event) => {
    imagesArray[current].classList.add('hidde-img');
    count(-1);
    imagesArray[current].classList.remove('hidde-img');
})
