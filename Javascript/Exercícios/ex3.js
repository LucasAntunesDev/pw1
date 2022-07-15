//Faça um script que receba o nome
// e a idade de uma pessoa. Considere
//apenas anos completos. Mostre quantos 
//dias de vida ela possui. Considere o ano
//com 365 dias.

const nome = prompt("Qual o seu nome?")
const idade = prompt("Quantos anos você tem?")
const idadeDias = idade * 365

alert(nome + ", você tem " + idadeDias +" dias de idade")