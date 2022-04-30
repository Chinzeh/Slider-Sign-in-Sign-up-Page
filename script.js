const signUpButton = window.signUp;
const signInButton = window.signIn;
const container = window.container;

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active')
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active')
});


