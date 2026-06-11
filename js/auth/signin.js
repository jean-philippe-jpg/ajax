const inputEmail = document.getElementById("inputEmail1");
const inputPassword = document.getElementById("inputPassword");
const btnSignin = document.getElementById("btnSignin");


btnSignin.addEventListener("click", checkCredidential);


function  checkCredidential(){

    if(inputEmail.value == 'champion@gmail.com' && inputPassword.value == '12345'){

            const token = "gdxdgfhngbjhnlqsdsncbkh";
            setToken(token);
            setCookie(roleCookieName, "admin", 7);
        window.location.replace("/");
    } else{

    inputEmail.classList.add("is-invalid");
    inputPassword.classList.add("is-invalid");
    }

}