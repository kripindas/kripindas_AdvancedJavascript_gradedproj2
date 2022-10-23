function login(){
    var userName = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    localStorage.setItem("username",userName);
    localStorage.setItem('password',password);
    validateCredentials(userName,password);
}

function validateCredentials(username,password){
    if(username == 'user' && password == 'pass'){
        window.location = 'resume.html';
    }else{
        const errorDiv = document.getElementById('invalidCredentials');
        errorDiv.textContent='Invalid username/password';
        errorDiv.style.color='red';
        clearInputs();
    }
}

function clearInputs(){
    document.getElementById('username').value='';
    document.getElementById('password').value='';
}
