(function () {
  'use strict';

  function playAudio(el) {
    el.currentTime = 0;
    el.play();
  }

  function reset() {
    console.log(this);

    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');

  keys.forEach(key => key.addEventListener('transitionend', reset));
  document.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelectorAll(`.key[data-key="${e.keyCode}"]`)[0];

    if (audio) {
      playAudio(audio);
    }
    if (key) {
      key.classList.add('playing');
    }
  });
}());
