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


const custoNumero = document.getElementById('custo-num')
const custoParagrafo = document.getElementById('custo-p')
const nomeJogador = document.getElementById('nome-p')
const hierarquiaCor = document.getElementById('hierarquia-pID')
clã.addEventListener('change', function(){
    /*Fundo e Moldura de cada Clã*/
    moldura.src = clã.value
    fundo.src = clã.options[clã.selectedIndex].getAttribute("data-value")


    /*Mudar Cor de Acordo com Clã Selecionado*/
    let cor = clã.options[clã.selectedIndex].getAttribute("color-data")
    if(cor === 'berllot'){
        lendaNome.classList.add('berllotNome')
        custoNumero.classList.add('berllotCusto')
        custoParagrafo.classList.add('berllotCusto')


        nomeJogador.classList.add('berllotLendaEHierarquia')
        hierarquiaCor.classList.add('berllotLendaEHierarquia')
    }
    else if(cor === 'bichos-do-mato'){
        lendaNome.classList.add('bichosNome')
        custoNumero.classList.add('bichosCusto')
        custoParagrafo.classList.add('bichosCusto')


        nomeJogador.classList.add('bichosLendaEHierarquia')
        hierarquiaCor.classList.add('bichosLendaEHierarquia')
    }
    else if(cor === 'ulgrimnism'){
        lendaNome.classList.add('ulgrimnismNome')
        custoNumero.classList.add('ulgrimnismCusto')
        custoParagrafo.classList.add('ulgrimnismCusto')


        nomeJogador.classList.add('ulgrimnismLendaEHierarquia')
        hierarquiaCor.classList.add('ulgrimnismLendaEHierarquia')
    }
    else if(cor === 'firebirds'){
        lendaNome.classList.add('firebirdsNome')
        custoNumero.classList.add('firebirdsCusto')
        custoParagrafo.classList.add('firebirdsCusto')


        nomeJogador.classList.add('firebirdsLendaEHierarquia')
        hierarquiaCor.classList.add('firebirdsLendaEHierarquia')
    }
    
});