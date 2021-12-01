var toggleBtn;
var bigWrapper;
var hamburgerMenu;

function declare() { 
    toggleBtn = document.querySelector(".toggle-btn");
    bigWrapper = document.querySelector(".big-wrapper");
    hamburgerMenu = document.querySelector(".hamburger-menu");
 }

const main = document.querySelector("main");

declare();

let dark = false;

function animationToggle(){
    dark = !dark;
    let clone = bigWrapper.cloneNode(true);
    if (dark){
        clone.classList.remove("light");
        clone.classList.add("dark");
    }else{
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy");
    main.appendChild(clone);

    clone.addEventListener("animationend", () => {
        bigWrapper.remove();
        clone.classList.remove("copy");
        declare();
        events();
    }); 
}

function events() { 
    toggleBtn.addEventListener('click', animationToggle);
    hamburgerMenu.addEventListener("click", () => {
        bigWrapper.classList.toggle("active");
    });
 }

 events();