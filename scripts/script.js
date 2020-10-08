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

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }    
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

