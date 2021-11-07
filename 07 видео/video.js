'use strict';

const video = document.querySelector('video');
const playBtn = document.querySelector('.fa-play');
const pauseBtn = document.querySelector('.fa-pause');
const volume = document.querySelector('.volume');
const timing = document.querySelector('.timing');
const currentTimeEl = document.querySelector('.currentTime');

let progressId = null;

window.addEventListener('load', function(){ // это событие сработает, когда страница полностью загрузится браузером, включая видео
    timing.min = 0;
    timing.max = video.duration;
});

playBtn.addEventListener('click', function (event) {
    if (video.paused) {
        video.play();
        progressId = setInterval(changeProgress, 100);
    }
});
pauseBtn.addEventListener('click', function (event) {
    if (!video.paused) {
    video.pause();
    clearInterval(progressId);
    }
});

video.addEventListener('ended', function () {
    clearInterval(progressId);
})

function changeProgress() {
    currentTimeEl.innerText = video.currentTime;
    timing.value = video.currentTime;
}