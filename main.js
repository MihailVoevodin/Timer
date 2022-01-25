const deadline = '2022-12-12';

function mathTime(endtime) {
    const time = Date.parse(endtime) - Date.parse(new Date());
          days = Math.floor(time / (1000 * 60 * 60 * 24)),
          hours = Math.floor((time / (1000 * 60 * 60) % 24)),
          minutes = Math.floor((time / (1000 * 60) % 60)),
          seconds = Math.floor((time / 1000) % 60);

    return {
        'time': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function addZero(num) {
    if (num < 10 && num >= 0) {
        return `0${num}`;
    } else {
        return num;
    }
}

function innerTime(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(setTime, 1000);

          setTime()

    function setTime() {
        const time = mathTime(endtime);

        days.innerHTML = addZero(time.days);
        hours.innerHTML = addZero(time.hours);
        minutes.innerHTML = addZero(time.minutes);
        seconds.innerHTML = addZero(time.seconds);

        if (time.time <= 0) {
            clearInterval(timeInterval);
        }


    }
}

innerTime('.timer', deadline);


