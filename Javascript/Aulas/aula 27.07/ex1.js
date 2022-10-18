var notaFinal = parseFloat(prompt("Entre com a Nota Final"))

if (notaFinal < 7 && notaFinal > 1.66){
    var notaExame = (50 - 6 * notaFinal) / 4
    alert("Você precisa tirar " + notaExame.toFixed(1))
}else if(notaFinal < 1.67){
    alert("Você está reprovado")
}