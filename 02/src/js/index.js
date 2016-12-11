(function() {
  const hourHand = document.getElementsByClassName('hour-hand')[0];
  const minuteHand = document.getElementsByClassName('min-hand')[0];
  const secondHand = document.getElementsByClassName('second-hand')[0];

  function tickSecond(second) {
    const degrees = ((second / 60) * 360) + 90;

    secondHand.style.transform = `rotate(${degrees}deg)`;
  }

  function tickMinute(minute) {
    const degrees = ((minute / 60) * 360) + 90;

    minuteHand.style.transform = `rotate(${degrees}deg)`;
  }

  function tickHour(hour) {
    const twelveHour = hour > 12 ? hour - 12 : hour;
    const degrees = ((twelveHour / 12) * 360) + 90;

    hourHand.style.transform = `rotate(${degrees}deg)`;
  }

  setInterval(function() {
    const date = new Date();

    tickSecond(date.getSeconds());
    tickMinute(date.getMinutes());
    tickHour(date.getHours());
  }, 1000);
}());
