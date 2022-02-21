const 
    setas = document.querySelectorAll('.seta'), 
    respostas = document.querySelectorAll('.resposta'), 
    perguntas = document.querySelectorAll('.pergunta');

setas.forEach((seta, index) => {
    seta.addEventListener('click', () => {
        respostas[index].classList.toggle('resposta-active');
        perguntas[index].classList.toggle('pergunta-active');
    });
});