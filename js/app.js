let myNavLinkMenus = document.querySelectorAll(".nav-link");

let myNavLinkMenu = document.getElementById("nav-link-menu");
myNavLinkMenu.addEventListener("click", seeMe);

function seeMe(){
    myNavLinkMenus.forEach(function(oneItemMenu){
        if(oneItemMenu.style.display === "flex"){
            oneItemMenu.style.display = "none";
        }else{
            oneItemMenu.style.display = "flex";
        }
    })
}