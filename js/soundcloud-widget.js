var iframeElement   = document.querySelector('#sc-widget');
var iframeElementID = iframeElement.id;
var widget1         = SC.Widget(iframeElement);
var widget2         = SC.Widget(iframeElementID);

let controlsPlayer = document.querySelectorAll('control-player');
let btnPrev = document.getElementById('radio-player-btn-previous');
let btnPlay = document.getElementById('radio-player-btn-play');
let btnPause = document.getElementById('radio-player-btn-pause');
let btnNext = document.getElementById('radio-player-btn-next');
let btnLike = document.getElementById('radio-player-btn-like');
let btnMute = document.getElementsByClassName('radio-player-btn-mute');
let btnVolume = document.getElementById('radio-volume-selector');
let btnClose = document.getElementById('radio-close-btn');
let volumeRange = '';
let isVolumeOn = '';

let currentTitle = document.getElementById('current-title');
let currentArtist = document.getElementById('current-artist');
let durationTitle = document.getElementById('duration-title');
let currentDuration = document.getElementById('current-title-duration')
let album = '';

(function(){
    var widgetIframe = document.getElementById('sc-widget'),
        widget       = SC.Widget(widgetIframe);

    // play BTN
    btnPlay.addEventListener('click', function(event) {
        $('.illustration').fadeOut(5000);
        widget.play();
    });
    // Pause Btn
    btnPause.addEventListener('click',  function(event){
        // console.log('btnPause is clicked');
        widget.pause();
        $('.illustration').fadeIn(5000);

    })
    // next Btn
        btnNext.addEventListener('click',  function(event){
            // console.log('btnNext is clicked');
            widget.next();
            
        })
    // prev Btn
    btnPrev.addEventListener('click',  function(event){
        // console.log('btnPrev is clicked');
        widget.prev();
    })
    // get information about currently playing sound
    widget.bind(SC.Widget.Events.READY, function() {
        let prevVolume = volumeRange;
        volumeRange= 30;
        widget.setVolume(volumeRange);
        newRandomSound();

        function newRandomSound(){
            widget.getSounds(function(playlist){
                const playListNumOfTracks = playlist.length;
                let randomNum = Math.floor(Math.random() * playListNumOfTracks);
                widget.skip(randomNum);
                getCurrentSoundInfos()
            });
        }
        function getCurrentSoundInfos(){
            widget.getCurrentSound(function(ret){
                currentTitle.textContent = ret.title;
                currentArtist.textContent = ret.user.full_name;
                durationTitle.textContent = ret.duration;
                });
        };

        function changeVolume(n, vol) {
            widget.setVolume(n);
            isVolumeOn = vol;
        };
        widget.bind(SC.Widget.Events.PLAY, function() {
            isVolumeOn = true;
            let count = 0 ;
            getCurrentSoundInfos()
            btnVolume.addEventListener('change', function(event){
                    volumeRange = btnVolume.value;
                    changeVolume(volumeRange, true);
                    });
                    for (i=0; i<btnMute.length; i++){
                        btnMute[i].addEventListener('click', function(event){
                            widget.setVolume('0');
                            count +=1;
                            if (count >= 2){
                                count = 0
                                widget.setVolume(volumeRange);
                                    }
                                });
                            btnClose.addEventListener('click',function(event){
                                $('.illustration').fadeIn(5000);
                                widget.pause();
                                //fire then fct to choose random title.
                            });
                    }
            if (getVolume()==0){
            }
        });
        // get current position of current sound        
        widget.bind(SC.Widget.Events.PLAY_PROGRESS, function() {
            widget.getPosition(function(pos){
            currentDuration.textContent = pos;
                // console.log(pos);
            }
        )})
  });
}());