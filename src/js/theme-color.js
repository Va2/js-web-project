// CHANGE THEME MAIN COLOR (BLACK or WHITE)
const whiteBtnElt = document.querySelector('header .btn-light');
const blackBtnElt = document.querySelector('header .btn-dark');
const connexionBtnElt = document.querySelector('header .btn-secondary');
const header = document.getElementsByTagName('header')[0];
const navbar = document.getElementById('navbar');
const navIcon = document.getElementById('nav-icon');
const activeLinkElt = document.getElementsByClassName('active')[0];
const footer = document.getElementById('copyright');

whiteBtnElt.addEventListener('click', () => {
    header.style.backgroundColor = '#fff';
    navbar.style.backgroundColor = '#fff';
    header.style.color = '#000';
    navIcon.style.color = '#000';
    activeLinkElt.style.color = '#000';
    blackBtnElt.style.borderColor = '#000';
    connexionBtnElt.style.backgroundColor = '#000';
    connexionBtnElt.style.color = '#fff';
    footer.style.backgroundColor = '#000';
})

blackBtnElt.addEventListener('click', () => {
    header.style.backgroundColor = '#000';
    navbar.style.backgroundColor = '#000';
    header.style.color = '#fff';
    navIcon.style.color = '#fff';
    activeLinkElt.style.color = '#fff';
    blackBtnElt.style.borderColor = '#fff';
    connexionBtnElt.style.backgroundColor = '#fff';
    connexionBtnElt.style.color = '#000';
    footer.style.backgroundColor = '#fff';
})