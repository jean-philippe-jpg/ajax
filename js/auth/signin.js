const inputEmail = document.getElementById("inputEmail1");
const inputPassword = document.getElementById("inputPassword");
const signinForm = document.getElementById("signin-form");
// const apiUrl = 'http://127.0.0.1:8000/api/login';
const btnSignin = document.getElementById("btnSignin");


btnSignin.addEventListener("click", checkCredentials);


function checkCredentials(){
    let dataForm = new FormData(signinForm);
    
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        "username": dataForm.get("email"),
        "password": dataForm.get("password")
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch( "http://127.0.0.1:8000/api/login", requestOptions)
    .then(response => {
        if(response.ok){
            return response.json();
        }
        else{
            inputEmail.classList.add("is-invalid");
           inputPassword.classList.add("is-invalid");
        }
    })
    .then(result => {
        const token = result.apiToken;
        setToken(token);
        //placer ce token en cookie

        setCookie(roleCookieName, result.roles[0], 7);
        window.location.replace("/");
    })
    .catch(error => console.log('error', error));
}