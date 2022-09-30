let n = 0;
let interval = null


botao.style.backgroundColor = "green"

function toggle(){
    const botao = document.getElementById('botao')
    if (!interval) {
        botao.innerHTML = "Parar"
        botao.style.backgroundColor = "crimson"
        comecar()
    } else{ 
        botao.innerHTML = "Começar"
        botao.style.backgroundColor = "green"
        parar()
    }
}

function comecar(){
    if (interval) return;

    interval = setInterval(function(){
        const tela = document.getElementById('tela')
        //n++ // n = n + 1
        tela.innerHTML = ++n
    }, 1000)
}

function parar(){
    if (!interval) return;

    clearInterval(interval)
    interval = null
}