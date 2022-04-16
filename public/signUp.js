const handleClick = async (event) => {

    let username = document.querySelector('#username').value;
    let email = document.querySelector('#signUpEmail').value;
    let password = document.querySelector('#signUpPassword').value;
    let confirm = document.querySelector('#confirmPassword').value;

    if(password != confirm) {
        alert('Password does not match! Please Re-Enter your password.');
        return
    }
    if (username && email && password) {
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({ username, email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            alert("USER CREATED");
            document.location.replace('/');
          } else {
            alert(response.statusText);
          }
        }
}

document.querySelector('#submitSignUp').addEventListener('click',handleClick);