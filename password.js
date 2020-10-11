function verify(){
    var numb = document.getElementById("numb").value;

    var number = /^[0-9]$/;
    if(numb == ""){
        document.getElementById("msg").style.display = "block";
        return false;
    }
    else if(!number.test(numb)){
        document.getElementById("error").innerHTML = "No search results";
        document.getElementById("error1").innerHTML = "Your search did not return any results. Please try again with other information.";
        document.getElementById("msg").style.display = "block";
        return false;
    }
    else{
        return true;
    }
}
