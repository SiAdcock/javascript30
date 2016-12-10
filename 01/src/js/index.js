(function () {
  'use strict';

  document.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  });
}());
