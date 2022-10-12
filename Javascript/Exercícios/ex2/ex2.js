//Faça um script que receba o preço de um 
//produto e o percentual de desconto.
// Mostre para o usuário o valor final com
// o desconto.

const x = parsefloat(prompt("Digite o preço do produto: "))
console.log('Preço', x)
const y = parsefloat(prompt("Digite o percentual do desconto: "))
console.log('Descoto', y)
const percentual = x * (100) / 100

alert(x * percentual)