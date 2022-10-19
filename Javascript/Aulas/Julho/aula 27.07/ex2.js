var minutos = parseInt(prompt("Entre com o número de minutos"))

if (minutos <= 1000){
    alert('Você gastou R$ 19.90')
} else {
    var extra = minutos - 1000
    alert('Você gastou ' + (19.9 + extra * 0.05))
}

