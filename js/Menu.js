window.addEventListener("scroll", function(){
    var header = this.document.querySelector('.nav-fake');
    header.classList.toggle("down",window.scrollY > 50);
})

window.addEventListener("scroll", function(){
    var texto = document.querySelectorAll(".c-titulo")[0];
    var altura = window.innerHeight/4;
    var distancia = texto.getBoundingClientRect().top;

    console.log(altura)
    console.log(distancia)


        texto.classList.add('transform-up')
    if( distancia <= altura){
            texto.classList.add('aparece');
    } else {
        texto.classList.remove('aparece');
    }
})