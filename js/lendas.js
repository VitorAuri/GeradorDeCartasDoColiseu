/*Data Lenda*/
const lendasJson = 'js/lendas.json'
fetch(lendasJson)
.then(response => {
    if(!response.ok){
        throw new Error(`Conexão não está Ok: ${response.status}`)
    }
    return response.json()
    .then(data=>{
        console.log(data)
    })
    .catch(error=>{
        console.error("Erro em tentar fazer fetch em Json:", error)
    })
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