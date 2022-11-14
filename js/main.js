const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

function validationFirstName() {
    const fnameValue = fname.value.trim();
    const errorMsg = document.getElementById('errorMsg');
    const inputBox = document.getElementById('fn');
    

    if(fnameValue == "") {
        fname.classList.add('errorBorder');
        inputBox.classList.add('fnameBox');
        form.classList.add('invalidFirstName');
        errorMsg.innerHTML = 'First Name cannot be empty';
    }
    else{
        fname.classList.remove('errorBorder');
        inputBox.classList.remove('fnameBox');
        form.classList.remove('invalid');
        errorMsg.innerHTML = '';
    }
}

function validationLastName() {
    const lnameValue = lname.value.trim();
    const errorMsgLname = document.getElementById('errorMsgLname');
    const inputBox = document.getElementById('ln');

    if(lnameValue == "") {
        lname.classList.add('errorBorder');
        inputBox.classList.add('lnameBox');
        form.classList.add('invalidLastName');
        errorMsgLname.innerHTML = 'Last Name cannot be empty';
    }
    else{
        lname.classList.remove('errorBorder');
        inputBox.classList.remove('lnameBox');
        form.classList.remove('invalid');
        errorMsgLname.innerHTML = '';
    }
}

function validationEmail() {
    const emailValue = email.value.trim();
    const errorMsgEmail = document.getElementById('errorMsgEmail');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;
    const inputBox = document.getElementById('e');

    if(emailValue == '') {
        email.classList.add('errorBorder');
        inputBox.classList.add('emailBox');
        form.classList.add('invalid');
        errorMsgEmail.innerHTML = 'Email cannot be empty';
    }
    else if(!emailValue.match(emailPattern)) {
        email.classList.add('errorBorder');
        inputBox.classList.add('emailBox');
        form.classList.add('invalid');
        errorMsgEmail.innerHTML = 'Looks like this is not an email';
    }
    else{
        email.classList.remove('errorBorder');
        inputBox.classList.remove('emailBox');
        form.classList.remove('invalid');
        errorMsgEmail.innerHTML = '';
    }
}

function validationPassword() {
    const passwordValue = password.value.trim();
    const errorMsgPass = document.getElementById('errorMsgPass');
    const inputBox = document.getElementById('p');

    if(passwordValue == "") {
        password.classList.add('errorBorder');
        inputBox.classList.add('passBox');
        form.classList.add('invalid');
        errorMsgPass.innerHTML = 'Password cannot be empty';
    }
    else if(passwordValue.length < 4) {
        inputBox.classList.add('passBox');
        password.classList.add('errorBorder');
        errorMsgPass.innerHTML = 'Password is too short';
    }
    else{
        password.classList.remove('errorBorder');
        inputBox.classList.remove('passBox');
        form.classList.remove('invalid');
        errorMsgPass.innerHTML = '';
    }
}