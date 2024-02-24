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
    element.style.color = "#42f5b6";
}

function navNoHover(element) {
    element.style.color = "";
}