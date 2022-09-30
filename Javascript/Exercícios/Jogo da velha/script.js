
function mudarBtn(){
    const btn = document.getElementById = ('botao')
    const cel = document.getElementById = ('celula')

    if(botao.innerHTML == "Começar Jogo" && j1 === 0){
        botao.style.backgroundColor = 'crimson'
        botao.innerHTML = "Terminar Jogo"
        botao.style.transition = "all 0.3s linear"
        j++
    }
    else{
        botao.style.backgroundColor = 'green'
        botao.innerHTML = "Começar Jogo"
        botao.style.transition = "all 0.3s linear"
    }



    //botao.style.backgroundColor = 'crimson'
   // botao.innerHTML = "Terminar Jogo"
    console.log(botao)
}

const j1= 3
const j2= 2


function jogar(celula){
    const um  = document.getElementById('um')
    const x = 1

   while(x>0){

    if(j1 % 2 === 1 && j2 % 2 === 0){
        celula.innerHTML = "X"
        j1++
        j2++
    }
    else{
        celula.innerHTML = "O"
        j1++
        j2++
    }
   
    }
    // console.log(teste)
}

