window.addEventListener('load', init);

const selectedTime = document.querySelector('#timeSelection');
let newTime = false;
let timeLeft;
let timer;

//init
function init() {
    const b = document.querySelector('#timerButton');
    timeLeft = parseInt(localStorage.getItem('playTime'))
    if (timeLeft > 0) {
        b.innerHTML = 'stop timer';
        b.addEventListener('click', stopTimer)
        timer = setInterval(playTimer, 1000);
        document.querySelector('#playTimer').innerHTML = (Math.floor(timeLeft/3600) + ":" + Math.floor((timeLeft/3600) * 60) + ":" + Math.floor(timeLeft% 60));
    } else {
        b.innerHTML = 'start timer';
        b.addEventListener('click', startTimer)
        newTime = true;
    }
};


//start timer
function startTimer() {
    console.log('startTimer()')
    if (newTime) {
        if (selectedTime.value == 0) {
            console.log('5min');
            clearInterval(timer);
            localStorage.setItem('playTime', 300);
            timer = setInterval(playTimer, 1000);
        } else if (selectedTime.value == 1) {
            console.log('10min');
            clearInterval(timer);
            localStorage.setItem('playTime', 600);
            timer = setInterval(playTimer, 1000);
        } else if (selectedTime.value == 2) {
            console.log('15min');
            clearInterval(timer);
            localStorage.setItem('playTime', 900);
            timer = setInterval(playTimer, 1000);
        } else if (selectedTime.value == 3) {
            console.log('30min');
            clearInterval(timer);
            localStorage.setItem('playTime', 1800);
            timer = setInterval(playTimer, 1000);
        } else if (selectedTime.value == 4) {
            console.log('1h');
            clearInterval(timer);
            localStorage.setItem('playTime', 3600);
            timer = setInterval(playTimer, 1000);
        } else if (selectedTime.value == 5) {
            console.log('1h30min');
            clearInterval(timer);
            localStorage.setItem('playTime', 5400);
            timer = setInterval(playTimer, 1000);
        } else if (selectedTime.value == 6) {
            console.log('2h');
            clearInterval(timer);
            localStorage.setItem('playTime', 7200);
            timer = setInterval(playTimer, 1000);
        } else if (selectedTime.value == 7) {
            console.log('3h');
            clearInterval(timer);
            localStorage.setItem('playTime', 10800);
            timer = setInterval(playTimer, 1000);
        } else console.log('error')
    } else console.log('newTime false')
    timeLeft = parseInt(localStorage.getItem('playTime'));
    document.querySelector('#playTimer').innerHTML = time();
    updateTimerButton()
}

//stop timer
function stopTimer() {
    console.log('StopTimer()')
    clearInterval(timer)
    newTime = true;
    localStorage.setItem('playTime', 0)
    updateTimerButton()
}

//update timer button
function updateTimerButton() {
    const b = document.querySelector('#timerButton');    
    //remove click events    
    b.removeEventListener('click', stopTimer);
    b.removeEventListener('click', startTimer);

    const time = parseInt(localStorage.getItem('playTime'));
    console.log(time);
    if (time == null || time <= 0) {
        b.addEventListener('click', startTimer);
        b.innerHTML = "start timer"
        document.querySelector('#playTimer').innerHTML = '';
        document.querySelector('#timeWhenCloses').innerHTML = '';
    } else {
        b.addEventListener('click', stopTimer);
        b.innerHTML = "stop timer"
        document.querySelector('#timeWhenCloses').innerHTML = '';
    }
}

//play timer
function playTimer() {
    const cT = parseInt(localStorage.getItem('playTime'));
    const timerText = document.querySelector('#playTimer');
    const date = new Date;
    if (cT > 0) {
        const nextT = cT - 1;
        localStorage.setItem('playTime', nextT);
        date.setSeconds(date.getSeconds() + nextT)
        console.log('Time when game will be closed: ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
        document.querySelector('#timeWhenCloses').innerHTML = ('Game closes at: ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
        timerText.innerHTML = time();
    } else {
        //close game
        clearInterval(timer);
        closeGame();
        timerText.innerHTML = '';
        document.querySelector('#timeWhenCloses').innerHTML = 'Timer out!';
        updateTimerButton();
        alert('Timer Ran Out!');
    }
}

function time() {
    nT = parseInt(localStorage.getItem('playTime'));
    let s = Math.floor(nT% 60);
    let m = Math.floor(((nT/3600)) * 60);
    let h = Math.floor(nT / 3600);
    if(s < 10) {
        s = `0${s}`; 
    }
    if (m < 10) {
        m = `0${m}`;
    }

    if (Math.floor(nT/3600) > 0 && Math.floor(nT/3600) < 2) {
        let m = Math.floor(((nT/3600)-1) * 60);
        if (m < 10) {
            m = `0${m}`;
        }
        clock = `${h}:${m}:${s}`;
    } else if (Math.floor(nT/3600) > 1 && Math.floor(nT/3600) < 3) {
        let m = Math.floor(((nT/3600)-2) * 60);
        if (m < 10) {
            m = `0${m}`;
        }
        clock = `${h}:${m}:${s}`;
    } else {
        clock = `${h}:${m}:${s}`;
    }
    return clock;
}