// Array storing video URL
let videosUrl =  ['./videos-home/background-video6.mp4','./videos-home/background-video7.mp4','./videos-home/background-video8.mp4','./videos-home/background-video2.mp4']
console.log(videosUrl);
// Get length of array
let numOfVideosUrl = videosUrl.length;
// Get the video
let video = document.getElementById('background-video');
// Get the source
let videoSource = document.getElementById('video-source');
let videoSourceSrc = videoSource.getAttribute('src');
console.log(videoSource);
// Get the button
var btn = document.getElementById('myBtn');
// Create random num between 0 and the length of array
function generateRandomNum(){
  let randomNum = Math.floor((Math.random()) * numOfVideosUrl);
  return randomNum;
}
// Pairs randomNum to URL array
function generateRandomUrl(){
  let randomUrl = videosUrl[generateRandomNum()]
  return randomUrl;
};
// Listens when video finished and sets news src attribute
video.addEventListener('ended', function(event){
  console.log('ended');
videoSource.setAttribute('src', generateRandomUrl());
    setInterval(function(){
      video.load();
    },3000);

});