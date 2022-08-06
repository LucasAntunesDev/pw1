/*
Faça um script que receba uma nota de cada trimestre. 
Calcule a média e escreva:
Aprovado - se a média for igual ou maior que 7
Exame - se a média for igual ou maior que 5
Reprovado, caso contário
*/ 

var nota1 = parseFloat(prompt("Digite a nota do 1º trimestre: "))
var nota2 = parseFloat(prompt("Digite a nota do 2º trimestre: "))
var nota3 = parseFloat(prompt("Digite a nota do 3º trimestre: "))
var media = (nota1 + nota2 + nota3) / 3
var texto = 'Você está '

console.log(media)

if(media >= 7){
    alert(texto + "aprovado! Parabéns!")
}
else if(media >= 5){
    alert(texto + "Em exame!")
}else{
    alert(texto + "reprovado!")
}