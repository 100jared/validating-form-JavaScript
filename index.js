const heading = "This is my js practice"
const body = document.body;

document.title = heading;
document.body.style.backgroundColor = "magenta";

const formTitle = document.getElementById('heading');
formTitle.innerHTML = '<u> sign up </u>';

const form = document.getElementById('form');
function handleForm(event){
    event.preventDefault();
}
form.addEventListener('submit', handleForm);
function myFunction(){
    const username = document.getElementById('username').value 
    const email = document.getElementById('email').value

    const signup = document.getElementById('signup')

    signup.style.display = "none";

    const welcome = document.getElementById('welcome').innerHTML = `welcome ${username}`;
    // welcome.style.backgroundColor='red';

    localStorage.setItem('email', email);

    const myItem = localStorage.getItem('email')

    body.append(myItem)

    console.log(email);
}