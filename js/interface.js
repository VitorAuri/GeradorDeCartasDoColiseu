/*Checa nome inserido do Jogador*/
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

/*Moldura, fundo da carta e nome de clã*/
const moldura = document.getElementById('moldura')
const clã = document.getElementById('clã')
const fundo = document.getElementById('fundo')

/*Outras propriedades da Carta*/
const custoNumero = document.getElementById('custo-num')
const custoParagrafo = document.getElementById('custo-p')
const nomeJogador = document.getElementById('nome-p')
const hierarquiaCor = document.getElementById('hierarquia-pID')
const degrade = document.getElementById('degrade')

const nomesCores = [
    'purple',
    'green',
    'orange',
    'yellow',
    'sem',
    'red',
    'black',
    'pink',
    'blue',
    'white',
    'cyan',
    'yellow2',
    'brown',
]
const classes = [
    'Nome',
    'Custo',
    'LendaEHierarquia',
]
function removerClasses(){
    for(i=0; i<=nomesCores.length; i++){
        lendaNome.classList.remove(nomesCores[i]+classes[0])
        custoNumero.classList.remove(nomesCores[i]+classes[1])
        custoParagrafo.classList.remove(nomesCores[i]+classes[1])

        nomeJogador.classList.remove(nomesCores[i]+classes[2])
        hierarquiaCor.classList.remove(nomesCores[i]+classes[1])
    }
}
let index = 0
function adicionarClasses(){
    lendaNome.classList.add(nomesCores[index]+classes[0])
    custoNumero.classList.add(nomesCores[index]+classes[1])
    custoParagrafo.classList.add(nomesCores[index]+classes[1])
    nomeJogador.classList.add(nomesCores[index]+classes[2])
    hierarquiaCor.classList.add(nomesCores[index]+classes[1])
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


clã.addEventListener('change', function(){
    /*Fundo e Moldura de cada Clã*/
    moldura.src = clã.value
    degrade.src = clã.options[clã.selectedIndex].getAttribute('degrade')
    fundo.src = clã.options[clã.selectedIndex].getAttribute("data-value")

    /*Mudar Cor de Acordo com Clã Selecionado*/
    let cor = clã.options[clã.selectedIndex].getAttribute("color-data")
    if(cor == 'purple'){
        removerClasses()
        adicionarHierarquia()
        adicionarClasses()
    }
    else if(cor == 'green'){
        removerClasses()
        adicionarHierarquia()
        index += 1
        adicionarClasses()
    }
    else if(cor == 'orange'){
        removerClasses()
        adicionarHierarquia()
        index += 2
        adicionarClasses()
    }
    else if(cor == 'yellow'){
        removerClasses()
        adicionarHierarquia()
        index += 3
        adicionarClasses()
    }
    else if(cor == 'sem'){
        removerClasses()
        removerHierarquia()
        index += 4
        adicionarClasses()
    }
    else if(cor == 'red'){
        removerClasses()
        adicionarHierarquia()
        index += 5
        adicionarClasses()
    }
    else if(cor == 'black'){
        removerClasses()
        adicionarHierarquia()
        index += 6
        adicionarClasses()
    }
    else if(cor == 'pink'){
        removerClasses()
        adicionarHierarquia()
        index += 7
        adicionarClasses()
    }
    else if(cor == 'blue'){
        removerClasses()
        adicionarHierarquia()
        index += 8
        adicionarClasses()
    }
    else if(cor == 'white'){
        removerClasses()
        adicionarHierarquia()
        index += 9
        adicionarClasses()
    }
    else if(cor == 'cyan'){
        removerClasses()
        adicionarHierarquia()
        index += 10
        adicionarClasses()
    }
    else if(cor == 'yellow2') {
        removerClasses()
        adicionarHierarquia()
        index += 11
        adicionarClasses()
    }
    else if(cor == 'brown') {
        removerClasses()
        adicionarHierarquia()
        index += 12
        adicionarClasses()
    }
});
