let myNavLinkMenus = document.querySelectorAll(".nav-link");
let myNavLinkMenu = document.getElementById("nav-link-menu");
myNavLinkMenu.addEventListener("click", seeMe);

function seeMe(){
    myNavLinkMenus.forEach(function(oneItemMenu){
        if(oneItemMenu.style.display === "flex"){
            oneItemMenu.style.display = "none";
        }else{
            oneItemMenu.style.display = "flex";
            oneItemMenu.animate([
                { transform: 'translateY(-10px)' },
                { transform: 'translateY(0px)' }
              ], {
                duration: 1000,
              });
            oneItemMenu.style.borderBottom = "1px solid rgba(240, 248, 255,1)";
        }
    })
}