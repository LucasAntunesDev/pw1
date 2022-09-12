var saldo = 450

//Sacar
//Depositar 
//Visualizar

function sacar(){
    const sacar = parseFloat(prompt("Quanto dejesa sacar?"))
    if(saldo - sacar >= 0){
        saldo = saldo - sacar
    }
    else{
        alert("Transação não permitida!")
    }
    console.log(saldo)
}

function dep(){
    const dep = parseFloat(prompt("Quanto deseja depositar?"))
    saldo = saldo + dep
    console.log(saldo)
}

function ver(){
    const teste = saldo
    parseFloat(alert("Seu saldo é de R$" + saldo))
}













// let contador = 1
// const x = parseInt(prompt("Digite um número: "))

// while (contador <= 10){
//     //console.log`$`(contador) x ${n} = {contador*x})
//     console.log(x + " X " + contador + " = " + contador*x)
//     contador++
// }