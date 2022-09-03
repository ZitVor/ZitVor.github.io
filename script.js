const burgermenu = document.querySelector('.burger-menu');
if(burgermenu){
    const menuBody = document.querySelector('.menu__body');
    burgermenu.addEventListener("click", function(e){
        burgermenu.classList.toggle('_active');
        menuBody.classList.toggle('_active')
    })
}