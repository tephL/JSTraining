const grass_box = document.getElementById('grass_box');
const HP = document.getElementById('HP');
const grass_img = document.getElementById('grass_img');
const grass_entity = document.getElementById('grass_entity');


let hp = 1000;
const dmg = 3;

let x = 0;
let y = 0;
const movement = 10;

HP.textContent = hp  + ' HP';

grass_box.addEventListener('click', event => {
    HP.style.color = 'red';
    grass_img.style.color = 'red';
    hp -= dmg;
    HP.textContent = hp + ' HP';
    setTimeout(function(){HP.style.color = 'green';}, 300);
});

document.addEventListener('keydown', event => {
    console.log(event.key);
    if(event.key.startsWith('Arrow')){
        switch(event.key){
            case 'ArrowUp':
                y-=movement;

        }
    }
});