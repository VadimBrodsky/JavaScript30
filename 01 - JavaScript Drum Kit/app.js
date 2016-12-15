"use strict";
console.log('JS30 Day 1');
function keyPressHandler(e) {
    var audio = document.querySelector("audio[data-key=\"" + e.keyCode + "\"");
    var key = document.querySelector(".key[data-key=\"" + e.keyCode + "\"");
    playSound(audio);
    addTransition(key);
}
function playSound(audio) {
    if (!audio) {
        return;
    }
    audio.currentTime = 0; // rewind the audio to the beginning before playing
    audio.play();
}
function addTransition(key) {
    if (!key) {
        return;
    }
    key.classList.add('playing');
}
function removeTransitionHandler(e) {
    if (e.propertyName !== 'transform') {
        return;
    }
    this.classList.remove('playing');
}
window.addEventListener('keydown', keyPressHandler);
var keys = document.querySelectorAll('.key');
keys.forEach(function (key) { return key.addEventListener('transitionend', removeTransitionHandler); });
