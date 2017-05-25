var hh = 0;
var mm = 0;
var ss = 0;
var ms = 0;
var timerId;

var buttonStart = document.getElementById('start');
var buttonStop = document.getElementById('stop');
var mseconds = document.getElementById('mseconds');
var seconds = document.getElementById('seconds');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');

function start() {
    timerId = setInterval(function () {
        ms += 5;

        if (ms > 991) {
            ss++;
            ms = 0;
            seconds.innerHTML = ss;
        }

        if (ss < 10) {
            seconds.innerHTML = '0' + ss;
        } else {
            seconds.innerHTML = ss;
        }

        if (ss > 59) {
            mm++;
            ss = 0;
            minutes.innerHTML = mm;
        }

        if (mm < 10) {
            minutes.innerHTML = '0' + mm;
        } else {
            minutes.innerHTML = mm;
        }

        if (mm > 59) {
            hh++;
            mm = 0;
            hours.innerHTML = hh;
        }

        if (hh>23) {
            hh = 0
        }

        if (hh < 10) {
            hours.innerHTML = '0' + hh;
        } else {
            hours.innerHTML = hh;
        }

        mseconds.innerHTML = ms;

        if (ms < 100) {
            mseconds.innerHTML = '0' + ms;
        } else if (ms < 10) {
            mseconds.innerHTML ='00' + ms;
        } else {
            mseconds.innerHTML = ms;
        }


    }, 5);

    buttonStart.innerHTML = 'Pause';

};

function pause() {
    clearInterval(timerId);
    buttonStart.innerHTML = 'Start';
}

function checkButton() {
    if (buttonStart.innerHTML == 'Start') {
        start()
    } else if (buttonStart.innerHTML == 'Pause') {
        pause();
    }
}

function clear() {
    hh = 0;
    mm = 0;
    ss = 0;
    ms = 0;

    seconds.innerHTML = '00';
    minutes.innerHTML = '00';
    mseconds.innerHTML = '000';
    hours.innerHTML = '00';
    clearInterval(timerId);
    buttonStart.innerHTML = 'Start';
}

buttonStart.addEventListener('click', checkButton);
buttonStop.addEventListener('click', clear);

