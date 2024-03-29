const objetivo = ['B','R','A','S','I','L'];
const letras = ['A','B','C','D','E','F','G','H',
'I','J','K','L','M','N','O','P','Q','R','S','T','U',
'V','W','X','Y','Z'];


let errors = 0
let acertos = 0

const verificaFimJogo = () => {

    console.log(`./imgs/forca-${errors}.png`)
    document.getElementById('forca').setAttribute(
        'src', `./imgs/forca-${errors}.png`
    )


    if (errors === 6 || acertos === objetivo.length) alert('FIM DO JOGO')
}

const jogada = (l) => {
    console.log(l)
    if (objetivo.every(letra => letra !== l)){
        errors++
    }else{
        for(let i = 0; i < objetivo.length; i++){
            if (objetivo[i] === l){
                acertos++
                document.getElementById(`letra${i}`)
                    .innerHTML = l
            }
        }
    }
    
    verificaFimJogo()
}

const palavra = document.getElementById('palavra')
objetivo.forEach((_,idx) => {
    const letra = document.createElement('DIV')
    letra.setAttribute('class','letra')
    letra.setAttribute('id',`letra${idx}`)
    palavra.appendChild(letra)
})

const botoes = document.getElementById('botoes')
letras.forEach(l => {
    const btn = document.createElement('BUTTON')
    btn.setAttribute('type','button')
    btn.innerHTML = l
    btn.addEventListener('click', () => {
        // Desabilitando o botão depois do 
        // primeiro clique
        btn.disabled = true
        jogada(btn.innerHTML)
    })
    botoes.appendChild(btn)
})