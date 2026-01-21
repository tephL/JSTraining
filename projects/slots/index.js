const spin = document.getElementById("spin");
const num1id = document.getElementById("num1");
const num2id = document.getElementById("num2");
const num3id = document.getElementById("num3");
const resultid = document.getElementById("result");


spin.onclick = function(){
    let num1 = Math.floor(Math.random() * 3) + 1;
    let num2 = Math.floor(Math.random() * 3) + 1;
    let num3 = Math.floor(Math.random() * 3) + 1;
    
    
    
    num1id.textContent = num1;
    num2id.textContent = num2;
    num3id.textContent = num3;
    
    if(num1 == num2){
        if(num2 == num3){
            resultid.textContent = 'you won';
        }
    } else{
        resultid.textContent = 'you lost';
    }
    
}