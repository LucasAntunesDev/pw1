/*
Faça um algoritmo que receba a altura e o peso do usuário
e calcule o imc.
Depois mostre uma mensagem de acordo com o valor do imc.
Sabendo
Abaixo do peso: 18.5
Peso normal: 18.5 - 24.9
Sobrepeso: 25 - 29.9
Obesidade Grau I: 30 - 34.9
Obesidade Grau II: 35 - 39.9
Obesidade Grau III: >=40
IMC = peso / altura²
*/ 

var peso = parseFloat(prompt("Digite o seu peso: "))
var altura = parseFloat(prompt("Digite a sua altura: "))
var imc = peso / (altura*altura)

console.log(imc)

if(imc < 18.5){
    alert("Abaixo do peso")
}
else if(imc < 25){
    alert("Peso normal")
}
else if(imc < 30){
    alert("Sobrepeso")
}
else if(imc < 35){
    alert("Obesidade Grau I")
}
else if(imc < 40){
    alert("Obesidade Grau II")
}else{
    alert("Obesidade Grau III")
}