let test = document.querySelectorAll("test");

let container = document.getElementById("container");

container.addEventListener("click", event => {
    console.log(event.target);
});
