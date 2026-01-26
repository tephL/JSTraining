const time = document.getElementById('time');
let start_time = 0;
let lapsed = 0;
let total_lapsed = 0;
let running = false;
let run_loop = null;
let stopwatch_Output = null;

function start(){
    if(!running){
        start_time = Date.now();
        run_loop = setInterval(addLapse, 35);
        running = true;
    }
}

function addLapse(){
    let curr_time = Date.now();
    //lapsed = (curr_time - start_time);
    total_lapsed += 30;
    
    let displayTime = new Date(total_lapsed);
    let hour = displayTime.getUTCHours().toString().padStart(2, 0);
    let mins = displayTime.getMinutes().toString().padStart(2, 0);
    let secs = displayTime.getSeconds().toString().padStart(2, 0);
    let millis = displayTime.getMilliseconds().toString().padStart(2, 0).slice(0, 2);
    stopwatch_Output = `${hour}:${mins}:${secs}.${millis}`;

    time.textContent = stopwatch_Output;
}

function stop(){
    if(running){
        clearInterval(run_loop);
        running = false;
    }    
}

function reset(){
    clearInterval(run_loop);
    total_lapsed = 0;
    running = false;
    stopwatch_Output = `00:00:00.00`;
    time.textContent = stopwatch_Output;
}