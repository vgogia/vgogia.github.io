var username = prompt("What is your name?"); // Ask user to enter name and store in variable 'username'
alert("Welcome " + username + " to my website!"); // Display welcome message with user's name

window.onload = function() {
    var h1Element = document.querySelector("h1"); // Select the H1 element and store in variable
    h1Element.style.fontFamily = "Times New Roman"; // Change DOM element font
    h1Element.style.backgroundColor = "cyan"; // Change DOM element H1 backgound colour
    h1Element.innerHTML = "I am Varun Gogia"; // Use innerHTML to change text of main heading H1
};