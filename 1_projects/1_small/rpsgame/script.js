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


function runGame(choice_of_user){
    
    let numchoice_of_bot = Math.floor(Math.random() * 3); 
    console.log(numchoice_of_bot);

    let choice_of_bot =  choices[numchoice_of_bot];
    console.log(choice_of_bot);

    if(choice_of_bot === "rock"){
        
    }
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
