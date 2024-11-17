let [seconds, minutes, hours]=[0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;


function stopwatch(){
    seconds++
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    let h = hours<0? "0"+hours : hours;
    let m = hours<0? "0"+minutes : minutes;
    let s = hours<0? "0"+seconds : seconds;


    displayTime.innerHTML = h +":"+ m + ":"+s;
}


function watchStart(){
    if(timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,1000);
}

function watchStop(){
    clearInterval(timer);
}

function watchReset(){
    clearInterval(timer);
    [seconds, minutes, hours]=[0,0,0];
    displayTime.innerHTML="0:0:0";
}