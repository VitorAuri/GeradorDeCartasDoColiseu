/*Nome do Jogador*/
function nome(){
    let nome = document.getElementById('nome').value
    document.getElementById('nome-p').innerText = nome
    console.log(nome)
}

/*Estrelas-Custo*/
estrela.addEventListener('change', function(){
    estrelas.src = document.getElementById('estrela').value
    document.getElementById('custo-p').innerHTML = estrela.options[estrela.selectedIndex].getAttribute("data-value")
}) 

/*Hierarquia*/
hierarquia.addEventListener('change', function(){
    const hierarquia = document.getElementById('hierarquia').value
    document.getElementById('hierarquia-pID').innerHTML = hierarquia
})

/*Lenda Selecionada*/
const personagens = document.getElementById('personagens')
const lendaNome = document.getElementById('lenda-p')
const splashArt = document.getElementById('splashArt')
const personagem = document.getElementById('personagem')

personagens.addEventListener('change', function () {

    splashArt.src = personagens.options[personagens.selectedIndex].getAttribute("value-name")
    lendaNome.innerHTML = personagens.options[personagens.selectedIndex].getAttribute("data-value")
    personagem.src = personagens.options[personagens.selectedIndex].getAttribute("value")
    
});

/*Moldura*/
const moldura = document.getElementById('moldura')
const clã = document.getElementById('clã')
const fundo = document.getElementById('fundo')
clã.addEventListener('change', function(){
    moldura.src = clã.value
    fundo.src = clã.options[clã.selectedIndex].getAttribute("data-value")
});