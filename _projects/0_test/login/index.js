const password = document.getElementById("password");
const username = document.getElementById("username");
const submit_btn = document.getElementById("submit_btn");
const display_name = document.getElementById("display_name");
const status = document.getElementById("status");

submit_btn.onclick = function(){
    if(password.value === "1234" && username.value === "tephL"){
    status.textContent = 'Successfully Logged in';
    display_name.textContent = username.value;
    } else{
        status.textContent = "Invalid details";
    }
}

