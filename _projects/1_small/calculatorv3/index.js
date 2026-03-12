let mainValue = '';
let memoryValue = '';
let loggedValues = '';


const buttons = document.getElementById("buttons");
buttons.addEventListener("click", e => {
    let _clickValue = e.target.innerHTML;

    switch(_clickValue){
        case 'MC':
            memoryValue = '';
            break;
        case 'MR':
            mainValue = memoryValue;
            break;
        case 'MS':
            memoryValue = mainValue;
            break;
        case 'M+':
            let _resultM = eval(mainValue + '+' + memoryValue);        
            // invalid values handler
            if(mainValue == '' || memoryValue == '') return alert("empty");
            mainValue = String(_resultM);
            loggedValues = '';
            break;
        case '+':
            loggedValues += mainValue;
            mainValue = '';
            loggedValues += _clickValue;
            break;
        case '-':
            loggedValues += mainValue;
            mainValue = '';
            loggedValues += _clickValue;
            break;
        case '*':
            loggedValues += mainValue;
            mainValue = '';
            loggedValues += _clickValue;
            break;
        case '/':
            loggedValues += mainValue;
            mainValue = '';
            loggedValues += _clickValue;
            break;
        case 'C':
            mainValue = '';
            loggedValues = '';
            break;
        case 'CE':
            mainValue = '';
            loggedValues = '';
            memoryValue = '';
            break;
        case '=':                           
            loggedValues += mainValue;                                                                                                
            let _result = eval(loggedValues);
            // invalid values handler
            if(_result == undefined) return alert("empty");
            mainValue = String(_result);
            loggedValues = '';
            break;
        case 'Backspace':
            mainValue = mainValue.slice(0, mainValue.length - 1);
            console.log(mainValue);
            break;
        default:
            mainValue += _clickValue;
            break;
    }

    reloadMainDisplay();
    reloadMemoryDisplay();
    console.warn(`logged: ${loggedValues}`);

});


const mainDisplay = document.getElementById("mainDisplay");
const memDisplay = document.getElementById("memDisplay");

function reloadMainDisplay(){
    mainDisplay.value = mainValue;
}

function reloadMemoryDisplay(){
    memDisplay.value = memoryValue;
}
