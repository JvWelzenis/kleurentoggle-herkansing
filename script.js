let toggleNavStatus = false;

const toggleNav = function() {
  const getSidebar = document.querySelector(".nav-sidebar");
  const getSidebarUl = document.querySelector(".nav-sidebar ul");
  const getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "272px";
   
    
    let arrayLength  = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
        getSidebarLinks[i].style.opacity = "1";
    }

    toggleNavStatus = true;
  }

  else if (toggleNavStatus === true) {
    
    getSidebar.style.width = "50px";
   
    
    let arrayLength  = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
        getSidebarLinks[i].style.opacity = "0";
    }

    getSidebarUl.style.visibility = "hidden";

    toggleNavStatus = false;
  }
}




home.addEventListener("click", ()=>{
    document.body.style.background = "#f1f1f1";
    toggleNav();
})


red.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "red";
    toggleNav();
})

orange.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "orange";
    toggleNav();
})

yellow.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "yellow";
    toggleNav();
})

green.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "green";
    toggleNav();
})

blue.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "blue";
    toggleNav();
})

purple.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "purple";
    toggleNav();
})



//let button = document.querySelector('#button'); let msg = document.querySelector('#message'); button.addEventListener('click', ()=>{ msg.classList.toggle('reveal'); }) 