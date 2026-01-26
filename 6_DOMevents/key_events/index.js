/* key event listeners 
   events: 
        - keydown
        - keyup
    used with: element.addEventListener(eventType, callback)
        - 
*/

const disco = document.getElementById('disco');
const disco2 = document.getElementById('disco2');
const move = 10;
let y = 0;
let x = 0;

document.addEventListener('keydown', event => {
    console.log('key was presseed: ' + event.key);

    if(event.key.startsWith('Arrow')){
        switch(event.key){
            case 'ArrowUp':
                y -= move;
                console.log(x + ', ' + y);
                break;
            case 'ArrowRight':
                x += move;
                console.log(x + ', ' + y);
                break;
            case 'ArrowDown':
                y += move;
                console.log(x + ', ' + y);
                break;
            case 'ArrowLeft':
                x -= move;
                console.log(x + ', ' + y);
                break;
        }

        disco.style.top = `${y}px`;
        disco.style.left = `${x}px`;
    }
});

let y2 = 0;
let x2 = 0;

// for box 2
document.addEventListener('keydown', event => {
    console.log('key was presseed: ' + event.key);

    if(event.key.startsWith('w') || event.key.startsWith('a') || event.key.startsWith('s') || event.key.startsWith('d')){
        switch(event.key){
            case 'w':
                y2 -= move;
                console.log(x + ', ' + y);
                break;
            case 'd':
                x2 += move;
                console.log(x + ', ' + y);
                break;
            case 's':
                y2 += move;
                console.log(x + ', ' + y);
                break;
            case 'a':
                x2 -= move;
                console.log(x + ', ' + y);
                break;
        }

        disco2.style.top = `${y2}px`;
        disco2.style.left = `${x2}px`;
    }
});

// document.addEventListener('keyup', event => {
//     console.log('key was unpressed: ' + event.key);
//     disco.style.backgroundColor = 'blue';
// });