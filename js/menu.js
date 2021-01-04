const menu = document.querySelector('.menu');
const menu_nave = document.querySelector('.menu-navegacion');

// console.log(menu_nave);
// console.log(menu);

menu.addEventListener('click' , ()=>{
    menu_nave.classList.toggle("spread")
})

window.addEventListener('click' , e=>{
    if(menu_nave.classList.contains('spread')
        && e.target != menu_nave && e.target != menu    ){
            
            menu_nave.classList.toggle("spread")
    }
})





