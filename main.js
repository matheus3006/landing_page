const singUpButton = document.getElementById('signUp');
const singInButton = document.getElementById('signIn');
const container= document.getElementById('container');

singUpButton.addEventListener('click', ()=>{
    container.classList.add('right-panel-active');
});
singInButton.addEventListener('click', ()=>{
    container.classList.remove('right-panel-active');
});
