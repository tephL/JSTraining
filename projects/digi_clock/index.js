function updateTime(){
    const date = new Date().toString().padStart(2, 0);
    const hour = date.getHours().toString().padStart(2, 0);
    const mins = date.getMinutes().toString().padStart(2, 0);
    const secs = date.getSeconds().toString().padStart();

    const displayTime = document.getElementById('time');
    displayTime.textContent = `${hour} : ${mins} : ${secs}` 
    console.log(`${hour} / ${mins} / ${secs}`);
}

updateTime();
setInterval(updateTime, 1000);