const inputNom = document.getElementById("firstName");
const inputPrenom = document.getElementById("lastName");
const inputMail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("InputPassword");
const inputValidationPassword = document.getElementById("valideInputPassword");
const formSignup = document.getElementById("form-signup");
const btnValidation = document.getElementById("btnValidate");


inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);
btnValidation.addEventListener("click", signupUser);

function validateForm(){

    const nomOk = validateRequired(inputNom);
    const prenomOk =   validateRequired(inputPrenom);
    const emailOk = validateMail(inputMail);
    const passwordOk = validatePassword(inputPassword);
    const confPasswordOk = confPassword(inputPassword, inputValidationPassword);
   

    if(nomOk && prenomOk && emailOk && passwordOk && confPasswordOk){

        btnValidation.disabled = false
        
    } else{ 

        btnValidation.disabled = true
    }

}


function confPassword(inputPwd, inputConfPwd){
    

    if(inputConfPwd.value != '' &&  inputConfPwd.value == inputPwd.value){
       inputConfPwd.classList.add("is-valid");
       inputConfPwd.classList.remove("is-invalid");

       return true;
    } else{
        inputConfPwd.classList.remove("is-valid");
        inputConfPwd.classList.add("is-invalid");

        return false;

    }

}


function validateMail(input){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;

    if(mailUser.match(emailRegex)){
       input.classList.add("is-valid");
       input.classList.remove("is-invalid");

       return true;
    } else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");

        return false;

    }

}

function validatePassword(input){

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;

    if(passwordUser.match(passwordRegex)){

         input.classList.add("is-valid");
         input.classList.remove("is-invalid");

        return true;

    } else {

        input.classList.remove("is-valid");
        input.classList.add("is-invalid");

        return false;

    }

}

function validateRequired(input){

    if(input.value != ''){
       input.classList.add("is-valid");
       input.classList.remove("is-invalid");

       return true;
    } else{
        
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");

        return false;

    }
}

function signupUser(){

let formData = new FormData(formSignup);

    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "firstName": formData.get('firstName'),
  "lastName": formData.get('lastName'),
  "email": formData.get('email'),
  "password": formData.get('password')
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://127.0.0.1:8000/api/registration", requestOptions)
  .then((response) => {

            if(response.ok){
            return response.json();
        }
        else{
            alert("Erreur lors de l'inscription");
        }
  })
  .then((result) => {


     alert("Bravo "+ formData.get("firstName")+", vous êtes maintenant inscrit, vous pouvez vous connecter.");
        document.location.href="/signin";
  })
  .catch((error) => console.error(error));

}

var titi = "toto";