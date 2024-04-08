function enterName() {
    var username = prompt("What is your name?");
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "Hello, " + username + "! I am Varun Gogia.";
}

function imageClicked() {
    var imgElement = document.getElementById("mepic");
    imgElement.classList.toggle("enlargePic");
}

function navHover(element) {
    element.style.color = "#ffffff";
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

// Accessibility
function fontSize(size) {
    var body = document.body;
    if(size === 'small') {
        body.style.fontSize = '10px'; // small size
    } else if(size === 'normal') {
        body.style.fontSize = '16px'; // regular size
    } else if(size === 'large') {
        body.style.fontSize = '22px'; // large size
    }
}

var defaultBG = false; // current color
function colourToggle() { 
    var body = document.body;
    var main = document.querySelector('.main');
    var social = document.querySelector('.socials');
    var main2 = document.querySelector('.main2');
    defaultBG = !defaultBG;
    
    if (defaultBG) { // colours when toggled
        body.style.backgroundColor = "#226D9E";
        main.style.backgroundColor = "#38A3EA";
        main.style.color = "#000000";
        social.style.backgroundColor = "#38A3EA";
        main2.style.backgroundColor = "#38A3EA";
    } else { // revert
        body.style.backgroundColor = "#105179";
        main.style.backgroundColor = "#729a5b79";
        main.style.color = "#ffffff";
        social.style.backgroundColor = "#729a5b79";
        main2.style.backgroundColor = "#729a5b79";
    }
}