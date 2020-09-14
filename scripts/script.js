// JavaScript Document
var menuButton =
    document.querySelector('#hamburger');
var nav = document.getElementById('navigation');

//menuButton.addEventListener('click', function () {
//    nav.classList.toggle('show-menu');
//});

menuButton.addEventListener('click', toonMenu)
    
function toonMenu() {
    nav.classList.toggle('show-menu');
}

