/*Nome do Jogador*/
function nome(){
    const nome = document.getElementById('nome').value
    document.getElementById('nome-p').innerText = nome
    console.log(nome)
}

/*Estrelas-Custo*/
estrela.addEventListener('change', function(){
    estrelas.src = document.getElementById('estrela').value
    document.getElementById('custo-num').innerHTML = estrela.options[estrela.selectedIndex].getAttribute("data-value")
}) 

/*Hierarquia*/
hierarquia.addEventListener('change', function(){
    const hierarquia = document.getElementById('hierarquia').value
    document.getElementById('hierarquia-pID').innerHTML = hierarquia
})

/*Moldura*/
const moldura = document.getElementById('moldura')
const clã = document.getElementById('clã')
const fundo = document.getElementById('fundo')


const custoNumero = document.getElementById('custo-num')
const custoParagrafo = document.getElementById('custo-p')
const nomeJogador = document.getElementById('nome-p')
const hierarquiaCor = document.getElementById('hierarquia-pID')


const nomesClãs = [
    'berllot',
    'bichos',
    'ulgrimnism',
    'firebirds',
]
const classes = [
    'Nome',
    'Custo',
    'LendaEHierarquia',
]
function removerClasses(){
    for(i=0; i<=3; i++){
        lendaNome.classList.remove(nomesClãs[i]+classes[0])
        custoNumero.classList.remove(nomesClãs[i]+classes[1])
        custoParagrafo.classList.remove(nomesClãs[i]+classes[1])

        nomeJogador.classList.remove(nomesClãs[i]+classes[2])
        hierarquiaCor.classList.remove(nomesClãs[i]+classes[1])
    }
}
let index = 0
function adicionarClasses(){
    lendaNome.classList.add(nomesClãs[index]+classes[0])
    custoNumero.classList.add(nomesClãs[index]+classes[1])
    custoParagrafo.classList.add(nomesClãs[index]+classes[1])
    nomeJogador.classList.add(nomesClãs[index]+classes[2])
    hierarquiaCor.classList.add(nomesClãs[index]+classes[1])
    index = 0
}
clã.addEventListener('change', function(){
    /*Fundo e Moldura de cada Clã*/
    moldura.src = clã.value
    fundo.src = clã.options[clã.selectedIndex].getAttribute("data-value")

    /*Mudar Cor de Acordo com Clã Selecionado*/
    let cor = clã.options[clã.selectedIndex].getAttribute("color-data")
    if(cor === 'berllot'){
        removerClasses()
        adicionarClasses()
    }
    else if(cor === 'bichos-do-mato'){
        removerClasses()
        index += 1
        adicionarClasses()
    }
    else if(cor === 'ulgrimnism'){
        removerClasses()
        index += 2
        adicionarClasses()
    }
    else if(cor === 'firebirds'){
        removerClasses()
        index += 3
        adicionarClasses()
    }
});