var ham = document.querySelector(".fa-bars");
var men = document.querySelector(".menu");
var pic = document.querySelector(".pichead");

ham.addEventListener("click", () =>{
    if(men.classList.contains("active")){
        men.style.height = "0";
    }else{
        men.style.height = "250px";
    }
    men.classList.toggle("active");
});