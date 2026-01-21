function rollDice(){
    const results = document.getElementById("results");
    const dice_amt = document.getElementById("dice_amt").value;

    const rolls = [];
    if(dice_amt){
        for(let i=0; i<dice_amt; i++){
            let result = Math.floor(Math.random() * 6) + 1;
            rolls.push(`<div class="result">
                <div class="img_container">
                    <img id="img_result" src="pics/${result}.png" alt="">
                </div>
                <p>${result}</p>
                </div>`);
        }

        results.innerHTML = rolls.join('');
    }
    
    
    
}