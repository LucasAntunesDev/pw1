//Faça um algoritmo que peça so usuário um número.
//Após, apresente a soma dos números pares menores que o número solicitado.</div>

const x = parseInt(prompt("Entre com um número: "))
const metade = x/2
var i = metade
var soma = 0
while(i<x){
	if(i%2 == 0){
	soma += i
}
	i++
}
alert(soma)