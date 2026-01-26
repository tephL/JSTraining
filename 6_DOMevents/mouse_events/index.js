/* mouse event listeners 
   events: 
        - click
        - mouseover
        - mouseout
    used with: element.addEventListener(eventType, callback)
        - in this example i used the 3 different types of making a callback function which
          are: normal function, anonymous function, and an arrow function 
*/

const box = document.getElementById('box');

function changeColor(event){
    console.log(event);
    event.target.style.background = 'red';
    event.target.textContent = 'i got TOUCHED';
}

box.addEventListener("click", changeColor);

box.addEventListener("mouseover", event => {
    event.target.style.background = 'blue';
    event.target.textContent = 'im almost being touched';
});

box.addEventListener("mouseout", function(){
    event.target.style.background = 'gray';
    event.target.textContent = 'phewwww';
});