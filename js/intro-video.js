let videoIntroContainer = document.getElementById('video-intro-container');
let videoIntro = document.getElementById("intro-video");
const body = document.querySelector('body');

let skipBtn = document.getElementById('skipBtn');

skipBtn.addEventListener('click', function(event){
    terminateVideo();
});
videoIntro.addEventListener('ended', function(event){
    terminateVideo();
    });
function terminateVideo(){
    body.removeChild(videoIntroContainer);
};