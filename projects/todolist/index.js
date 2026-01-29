class Task{
	static task_ctr = 1;

	constructor(task){
		this.task_id = Task.task_ctr;
    Task.task_ctr += 1;
    this.task = task;
    this.status = false;
    this.date = new Date();
    this.hour = this.date.getHours();
    this.minutes = this.date.getMinutes();
  }
}

// sample tasks
let t1 = new Task('say hi');
let t2 = new Task('say hello');
let t3 = new Task('change for the better');

// main storage for the task objects
let tasks_arr = [t1, t2, t3];
console.log(tasks_arr);

// conecting it to front end now

// the elements for task creation
const tasks_list = document.getElementById('tasks_list');
const add_task_btn = document.getElementById('add_task_btn');
const add_task_content = document.getElementById('add_task_content');

const list_tag = 'li';

add_task_btn.addEventListener('click', event => {
  if(add_task_content.value == ''){
    console.log('must have input!');
  } else{
    // make obj
    let _task = new Task(add_task_content.value);
    // append to arr
    tasks_arr.push(_task);
    // turn the task into a document obj
    let _doctask = document.createElement(list_tag);
    _doctask.textContent = _task.task;
    //_doctask.id = _task. _task.task_id; ======
    // add doc obj to current view
    tasks_list.appendChild(_doctask);
    // remove input from text field
    add_task_content.value = '';
    console.log('MSG done adding task');
  }
});

// helper for making a document object

