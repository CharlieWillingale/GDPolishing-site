let navBurger = document.getElementsByClassName("burger")[0]
let navContainer = document.getElementsByClassName("nav-container")[0]
var elementTarget = document.getElementsByClassName("page-title")[0]

const onNavClick = () =>{
    
    navContainer.classList.toggle("reveal-nav")
    navBurger.classList.toggle("reveal-nav-burger")
}

navBurger.addEventListener("click", onNavClick)

window.addEventListener("scroll", () => {
     
    if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
        navBurger.classList.add("burger-background")   
    }
    else{
        navBurger.classList.remove("burger-background")  
    }
})

