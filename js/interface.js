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
const estiloInterface = document.getElementById('interface')
const estiloRedesSociais = document.getElementById('redes-sociais')

const fundoSite = document.getElementById('fundo-site')

/*Cores na interface para cada Clã*/
const sem = 'linear-gradient(rgb(163, 163, 163),rgb(124, 124, 124),rgb(88, 88, 88))'
const purple = 'linear-gradient(rgb(141, 53, 153),rgb(176, 52, 192),rgb(70, 49, 104))'
const red = 'linear-gradient(rgb(190, 39, 39),rgb(201, 45, 45),rgb(122, 18, 18))'
const green = 'linear-gradient(rgb(64, 175, 30),rgb(109, 219, 76),rgb(37, 105, 16))'
const yellow = 'linear-gradient(rgb(202, 192, 50),rgb(235, 222, 49),rgb(189, 178, 23))'
const orange = 'linear-gradient(rgb(226, 132, 24),rgb(255, 162, 55),rgb(214, 130, 34))'
const black = 'linear-gradient(rgb(37, 37, 37),rgb(88, 83, 83),rgb(44, 41, 41))'
const pink = 'linear-gradient(rgb(223, 163, 199),rgb(243, 174, 214),rgb(204, 145, 180)'
const blue = 'linear-gradient(rgb(4, 85, 172),rgb(9,119,239),rgb(4, 75, 151))'
const white = 'linear-gradient(rgb(158, 158, 158),rgb(209, 209, 209),rgb(92, 92, 92))'
const cyan = 'linear-gradient(rgb(48, 152, 160),rgb(81, 205, 215),rgb(56, 154, 161))'

clã.addEventListener('change', function(){
    /*Fundo e Moldura de cada Clã*/
    moldura.src = clã.value
    degrade.src = clã.options[clã.selectedIndex].getAttribute('degrade')
    fundo.src = clã.options[clã.selectedIndex].getAttribute("data-value")
    fundoSite.src = clã.options[clã.selectedIndex].getAttribute('fundo-site')


    /*Mudar Cor de Acordo com Clã Selecionado*/
    let cor = clã.options[clã.selectedIndex].getAttribute("color-data")
    if(cor == 'purple'){
        removerClasses()
        estiloInterface.style.background = purple
        estiloRedesSociais.style.background = purple
        adicionarHierarquia()
        adicionarClasses()
    }
    else if(cor == 'green'){
        removerClasses()
        adicionarHierarquia()
        estiloInterface.style.background = green
        estiloRedesSociais.style.background = green
        index += 1
        adicionarClasses()
    }
    else if(cor == 'orange'){
        removerClasses()
        adicionarHierarquia()
        estiloInterface.style.background = orange
        estiloRedesSociais.style.background = orange
        index += 2
        adicionarClasses()
    }
    else if(cor == 'yellow'){
        removerClasses()
        adicionarHierarquia()
        estiloInterface.style.background = yellow
        estiloRedesSociais.style.background = yellow
        index += 3
        adicionarClasses()
    }
    else if(cor == 'sem'){
        removerClasses()
        removerHierarquia()
        estiloInterface.style.background = sem
        estiloRedesSociais.style.background = sem
        index += 4
        adicionarClasses()
    }
    else if(cor == 'red'){
        removerClasses()
        adicionarHierarquia()
        estiloInterface.style.background = red
        estiloRedesSociais.style.background = red
        index += 5
        adicionarClasses()
    }
    else if(cor == 'black'){
        removerClasses()
        adicionarHierarquia()
        estiloInterface.style.background = black
        estiloRedesSociais.style.background = black
        index += 6
        adicionarClasses()
    }
    else if(cor == 'pink'){
        removerClasses()
        adicionarHierarquia()
        estiloInterface.style.background = pink
        estiloRedesSociais.style.background = pink
        index += 7
        adicionarClasses()
    }
    else if(cor == 'blue'){
        removerClasses()
        adicionarHierarquia()
        estiloInterface.style.background = blue
        estiloRedesSociais.style.background = blue
        index += 8
        adicionarClasses()
    }
    else if(cor == 'white'){
        removerClasses()
        adicionarHierarquia()
        estiloInterface.style.background = white
        estiloRedesSociais.style.background = white
        index += 9
        adicionarClasses()
    }
    else if(cor == 'cyan'){
        removerClasses()
        adicionarHierarquia()
        estiloInterface.style.background = cyan
        estiloRedesSociais.style.background = cyan
        index += 10
        adicionarClasses()
    }

});
