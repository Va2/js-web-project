// Get the modal
const modal = document.getElementById('connexionModal');
// Get the button that opens the modal
const connexionBtn = document.getElementById('connexionBtn');
// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];
// Get the login button that change the form
const loginBtn = document.getElementById('loginBtn');
// Get the sign up button that change the form
const signUpBtn = document.getElementById('signUpBtn');
// Get the login form
const loginForm = document.getElementById('login');
// Get the sign up form
const signUpForm = document.getElementById('signUp');

// When the user clicks the connexion button it opens the modal 
connexionBtn.addEventListener('click', () => {
    modal.style.display = 'block';
})

// When the user clicks on <span> (x), close the modal
span.addEventListener('click', () => {
    modal.style.display = 'none';
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
})

loginBtn.addEventListener('click', () => {
    loginForm.classList.remove('d-none');
    signUpForm.classList.add('d-none');
    loginBtn.classList.add('active');
    signUpBtn.classList.remove('active');
})

signUpBtn.addEventListener('click', () => {
    loginForm.classList.add('d-none');
    signUpForm.classList.remove('d-none');
    loginBtn.classList.remove('active');
    signUpBtn.classList.add('active');
})