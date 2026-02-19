// ClassList
// add()
// remove()
// toggle()
// replace(oldClass, newClass)
// contains() - bool

let box = document.querySelectorAll(".box");
const box1 = document.getElementById("box1");

// box1.classList.add("box_active");

box.forEach(element => {
    element.addEventListener("click", event => {
        // event.target.classList.add("box_active");
        event.target.classList.toggle("box_active");
    });
});
