const menu_btn = document.getElementById("menu_btn");
const menu_content = document.getElementById("menu_content");

menu_btn.addEventListener("click", event => {
    menu_content.classList.toggle("menu_hide");
});
