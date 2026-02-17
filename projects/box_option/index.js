let container = document.getElementById("container");
let box = document.querySelectorAll(".box");
let del = document.querySelectorAll(".del");
let clr = document.querySelectorAll(".clr");
const input = document.getElementById("input");

const add_new = document.getElementById("add_new");

add_new.addEventListener("click", event => {
    let _new = document.createElement("div");
    _new.classList.add("box");

    let _newP = document.createElement("p");
    _newP.textContent = input.value;
    input.value = '';
    input.textContent = '';
    
    let _newClr = document.createElement("button");
    _newClr.classList.add("del");
    _newClr.textContent = "delete box";
    
    let _newDel = document.createElement("button");
    _newDel.classList.add("clr");
    _newDel.textContent = "change color";

    _new.appendChild(_newP);
    _new.appendChild(_newClr);
    _new.appendChild(_newDel);
    container.appendChild(_new);
});


container,addEventListener("click", event => {
    if(event.target.classList.contains("clr")){
        console.warn('MSG: detected btn');
        let boxParent = event.target.parentElement;
        boxParent.classList.toggle("box_active");
    }

    if(event.target.classList.contains("del")){
        console.warn('MSG: detected del btn');
        let boxParent = event.target.parentElement;
        boxParent.remove();
    }
});
/*
clr.forEach(element => {
    element.addEventListener("click", event => {
        console.log(event);
        let boxParent = event.target.parentElement;
        boxParent.classList.toggle("box_active");
    });
});
*/

del.forEach(element => {
    element.addEventListener("click", event => {
        console.log(event);
        let boxParent = event.target.parentElement;
        boxParent.remove();
        console.warn('MSG: deleted box successfully');
    });
});

