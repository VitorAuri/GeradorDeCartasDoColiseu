/*Lenda Selecionada*/
const personagens = document.getElementById('personagens')
const lendaNome = document.getElementById('lenda-p')
const personagem = document.getElementById('personagem')

personagens.addEventListener('change', function () {
    lendaNome.innerHTML = personagens.options[personagens.selectedIndex].getAttribute("data-value")
    personagem.src =  personagens.options[personagens.selectedIndex].getAttribute("value")
});