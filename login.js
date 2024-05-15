var users = [{username : "taha", password : "tahataha"}];

function login() {
    var in3 = document.getElementById('in3').value;
    var in4 = document.getElementById('in4').value;

    if (in3 == '') {
        document.getElementById('s2').innerHTML = 'name must be filled out';
        return false;
    }

    if (in4 == '') {
        document.getElementById('s2').innerHTML = 'password must be filled out';
        return false;
    }

    var user = {username: in3, password: in4};

    for (var i = 0; i < users.length; i++) {
        if (users[i].username == user.username && users[i].password == user.password) {
            document.getElementById('s2').innerHTML = 'Login successful';
            return true;
        }
    }

    document.getElementById('s2').innerHTML = 'password and username do not match';
    return false;
}

function showPass() {
    var x = document.getElementById('in4');
    if (x.type === 'password') {
        x.type = 'text';
    } else {
        x.type = 'password';
    }
}

function signup() {
    var in1 = document.getElementById('in1').value;
    var in2 = document.getElementById('in2').value;

    if (in1 == '') {
        document.getElementById('s1').innerHTML = 'name must be filled out';
        return false;
    }

    if (in2 == '') {
        document.getElementById('s1').innerHTML = 'password must be filled out';
        return false;
    }

    if (in2.length < 8) {
        document.getElementById('s1').innerHTML = 'Password must be at least 8 characters';
        return false;
    }

    var user = {username: in1, password: in2};

    for (var i = 0; i < users.length; i++) {
        if (users[i].username == user.username) {
            document.getElementById('s1').innerHTML = 'username already exists';
            return false;
        }
    }

    users.push(user);
    document.getElementById('s1').innerHTML = 'Signup successful';
    document.getElementById('in1').value = '';
    document.getElementById('in2').value = '';
    return true;
}

function showPass2() {
    var x = document.getElementById('in2');
    if (x.type === 'password') {
        x.type = 'text';
    } else {
        x.type = 'password';
    }
}
