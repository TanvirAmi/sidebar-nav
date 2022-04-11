const burgerMenu = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

burgerMenu.addEventListener("click", function(){
    //console.log(sidebar.classList);
    if(sidebar.classList.contains("show-sidebar")){
        sidebar.classList.remove("show-sidebar");
    }
    else{
        sidebar.classList.add("show-sidebar");
    }
});

closeBtn.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar");
});