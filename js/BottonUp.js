window.onscroll = function (){
    if ( document.documentElement.scrollTop > 400){
        document.querySelector('.caja-ir-arriba')
        .classList.add('show');
    } else {
        document.querySelector('.caja-ir-arriba')
        .classList.remove('show');
    }
}

document.querySelector('.caja-ir-arriba')
.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});