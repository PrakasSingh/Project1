//Menu bar
function menu(){
    let mobilebrand = document.querySelector("#mobibrand i");
    let mobilecontainer = document.querySelector(".mobicontainer");
    console.log(mobilebrand);
    mobilebrand.addEventListener("click", function(){
    mobilecontainer.classList.toggle("active");
});
}
menu();
//Sign Up
