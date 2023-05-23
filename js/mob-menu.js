var burger = document.querySelector('.burger');
var closeButton = document.querySelector('.btn-close');
var menu = document.querySelector('.menu');
var logo = document.querySelector('.logo__mobmenu');

burger.addEventListener('click', function(event) {
if (!burger.classList.contains('active')) {
    burger.classList.add('active');
    menu.classList.add('active');
    logo.classList.add('active');
    document.documentElement.classList.add('lock');
    closeButton.classList.add('active');
} else {
    burger.classList.remove('active');
    menu.classList.remove('active');
    logo.classList.remove('active');
    document.documentElement.classList.remove('lock');
    closeButton.classList.remove('active');
    }
});

closeButton.addEventListener('click', function(event) {
    burger.classList.remove('active');
    menu.classList.remove('active');
    logo.classList.remove('active');
    document.documentElement.classList.remove('lock');
    closeButton.classList.remove('active');
});

function closeNav() {
    var closemenu = document.querySelector('.menu');
    var closeburger = document.querySelector('.burger');
    closemenu.classList.remove('active');
    closeburger.classList.remove('active');
    logo.classList.remove('active');
    closeButton.classList.remove('active');
    document.documentElement.classList.remove('lock');
}