function enterName(){
    var username = prompt("What is your name?");
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "Hello, " + username + "! I am Varun Gogia.";
}

function imageClicked(){
    var imgElement = document.getElementById("mepic");
    imgElement.classList.toggle("enlargePic");
}

function navHover(element) {
    element.style.color = "#00a6ed";
}

function navNoHover(element) {
    element.style.color = "";
}

function dropFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
    }
    }
    }