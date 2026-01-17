let title;

document.getElementById("submit").onclick = function () {
    title = document.getElementById("input").value;
    document.getElementById("title").textContent = 'hello ' + title;
};
