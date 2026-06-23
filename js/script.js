const apiUrl = 'http://127.0.0.1:8000';
const tokenCookieName = "accesToken";
const roleCookieName = "role";
const signoutBtn = document.getElementById("signout-btn");
signoutBtn.addEventListener('click', signout);

function getRoles(){

    return getCookie(roleCookieName);
}

function signout(){

    eraseCookie(tokenCookieName);
    eraseCookie(roleCookieName);
    window.location.reload();
}
function setToken(token){

    setCookie(tokenCookieName, token, 7)
    
}

function getToken(){

    return getCookie(tokenCookieName)
}


function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


function isConnected(){

    if(getToken() == null || getToken() == undefined){

         return false

    } else {

        return true
    }
}

function showHideElements(){

    const userConnected = isConnected();
    const role = getRoles();

    let allElement = document.querySelectorAll('[data-show]');


       allElement.forEach(element => {
        

         switch(element.dataset.show){

            case 'disconnected':
                if(userConnected){
                    element.classList.add("d-none")
                }
                break;
             case 'connected':
                 if(!userConnected){
                    element.classList.add("d-none")
                }
                break;
             case 'admin':
                 if(!userConnected || role != "admin" ){
                    element.classList.add("d-none")
                }
                break;
             case 'client':
                 if(!userConnected || role != "client" ){
                    element.classList.add("d-none")
                }
                break
       }
       });

   

}

function sanitizeHtml(text){

    let tempHtml = document.createElement('div');
    tempHtml.textContent = text;
    return tempHtml.innerHTML;
}


function getInfoUser(){

     let myHeaders = new Headers();
     myHeaders.append( "X-AUTH-TOKEN",getToken());
   

     let requestOptions = {
        method: 'Get',
        headers: myHeaders,
        redirect: 'follow'
    };


   fetch(apiUrl + "/api/account/me", requestOptions)

    .then( Response => {

        if(Response.ok){
         return Response.json();

        }else{
            console.log('impossible de récuperer les données')
        }
        
    })
    .then( result => {

        return result;
    })
    .catch(error => {

        cpnsole.error("errur lors de la récuperation des données",error)
    });
   


        
    


}