const email = "email@teste.com"

function validar(input){
    if(input.value === email){
        input.style.backgroundColor="green"
        input.syle.color = "white"
    }
    else{
        input.style.backgroundColor="red"
        input.style.color = "white"
    }

}

function mudarBorda(foco){
   const borda = document.getElementById('nome')

   if(foco){
    borda.style.border = "solid 2px red"
    borda.style.borderRadius = "10px"
    borda.style.transition = "all 0.4s linear"
   }
   else{
    borda.style.border = ""
    borda.style.borderRadius = "0px"
    borda.style.transition = "all 0.4s linear"
   
    //input.style.border = foco ? "solid 2px red" :
    }
}

function parImpar(input){
    const valor = input.value
   // alert(num.value)
    if(valor < 0 || valor > 10){
        input.value = " "
    }

    //alert(num.value % 2 === 0 ? 'É par' : 'É ímpar')
}

function keyUp(event){
    const input = document.getElementById('barra')
    if(event.key === 'ArrowDown'){
        input.style.top = '150px'
    }
    else{
        input.style.top = '0px'
    }
}