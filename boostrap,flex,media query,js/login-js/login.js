function validation() {
    let isValidName = validName();
    let isValidPassword = validPassword();
    let isValidEmail = validEmail();

    return isValidName && isValidPassword && isValidEmail;
}

function validName() {
    var name = document.getElementById("username").value;
    var errName = document.getElementById("errName");
    var regEx = /^[A-Za-z]+$/;
    if (name == "") {
        errName.innerHTML = "Please enter your name";
        return false;
    } else if (!regEx.test(name)) {
        errName.innerHTML = "Please enter a valid name";
        return false;
    } else {
        errName.innerHTML = "";
        return true;
    }
}

function validPassword() {
    var password = document.getElementById("password").value;
    var errPassword = document.getElementById("errPassword");
    var regEx = /^[A-Za-z0-9_]+$/;
    if (password == "") {
        errPassword.innerHTML = "Please enter password";
        return false;
    } else if (!regEx.test(password)) {
        errPassword.innerHTML = "Please enter a valid password";
        return false;
    } else {
        errPassword.innerHTML = "";
        return true;
    }
}

function validEmail() {
    var email = document.getElementById("email").value;
    var errEmail = document.getElementById("errEmail");
    var regEx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (email == "") {
        errEmail.innerHTML = "Please enter your email";
        return false;
    } else if (!regEx.test(email)) {
        errEmail.innerHTML = "Please enter a valid email";
        return false;
    } else {
        errEmail.innerHTML = "";
        return true;
    }
}

function resetForm() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("email").value = "";

    document.getElementById("errName").innerHTML = "";
    document.getElementById("errPassword").innerHTML = "";
    document.getElementById("errEmail").innerHTML = "";
}
