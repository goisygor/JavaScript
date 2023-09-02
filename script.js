const $lucesDelCirculo = document.querySelectorAll('.luces-circulo');
let contadorDeLuz = 0;

const mostrarLuz = () =>{
    $lucesDelCirculo[contadorDeLuz].className = 'luces-circulo';
    contadorDeLuz++;

    if(contadorDeLuz > 2) contadorDeLuz = 0;

    const luzActual = $lucesDelCirculo[contadorDeLuz];
    luzActual.classList.add(luzActual.getAttribute('color'))

    const botao1 = document.getElementById('botao1');
    const botao2 = document.getElementById('botao2');
    const botao3 = document.getElementById('botao3');
    const botao4 = document.getElementById('botao4');

    botao1.addEventListener('click',
    function(){
        alert('botao 1 clicado');
    });
    botao2.addEventListener('click',
    function(){
        alert('botao 2 clicado');
    });
    botao3.addEventListener('click',
    function(){
        alert('botao 3 clicado');
    });

        botao4.addEventListener('click',
        function(){
            alert('botao 4 clicado');
        });
}