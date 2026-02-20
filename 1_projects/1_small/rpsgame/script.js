const user_choice = document.getElementById("user_choice"); 


// for the button click
user_choice.addEventListener("click", event => {
    
    let evtar = event.target.classList;

    if(evtar.contains("rock")){
        evtar.toggle("clickselect");
        runGame("rock");
    }
    
    if(evtar.contains("paper")){
        evtar.toggle("clickselect");
        runGame("paper");
    }

    if(evtar.contains("scissors")){
        evtar.toggle("clickselect");
        runGame("scissors");
    }

});


let choices = ["rock", "paper", "scissors"];

// result and retry container
const result = document.querySelector(".result");
let finishedGame = false; // condition to run game

function runGame(choice_of_user){
    
    if(!finishedGame){
        let numchoice_of_bot = Math.floor(Math.random() * 3); 
        console.log(numchoice_of_bot);

        // choice of bot
        let choice_of_bot =  choices[numchoice_of_bot];
        console.log(choice_of_bot);

        renderBot(choice_of_bot);    
        //displayResult(choice_of_user, choice_of_bot);
        // result display
        result.classList.toggle("hide");
        // declare btns as unusable
        finishedGame = true;
    }
}

// for the retry btn
let retry = document.getElementById("retry");

retry.addEventListener("click", e => {
    finishedGame = false;
    // make both bot and player choices cleared of designs
    user_choice.innerHTML = '<div class="choices rock">rock</div><div class="choices paper">paper</div><div class="choices scissors">scissors</div>';
    let bot_choice = document.getElementById("bot_choice");
    bot_choice.innerHTML = '<div class="enemy_choices" id="e_rock">rock</div><div class="enemy_choices" id="e_paper">paper</div><div class="enemy_choices" id="e_scissors">scissors</div>';

});

// for rendering the choice of bot

const e_rock = document.getElementById("e_rock");
const e_paper = document.getElementById("e_paper");
const e_scissors = document.getElementById("e_scissors");

function renderBot(choice){
    if(choice == "rock"){
        e_rock.style.background = 'blue';
    } else if(choice == "paper"){
        e_paper.style.background = 'blue';
    } else{
        e_scissors.style.background = 'blue';
    }
}

// reseting
function resetGame(){

}


// for hovering effect
user_choice.addEventListener("mouseover", event => {

    let evtar = event.target.classList;

    if(evtar.contains("rock")){
        evtar.toggle("hoverselection");
    }
    
    if(evtar.contains("paper")){
        evtar.toggle("hoverselection");
    }

    if(evtar.contains("scissors")){
        evtar.toggle("hoverselection");
    }

});


user_choice.addEventListener("mouseout", event => {

    let evtar = event.target.classList;

    if(evtar.contains("rock")){
        evtar.toggle("hoverselection");
    }
    
    if(evtar.contains("paper")){
        evtar.toggle("hoverselection");
    }

    if(evtar.contains("scissors")){
        evtar.toggle("hoverselection");
    }
    
});
