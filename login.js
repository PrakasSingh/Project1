"use strict"
function validate(){
var email = document.getElementById("email").value;
var passcode = document.getElementById("passcode").value;

    //email
    if(email == ""){
        document.getElementById("msg").style.display = "none";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("emailerror").style.display = "block";
        return false;
    }
    else{
        document.getElementById("emailerror").style.display = "none";
    }
    //password
    if(passcode == ""){
        document.getElementById("passerror").style.display = "block";
        return false;
    }
    else{
        document.getElementById("passerror").style.display = "none";
        return true;
    }
}
document.myform.email.addEventListener("blur", validate);
document.myform.pass.addEventListener("keyup", validate);