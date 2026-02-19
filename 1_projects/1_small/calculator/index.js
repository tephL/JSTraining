const result = document.getElementById('result');
const test = document.getElementById('test');

const operations = ['+', '-', '*', '/'];
let values = '';
let initialDisplay = '';

function addValue(value){
    values += value;
    initialDisplay += value;
    if(operations.includes(value)){
        initialDisplay = '';
    }
    result.textContent =  initialDisplay;
    test.textContent = values;
}

function think(callback){
    result.textContent = 'thinking...';
    pic.innerHTML = `<img src="thinking.png" alt="monke" height="150px" width="150px">`;
    setTimeout(() => {callback()}, 3000);
}

function equals(){
    pic.innerHTML = '';
    let computation = eval(values);
    result.textContent = computation;
    values = '';
}

function remove(){
    values = '';
    initialDisplay = '';
    result.textContent =  initialDisplay;
    test.textContent = values;
}