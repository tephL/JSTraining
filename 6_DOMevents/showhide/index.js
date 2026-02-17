const button = document.getElementById("button");
const img = document.getElementById("test");


button.addEventListener("click", event=> {
    if(test.style.display === "none"){
        test.style.display = "block";  // or use .visibility so that its space wont be filled
        button.textContent = "Hide";
    }else{
        test.style.display = "none";
        button.textContent = "Show";
    }
    
});
