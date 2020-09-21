// JavaScript Document
var menuButton = document.querySelector('#hamburger');
var nav = document.getElementById('navigation');

menuButton.addEventListener('click', toonMenu)
    
function toonMenu() {
    nav.classList.toggle('show-menu');
}

var zoekButton = document.getElementById('zoek');
var zoekBalk = document.getElementById('zoekbalk');

zoekButton.addEventListener('click', toonBalk)
    
function toonBalk() {
    zoekBalk.classList.toggle('show-balk');
}

