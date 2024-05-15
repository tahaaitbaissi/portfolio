var users = [{username : "taha", password : "tahataha"}];

function toggleForm() {
    var loginForm = document.getElementById('loginForm');
    var signupForm = document.getElementById('signupForm'); 

    if (loginForm.style.display === 'none') {
        document.title = 'Login';
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    } else {
        document.title = 'Sign Up';
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}

function login() {
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    if (username == '') {
        document.getElementById('s2').innerHTML = 'name must be filled out';
    }

    if (password == '') {
        document.getElementById('s2').innerHTML = 'password must be filled out';
    }

    var user = {username: username, password: password};

    for (var i = 0; i < users.length; i++) {
        if (users[i].username == user.username && users[i].password == user.password) {
            document.getElementById('s2').innerHTML = 'Login successful';
            window.location.href = "index.html";
        }
    }

    document.getElementById('s2').innerHTML = 'password and username do not match';
}

function signup() {
    var username = document.getElementById('signupUsername').value;
    var fullName = document.getElementById('signupFullName').value;
    var email = document.getElementById('signupEmail').value;
    var phone = document.getElementById('signupPhone').value;
    var age = document.getElementById('signupAge').value;
    var password = document.getElementById('signupPassword').value;
    var flag = 1;


    if (username == '') {
        document.getElementById('s3').innerHTML = 'name must be filled out';
        flag = 0;
    }

    if (password == '') {
        document.getElementById('s3').innerHTML = 'password must be filled out';
        flag = 0;
    }

    if (fullName == '') {
        document.getElementById('s3').innerHTML = 'name must be filled out';
        flag = 0;
    }

    if (email == '') {
        document.getElementById('s3').innerHTML = 'email must be filled out';
        flag = 0;
    }

    if (phone == '') {
        document.getElementById('s3').innerHTML = 'phone must be filled out';
        flag = 0;
    }

    if (age == '') {
        document.getElementById('s3').innerHTML = 'age must be filled out';
        flag = 0;
    }


    if (password.length < 8) {
        document.getElementById('s3').innerHTML = 'Password must be at least 8 characters';
        flag = 0;
        
    }

    var user = {username: username, password: password};

    for (var i = 0; i < users.length; i++) {
        if (users[i].username == user.username) {
            document.getElementById('s3').innerHTML = 'username already exists';
            flag = 0;
        }
    }

    if (flag) {
        users.push(user);
        document.getElementById('s3').innerHTML = 'Signup successful';
        username.value = '';
        fullName.value = '';
        email.value = '';
        phone.value = '';
        age.value = '';
        password.value = '';
        window.location.href = "index.html";
    }
}