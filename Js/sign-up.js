const eyeOn = document.getElementById('eyeOn');
const eyeSlash = document.getElementById('eyeSlash');

const password_input = document.getElementById('exampleInputPassword1');

eyeOn.addEventListener('click', () => {
    eyeSlash.style.display = 'block';
    eyeOn.style.display = 'none';
    password_input.setAttribute("type", "text")
})
eyeSlash.addEventListener('click', () => {
    eyeSlash.style.display = 'none';
    eyeOn.style.display = 'block';
    password_input.setAttribute("type", "password")
})