let increment_interval;

function start(){
    document.getElementById('time').textContent = Date(stopwatch().start_time);
    increment_interval = setInterval(stopwatch().addSecond, 3);
} 

function stop(){
    clearInterval(increment_interval);
}

function reset(){
    clearInterval(increment_interval);
    
}

function stopwatch(){
    const start_time = Date.now();
     
    function addSecond(){ 
        const curr_ms = Date.now();
        let time_distance = new Date(curr_ms - start_time); 
        let secs = time_distance.getSeconds().toString().padStart(2, 0);
        let mins = time_distance.getMinutes().toString().padStart(2, 0);
        let hrs = time_distance.getUTCHours().toString().padStart(2, 0);
        let millis = time_distance.getMilliseconds().toString().padStart(2, 0);
        document.getElementById('time2').textContent = `${hrs}:${mins}:${secs}.${millis.slice(0, 2)}`;  
    }

    return {addSecond}
}