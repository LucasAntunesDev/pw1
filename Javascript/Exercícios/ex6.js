/*1) Faça uma algoritmo que receba a nota final
se essa nota for menor que 7, você precisa
calcular quanto o aluno precisa tirar no
exame final. Sabendo que a média final é 
calculada da seguinte forma:
MF = (NF * 6 + NE * 4) / 10
MF -> Média Final
NF -> Nota Final
NE -> Nota Exame*/

const nf = parseInt(prompt ("Digite a nota final: "))
if (nf < 7){
var ne = (50-6*nf)/4
alert("Você precisa tirar" + ne.toFixed(1))
}