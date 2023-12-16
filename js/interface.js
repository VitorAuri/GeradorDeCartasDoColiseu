/*Nome do Jogador*/
/*function nome(){
    const nome = document.getElementById('nome').value
    document.getElementById('nome-p').innerText = nome
}*/
nome.addEventListener('change', function(){
    const nome = document.getElementById('nome').value
    document.getElementById('nome-p').innerText = nome
})

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
const degrade = document.getElementById('degrade')

const nomesClãs = [
    'berllot',
    'bichos',
    'ulgrimnism',
    'firebirds',
    'sem',
    'inimigos',
    'vasco',
]
const classes = [
    'Nome',
    'Custo',
    'LendaEHierarquia',
]
function removerClasses(){
    for(i=0; i<=6; i++){
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
function removerHierarquia(){
    hierarquia.classList.add('display')
    hierarquiaCor.innerHTML = ""
    custoNumero.style.margin = '347px 0px'
    custoParagrafo.style.margin = '347px 16px'
    hierarquiaTitulo.classList.add('display')
}
function adicionarHierarquia(){
    hierarquia.classList.remove('display')
    hierarquiaCor.innerHTML = hierarquia.value
    custoNumero.style.margin = '355px 0px'
    custoParagrafo.style.margin = '355px 16px'
    hierarquiaTitulo.classList.remove('display')
}
const estiloInterface = document.getElementById('interface')
const estiloRedesSociais = document.getElementById('redes-sociais')

const fundoSite = document.getElementById('fundo-site')

/*Cores na interface para cada Clã*/
const berllot = 'linear-gradient(rgb(141, 53, 153),rgb(176, 52, 192),rgb(70, 49, 104))'
const sem = 'linear-gradient(rgb(163, 163, 163),rgb(124, 124, 124),rgb(88, 88, 88))'
const inimigos = 'linear-gradient(rgb(190, 39, 39),rgb(201, 45, 45),rgb(122, 18, 18))'
const bichos = 'linear-gradient(rgb(64, 175, 30),rgb(109, 219, 76),rgb(37, 105, 16))'
const firebirds = 'linear-gradient(rgb(202, 192, 50),rgb(235, 222, 49),rgb(189, 178, 23))'
const ulgrimnism = 'linear-gradient(rgb(226, 132, 24),rgb(255, 162, 55),rgb(214, 130, 34))'
const vasco = 'linear-gradient(rgb(37, 37, 37),rgb(88, 83, 83),rgb(44, 41, 41))'

clã.addEventListener('change', function(){
    /*Fundo e Moldura de cada Clã*/
    moldura.src = clã.value
    degrade.src = clã.options[clã.selectedIndex].getAttribute('degrade')
    fundo.src = clã.options[clã.selectedIndex].getAttribute("data-value")
    fundoSite.src = clã.options[clã.selectedIndex].getAttribute('fundo-site')


    /*Mudar Cor de Acordo com Clã Selecionado*/
    let cor = clã.options[clã.selectedIndex].getAttribute("color-data")
    if(cor === 'berllot'){
        removerClasses()
        estiloInterface.style.background = berllot
        estiloRedesSociais.style.background = berllot
        adicionarHierarquia()
        adicionarClasses()
    }
    else if(cor === 'bichos-do-mato'){
        removerClasses()
        adicionarHierarquia()
        estiloInterface.style.background = bichos
        estiloRedesSociais.style.background = bichos
        index += 1
        adicionarClasses()
    }
    else if(cor === 'ulgrimnism'){
        removerClasses()
        adicionarHierarquia()
        estiloInterface.style.background = ulgrimnism
        estiloRedesSociais.style.background = ulgrimnism
        index += 2
        adicionarClasses()
    }
    else if(cor === 'firebirds'){
        removerClasses()
        adicionarHierarquia()
        estiloInterface.style.background = firebirds
        estiloRedesSociais.style.background = firebirds
        index += 3
        adicionarClasses()
    }
    else if(cor === 'sem'){
        removerClasses()
        removerHierarquia()
        estiloInterface.style.background = sem
        estiloRedesSociais.style.background = sem
        index += 4
        adicionarClasses()
    }
    else if(cor === 'inimigos-da-moda'){
        removerClasses()
        adicionarHierarquia()
        estiloInterface.style.background = inimigos
        estiloRedesSociais.style.background = inimigos
        index += 5
        adicionarClasses()
    }
    else if(cor === 'vasco'){
        removerClasses()
        adicionarHierarquia()
        estiloInterface.style.background = vasco
        estiloRedesSociais.style.background = vasco
        index += 6
        adicionarClasses()
    }
});