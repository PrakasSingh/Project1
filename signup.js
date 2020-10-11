function validate(){
var first = document.getElementById("first").value;
var last = document.getElementById("last").value;
var num = document.getElementById("num").value;
var mail = document.getElementById("mail").value;
var passcode = document.getElementById("passcode").value;

var fname = /^[A-Za-z. ]{1,15}$/;
var lname = /^[A-Za-z]{1,15}$/;
var number = /^[+][0-9][1-9]\d{10}$/;
var email = /^[A-Za-z0-9._]{2,}@[A-Za-z]{3,}[.]{1,1}[A-Za-z.]{2,6}$/;
var pass = /^(?=.*[A-Z])(?=.*[~!@#$%^&*])[a-zA-Z0-9~!@#$%678]{8,16}$/;

if(first == ""){
    document.getElementById("main").style.visibility = "visible";
    return false;
}
else if(fname.test(first)){
    document.getElementById("first").style.borderColor = "green";
    document.getElementById("name").style.visibility = "hidden";
}
else{
    document.getElementById("first").style.borderColor = "red";
    document.getElementById("name").style.visibility = "visible";
    document.getElementById("name").style.color = "red";
    return false;
}

//last name
if(last == ""){
    return false;
}
else if(lname.test(last)){
    document.getElementById("last").style.borderColor = "green";
    document.getElementById("sirname").style.visibility = "hidden";
}
else{
    document.getElementById("last").style.borderColor = "red";
    document.getElementById("sirname").style.visibility = "visible";
    document.getElementById("sirname").style.color = "red";
    return false;
}

//number
if(num == ""){
    return false;
}
else if(number.test(num)){
    document.getElementById("num").style.borderColor = "green";
    document.getElementById("mobnumber").style.visibility = "hidden";
}
else{
    document.getElementById("num").style.borderColor = "red";
    document.getElementById("mobnumber").style.visibility = "visible";
    document.getElementById("mobnumber").style.color = "red";
    return false;
}

//email
if(mail == ""){
    return false;
}
else if(email.test(mail)){
    document.getElementById("mail").style.borderColor = "green";
    document.getElementById("mailerror").style.visibility = "hidden";
}
else{
    document.getElementById("mail").style.borderColor = "red";
    document.getElementById("mailerror").style.visibility = "visible";
    document.getElementById("mailerror").style.color = "red";
    return false;
}

//password
if(passcode == ""){
    return false;
}
else if(pass.test(passcode)){
    document.getElementById("passcode").style.borderColor = "green";
    document.getElementById("password").style.visibility = "hidden";
}
else{
    document.getElementById("passcode").style.borderColor = "red";
    document.getElementById("password").style.visibility = "visible";
    document.getElementById("password").style.color = "red";
    return false;
}
}

document.myform.fname.addEventListener("keyup", validate);
document.myform.lname.addEventListener("keyup", validate);
document.myform.num.addEventListener("keyup", validate);
document.myform.Email.addEventListener("keyup", validate);
document.myform.pass.addEventListener("keyup", validate);

