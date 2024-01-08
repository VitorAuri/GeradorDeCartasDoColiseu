/*Lenda Selecionada*/
const personagens = document.getElementById('personagens')
const lendaNome = document.getElementById('lenda-p')
const personagem = document.getElementById('personagem')
const incaseCrossover = document.getElementById('incaseCrossover')

personagens.addEventListener('change', function(){
    lendaNome.innerHTML = personagens.options[personagens.selectedIndex].getAttribute("data-value")
    personagem.src =  personagens.options[personagens.selectedIndex].getAttribute("value")
});

const crossovers = document.getElementById('crossovers')

crossovers.addEventListener('change', function(){
    lendaNome.innerHTML = crossovers.options[crossovers.selectedIndex].getAttribute("data-value")
    personagem.src = crossovers.options[crossovers.selectedIndex].getAttribute("value")
})

const ativarCrossovers = document.getElementById('ativarCrossovers')
const desativarCrossovers = document.getElementById('desativarCrossovers')
function ativar(){
    incaseCrossover.innerText = "Selecione o Crossover"
    ativarCrossovers.classList.add('display')
    personagens.classList.add('display')
    crossovers.classList.remove('display')
    desativarCrossovers.classList.remove('display')
}
function desativar(){
    incaseCrossover.innerText = "Selecione a Lenda"
    ativarCrossovers.classList.remove('display')
    personagens.classList.remove('display')
    crossovers.classList.add('display')
    desativarCrossovers.classList.add('display')
}