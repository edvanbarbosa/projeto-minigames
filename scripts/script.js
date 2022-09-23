var instrucoes = document.getElementById('instrucoes')
var click = document.getElementById('click-instrucoes')

click.addEventListener('click' , clicar)

function clicar(){
    instrucoes.style.display = 'block'
    document.getElementById('inicio').style.display = 'none'
}