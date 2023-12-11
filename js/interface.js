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
const hierarquia = document.getElementById('hierarquia')
const hierarquiaTitulo = document.getElementById('hierarquia-titulo')
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
const filtro = document.getElementById('filtro')

const nomesClãs = [
    'berllot',
    'bichos',
    'ulgrimnism',
    'firebirds',
    'sem',
]
const classes = [
    'Nome',
    'Custo',
    'LendaEHierarquia',
    'filtro-'
]
function removerClasses(){
    for(i=0; i<=4; i++){
        lendaNome.classList.remove(nomesClãs[i]+classes[0])
        custoNumero.classList.remove(nomesClãs[i]+classes[1])
        custoParagrafo.classList.remove(nomesClãs[i]+classes[1])

        nomeJogador.classList.remove(nomesClãs[i]+classes[2])
        hierarquiaCor.classList.remove(nomesClãs[i]+classes[1])
        filtro.classList.remove(classes[3]+nomesClãs[i])
    }
}
let index = 0
function adicionarClasses(){
    lendaNome.classList.add(nomesClãs[index]+classes[0])
    custoNumero.classList.add(nomesClãs[index]+classes[1])
    custoParagrafo.classList.add(nomesClãs[index]+classes[1])
    nomeJogador.classList.add(nomesClãs[index]+classes[2])
    hierarquiaCor.classList.add(nomesClãs[index]+classes[1])
    filtro.classList.add(classes[3]+nomesClãs[index])
    index = 0
}
function removerHierarquia(){
    hierarquia.classList.add('display')
    hierarquiaCor.innerHTML = ""
    hierarquiaTitulo.classList.add('display')
}
function adicionarHierarquia(){
    hierarquia.classList.remove('display')
    hierarquiaCor.innerHTML = "Membro"
    hierarquiaTitulo.classList.remove('display')
}
clã.addEventListener('change', function(){
    /*Fundo e Moldura de cada Clã*/
    moldura.src = clã.value
    fundo.src = clã.options[clã.selectedIndex].getAttribute("data-value")

    /*Mudar Cor de Acordo com Clã Selecionado*/
    let cor = clã.options[clã.selectedIndex].getAttribute("color-data")
    if(cor === 'berllot'){
        removerClasses()
        adicionarHierarquia()
        adicionarClasses()
    }
    else if(cor === 'bichos-do-mato'){
        removerClasses()
        adicionarHierarquia()
        index += 1
        adicionarClasses()
    }
    else if(cor === 'ulgrimnism'){
        removerClasses()
        adicionarHierarquia()
        index += 2
        adicionarClasses()
    }
    else if(cor === 'firebirds'){
        removerClasses()
        adicionarHierarquia()
        index += 3
        adicionarClasses()
    }
    else if(cor === 'sem'){
        removerClasses()
        removerHierarquia()
        index += 4
        adicionarClasses()
    }
});