let box = document.querySelectorAll(".box");

box.forEach(element => {
    element.style.background = "red";

    element.addEventListener("mouseover", event => {
        event.target.style.background = "blue";
    });

    element.addEventListener("mouseout", event => {
        event.target.style.background = "red";
    });


    element.addEventListener("click", event => {
        event.target.remove();
    });
});
