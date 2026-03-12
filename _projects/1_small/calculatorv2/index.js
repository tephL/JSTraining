const test = document.getElementById('test');
const result = document.getElementById('result');
let initialDisplay = '';
let values = '';

function addValue(value){
    values += value;
    initialDisplay += value;
    test.textContent = values;
    if(isNaN(value)){
        initialDisplay = '';
    } 
    result.textContent = initialDisplay;
}

function equals(){
    let finalResult = eval(values);
    result.textContent = finalResult;
    values = '';
    initialDisplay = '';
}

function reset(){
    values = '';
    initialDisplay = '';
    result.textContent = '';
    test.textContent = '';
}