function rollDice(){
    const dice_result = document.getElementById("dice_result");
    const dice_container = document.getElementById("dice_container");
    const img = document.getElementById("img");
    const dice_num = document.getElementById("dice_num");

    const values = [];
    const imgs = [];


    for(let i=0; i<dice_num.value; i++){
        let value = Math.floor(Math.random() * 6) + 1; 
        values.push(value);
        imgs.push(`<img src="dices/${value}.png" alt="" id="img">`)
    }

    dice_container.innerHTML = imgs.join('');
    dice_result.textContent = `${values.join(', ')}`;
}   