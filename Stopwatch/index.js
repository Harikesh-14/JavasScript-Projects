let hr = 0;
let min = 0;
let sec = 0;
let ms = 0;

let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

var timer = false;

function start(){
    timer = true;
    stopwatch();
}

function stop(){
    timer = false;
}

function reset(){
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    ms = 0;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("ms").innerHTML = "00";
}

function stopwatch(){
    if(timer){
        ms = ms + 1;

        if(ms == 100){
            sec = sec + 1;
            ms = 0;
        }
        
        if(sec == 60){
            min = min + 1;
            sec = 0;
        }
        
        if(min == 60){
                hr = hr + 1;
                min = 0;
                sec = 0;
                min = 0;   
        }

        let hrString = hr;
        let secString = sec;
        let minString = min;
        let msString = ms;

        if(hrString < 10){
            hrString = "0" + hrString;
        }

        if(min < 10){
            minString = "0" + minString;
        }

        if(sec < 10){
            secString = "0" + secString;
        }

        if(ms < 10){
            msString = "0" + msString;
        }
            
        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("ms").innerHTML = msString;
        setTimeout("stopwatch()", 4);
    }
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);