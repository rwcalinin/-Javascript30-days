setDate();

    function setDate() {
      const now = new Date(),
            seconds = now.getSeconds(),
            minutes = now.getMinutes(),
            hours = now.getHours(),
            secondsArrow = document.querySelector('.second-hand'),
            minutesArrow = document.querySelector('.min-hand'),
            hoursArrow = document.querySelector('.hour-hand');
      secondsArrow.style.transform = `rotate(${seconds * 6}deg)`;
      minutesArrow.style.transform = `rotate(${minutes * 6}deg)`;
      hoursArrow.style.transform = `rotate(${hours * 6}deg)`;
    }
    
    setInterval(setDate, 1000);