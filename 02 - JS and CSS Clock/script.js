setDate();

    function setDate() {
      const now = new Date(),
            seconds = now.getSeconds(),
            minutes = now.getMinutes(),
            hours = now.getHours(),
            secondsArrow = document.querySelector('.second-hand'),
            minutesArrow = document.querySelector('.min-hand'),
            hoursArrow = document.querySelector('.hour-hand'),
            secondsDegree = seconds * 6 + 90,
            minutesDegree = minutes * 6 + 90,
            hoursDegree = hours * 6 + 90;

      secondsArrow.style.transform = `rotate(${secondsDegree}deg)`;
      minutesArrow.style.transform = `rotate(${minutesDegree}deg)`;
      hoursArrow.style.transform = `rotate(${hoursDegree}deg)`;
    }
    
    setInterval(setDate, 1000);