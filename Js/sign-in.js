const staffEmail = "staff123@gmail.com";
const adminEmail = "admin123@gmail.com";
const adminPassword = "admin123";
const staffPassword = "staff123";

const eyeOn = document.getElementById('eyeOn');
const eyeSlash = document.getElementById('eyeSlash');

const email_input = document.getElementById('exampleInputEmail1');
const password_input = document.getElementById('exampleInputPassword1');
const login_btn = document.getElementById('login-btn');

login_btn.addEventListener('click', ()=>{
    if(password_input.value == staffPassword && email_input.value == staffEmail){
        window.location.href = "pos.html";
    }  
    else if(password_input.value == adminPassword && email_input.value == adminEmail){
        window.location.href = "adminDashBoard.html";
    }else {
        alert("Invalid email or password!");
    }
});

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