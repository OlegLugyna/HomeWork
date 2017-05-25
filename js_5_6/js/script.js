(function() {
  'use strict'

  var play = document.querySelector('#play');
  play.addEventListener('click', startPause);

  var stop = document.querySelector('#stop');
  stop.addEventListener('click', stopTimer);

  var reset = document.querySelector('#reset');
  reset.addEventListener('click', resetTimer);

  var prevTime;
  var savedTime; // сюда будем сохранять отсчитанное время
  var intervalId; // для передачи в clearInterval
  var isCounting = false; // эта переменная показывает отсчитывает ли таймер время

  function updateTime(time) {

    var timeHour = new Date(savedTime).getHours()-2;

      if(timeHour<10) {
          timeHour = '0'+timeHour;
      } else {
        timeHour =  timeHour;
      }

    var timeMin = new Date (savedTime).getMinutes();

      if (timeMin<10) {
        timeMin = '0'+timeMin;
      } else {
        timeMin = timeMin;
      }

      var timeSec = new Date(savedTime).getSeconds();

      if (timeSec<10) {
        timeSec = '0'+timeSec;
      } else {
        timeSec = timeSec;
      }

      var timeMilliSeconds = new Date(savedTime).getMilliseconds();

      time = document.querySelector('#time');
      time.innerHTML = timeHour + ':' + timeMin + ':' + timeSec + ':' + timeMilliSeconds;
  }

  function startPause () { // в зависимости от состояния стартуем или ставим на паузу
    if (isCounting) {
      pauseTimer();
    } else {
      startTimer();
    }
  }

  function startTimer() {
    intervalId = window.setInterval(tick, 100);
    prevTime = Date.now();
    isCounting = true;
  }

  function tick() {
    savedTime = Date.now() - prevTime;
    updateTime(savedTime);
  }

  function resetTimer() { // обнуляет savedTime и вызывать updateTime
    savedTime = 0;
    updateTime();
  }

  function pauseTimer() {
    clearInterval(intervalId);
    isCounting = false;
    }

  function stopTimer() { // комбинируя две вышеназванные функции - получаем стоп
    if(isCounting){
      pauseTimer();
    } else {
      resetTimer();
    }
}
})();
