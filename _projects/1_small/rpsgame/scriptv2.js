/*  FLOW
 *
 *  - get user choice
 *  - get bot choice
 *  - compare
 *  - display choices
 *  - display winner
 *  - finish
 *
 */


// choices
const choices = ["rock", "paper", "scissors"];


// user choice
let sysUserChoice = null;
const user_choice = document.getElementById("user_choice");


// event delegation for user_choice container
user_choice.addEventListener("click", e => {
    // alias for user choice getter
    let eid = e.target.id;

    sysUserChoice = eid;

    // game runner
    runGame();
});


// bot choice
let sysBotChoice = null;

function randomBotChoice(){
    let _randomChoice = Math.floor(Math.random() * 3);
    sysBotChoice = choices[_randomChoice];
}


// compare function
let winner = null;

function compareResult(UserChoice, BotChoice){
    // draw
    if(UserChoice == BotChoice){
        winner = "draw";
    } else if(UserChoice == "rock" && BotChoice == "scissors"){
        winner = "user";
    } else if(UserChoice == "paper" && BotChoice == "rock"){
        winner = "user";
    } else if(UserChoice == "scissors" && BotChoice == "paper"){
        winner = "user";
    } else{
        winner = "bot";
    }
}

// result displayer
const result = document.querySelector(".result");

function displayResult(){
    console.log(`user: ${sysUserChoice}`);
    console.log(`bot: ${sysBotChoice}`);
    console.warn(`win: ${winner}`);

    result.classList.toggle("hide");
    _winnerDisplay = result.children[0];
    _winnerDisplay.textContent = `Winner: ${winner}`;
    
    // rendering choice of both sides thru colors
    let _choiceToRender = document.getElementById(`${sysUserChoice}`);
    _choiceToRender.style.background = "blue";
    let _botchoiceToRender = document.getElementById(`e_${sysBotChoice}`);
    _botchoiceToRender.style.background = "blue";
}


// game execution
let game_finished = false;

function runGame(){
    if(!game_finished){
        randomBotChoice();
        compareResult(sysUserChoice, sysBotChoice);
        displayResult();
        game_finished = true;
    }
}


// retry button
const retry = document.getElementById("retry");

retry.addEventListener("click", e => {reset()});

function reset(){
    let _choiceToRender = document.getElementById(`${sysUserChoice}`);
    _choiceToRender.style.background = "";
    let _botchoiceToRender = document.getElementById(`e_${sysBotChoice}`);
    _botchoiceToRender.style.background = "";
    result.classList.toggle("hide");
    game_finished = false;
}
