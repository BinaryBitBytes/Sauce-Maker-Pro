document.querySelector('#submit').addEventListener('click',handleClick);

function handleClick() {
    let user = document.querySelector('#username').value;
    let email = document.querySelector('#email').value;
    let pw = document.querySelector('#password').value;
    let confirm = document.querySelector('#confirmPassword').value;

    if(pw != confirm) {
        alert('Password does not match! Please Re-Enter your password.');
    }
}