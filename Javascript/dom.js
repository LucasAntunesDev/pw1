// DOM: Document Object Model
//Para recuperar um elelemento html com o Javascript
//devemos utilizar o objeto document.

//Recuperando um elemento pelo ID
const botao = document.getElementById('botao')

//Editando estilos pelo JS
botao.style.backgroundColor = 'crimson'
botao.style.color = 'whitesmoke'
botao.style.borderRadius = '10px'
botao.style.padding = '10px'
botao.style.margin = '20px'
botao.style.border = 'none'

botaoColor.style.backgroundColor = '#0074FF'
botaoColor.style.color = 'whitesmoke'
botaoColor.style.borderRadius = '10px'
botaoColor.style.padding = '10px'
botaoColor.style.margin = '20px'
botaoColor.style.border = 'none'

apresnteSe.style.backgroundColor = '#13BB6E'
apresnteSe.style.color = 'whitesmoke'
apresnteSe.style.borderRadius = '10px'
apresnteSe.style.padding = '10px'
apresnteSe.style.margin = '20px'
apresnteSe.style.border = 'none'

console.log(botao)

//Recuperando elementos pelo nome da tag
//const divs = document.getElementsByTagName('div')
//console.log(divs[0])

//Solicitar para o usuário pelo prompt o nome dele.
//Após, trocar no HTML o 

    

function apresenteSe(){
    const nome = prompt('Qual é o seu nome?')
    const span = document.getElementById('nome')
    span.innerHTML = nome
    ola.style.display = 'block'
    const div = document.getElementById('ola')
}

function mudarCorFundo (){
    const div = document.getElementById('texto')
    console.log(div.innerHTML)
    texto.style.backgroundColor = 'crimson'
}

//Definindo uma função nova
function mudarTexto(){
    //Acessando HTML interno de um elemento
    const div = document.getElementById('texto')
    console.log(div.innerHTML)
    div.innerHTML = "Outro valor"
}





//Define uma função para ser executada quando terminianr de carregar a página :
//onload=function(){...}