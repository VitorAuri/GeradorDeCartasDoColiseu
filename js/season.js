const clã_season = document.getElementById('clã-season')

clã_season.addEventListener('change', function(){
    let seasonSelecionada = clã_season.value
    
    if(seasonSelecionada=="4"){
        clã.innerHTML = `
            <option fundo-site="imagens/fundosSite/sem.png" degrade="imagens/degrade/degrade-sem.png" color-data="sem" data-value="imagens/fundos/fundo-sem.png" value="imagens/molduras/sem.png">-</option>

            <option fundo-site="imagens/fundosSite/cyan.png" degrade="imagens/degrade/degrade-cyan.png" color-data="cyan" data-value="imagens/fundos/fundo-cyan.png" value="imagens/molduras/aurora.png">Aurora</option>

            <option fundo-site="imagens/fundosSite/green.png" degrade="imagens/degrade/degrade-green.png" color-data="green" data-value="imagens/fundos/fundo-green.png" value="imagens/molduras/season3/bichos.png">Bichos do Mato</option>

            <option fundo-site="imagens/fundosSite/white.png" degrade="imagens/degrade/degrade-white.png" color-data="white" data-value="imagens/fundos/fundo-white.png" value="imagens/molduras/complexo.png">Complexo do Corinthians</option>

            <option fundo-site="imagens/fundosSite/blue.png" degrade="imagens/degrade/degrade-blue.png" color-data="blue" data-value="imagens/fundos/fundo-blue.png" value="imagens/molduras/cruzeiro.png">Cruzeiro</option>

            <option fundo-site="imagens/fundosSite/yellow.png" degrade="imagens/degrade/degrade-yellow.png" color-data="yellow" data-value="imagens/fundos/fundo-yellow.png" value="imagens/molduras/season3/firebirds.png">Firebirds</option>

            <option fundo-site="imagens/fundosSite/red.png" degrade="imagens/degrade/degrade-red.png" color-data="red" data-value="imagens/fundos/fundo-red.png" value="imagens/molduras/season3/inimigos.png">Inimigos da Moda</option>

            <option fundo-site="imagens/fundosSite/pink.png" degrade="imagens/degrade/degrade-pink.png" color-data="pink" data-value="imagens/fundos/fundo-pink.png" value="imagens/molduras/patota.png">Patota da Moneymatch</option>

            <option fundo-site="imagens/fundosSite/orange.png" degrade="imagens/degrade/degrade-orange.png" color-data="orange" data-value="imagens/fundos/fundo-orange.png" value="imagens/molduras/ranked.png">Ranked Beasts</option>

            <option fundo-site="imagens/fundosSite/purple.png" degrade="imagens/degrade/degrade-purple.png" color-data="purple" data-value="imagens/fundos/fundo-purple.png" value="imagens/molduras/strawberry.png">Strawberry Tea</option>

            <option fundo-site="imagens/fundosSite/black.png" degrade="imagens/degrade/degrade-black.png" color-data="black" data-value="imagens/fundos/fundo-black.png" value="imagens/molduras/season3/vasco.png">Vasco</option>
        `
    }
    else if(seasonSelecionada=="3"){
        clã.innerHTML = `
            <option fundo-site="imagens/fundosSite/sem.png" degrade="imagens/degrade/degrade-sem.png" color-data="sem" data-value="imagens/fundos/fundo-sem.png" value="imagens/molduras/sem.png">-</option>

            <option fundo-site="imagens/fundosSite/purple.png" degrade="imagens/degrade/degrade-purple.png" color-data="purple" data-value="imagens/fundos/fundo-purple.png" value="imagens/molduras/season3/berllot.png">Berllot</option>
    
            <option fundo-site="imagens/fundosSite/green.png" degrade="imagens/degrade/degrade-green.png" color-data="green" data-value="imagens/fundos/fundo-green.png" value="imagens/molduras/season3/bichos.png">Bichos do Mato</option>
    
            <option fundo-site="imagens/fundosSite/yellow.png" degrade="imagens/degrade/degrade-yellow.png" color-data="yellow" data-value="imagens/fundos/fundo-yellow.png" value="imagens/molduras/season3/firebirds.png">Firebirds</option>

            <option fundo-site="imagens/fundosSite/red.png" degrade="imagens/degrade/degrade-red.png" color-data="red" data-value="imagens/fundos/fundo-red.png" value="imagens/molduras/season3/inimigos.png">Inimigos da Moda</option>
    
            <option fundo-site="imagens/fundosSite/orange.png" degrade="imagens/degrade/degrade-orange.png" color-data="orange" data-value="imagens/fundos/fundo-orange.png" value="imagens/molduras/season3/ulgrimnism.png">Ulgrimnism</option>
    
            <option fundo-site="imagens/fundosSite/black.png" degrade="imagens/degrade/degrade-black.png" color-data="black" data-value="imagens/fundos/fundo-black.png" value="imagens/molduras/season3/vasco.png">Vasco</option>
        `
    }
})