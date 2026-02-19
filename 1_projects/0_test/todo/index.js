const tasks = document.getElementById('tasks');
const submit_task = document.getElementById('submit_task');
const add_task = document.getElementById('add_task');

const debug = document.getElementById('debug');

submit_task.addEventListener('click' ,event => {
    if(add_task.value == ''){
        console.warn('must have content');
        window.alert('must have content');
    } else{
        let task = document.createElement('li');
        task.textContent = add_task.value;
        debug.textContent = add_task.value; // debugging
        tasks.appendChild(task);
        add_task.value = '';
    }
});


