const newTaskInput = document.getElementById("newTaskInput");
const inputBtn = document.getElementById("inputBtn");

const tasks = document.getElementById("tasks");
const time = document.getElementById("time");

setInterval(() => {
    time.innerHTML = "time: " + new Date().toLocaleTimeString();
}, 1000)


let tasks_sys = [
    {task_content: "bruh", date: "10-10-1000", status: true}
];

inputBtn.addEventListener("click", addTask);

inputBtn.addEventListener("mouseenter", () => {
    inputBtn.style.background = 'blue';
});

inputBtn.addEventListener("mouseout", () => {
    inputBtn.style.background = '';
});

function addTask(){
    if(newTaskInput.value == ""){
        return alert("there must be an input");
    } else{
        const dateRn = new Date().toLocaleTimeString();
        const _newTask = {task_content: newTaskInput.value, date: dateRn};
        tasks_sys.push(_newTask);
        return reload();
    }
}

function reload(){
    tasks.innerHTML = '';
    tasks_sys.forEach((task) => {
        const _newdiv = document.createElement("div");
        _newdiv.classList.add("task");

        if(task.status == true){
            _newdiv.style.background = 'red';
        }

        const _newdatep = document.createElement("p");
        _newdatep.innerHTML = task.date;

        const _newtaskp = document.createElement("p");
        _newtaskp.innerHTML = task.task_content;

        const _donebutton = document.createElement("button");
        _donebutton.innerHTML = "done";
        _donebutton.classList.add("donetask");

        const _undonebutton = document.createElement("button");
        _undonebutton.innerHTML = "undone";
        _undonebutton.classList.add("undonetask");

        _newdiv.appendChild(_newdatep);
        _newdiv.appendChild(_newtaskp);
        _newdiv.appendChild(_donebutton);
        _newdiv.appendChild(_undonebutton);
        tasks.appendChild(_newdiv);
    });

}

tasks.addEventListener("click", e => {
    if(e.target.classList.contains("donetask")){
        const parentDiv = e.target.parentElement;
        parentDiv.style.background = 'red';
    }
    if(e.target.classList.contains("undonetask")){
        const parentDiv = e.target.parentElement;
        parentDiv.style.background = '';
    }
})