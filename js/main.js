// Elements  :
const menuIcn = document.querySelector('.menu-icon');



menuIcn.addEventListener("click", function(){
    menuIcn.classList.toggle('active');
    console.log('clicked');
});