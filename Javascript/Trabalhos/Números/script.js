function $(id) {
    return document.getElementById(id)
}

// var dezenas = unidades + 3
//dezenas
const dezenaUm = $('1a');
const dezenaDois = $('2a');
const dezenaTres = $('3a');
const dezenaQuatro = $('4a');
const dezenaCinco = $('5a');
const dezenaSeis = $('6a');
const dezenaSete = $('7a');
const dezenaOito = $('8a');
const dezenaNove = $('9a');
const dezenaDez = $('10a');
const dezenaOnze = $('11a');
const dezenaDoze = $('12a');
const dezenaTreze = $('13a');
const dezenaCatorze = $('14a');
const dezenaQuinze = $('15a');
//unidades
const unidadeUm = $('1a');
const unidadeDois = $('2a');
const unidadeTres = $('3a');
const unidadeQuatro = $('4a');
const unidadeCinco = $('5a');
const unidadeSeis = $('6a');
const unidadeSete = $('7a');
const unidadeOito = $('8a');
const unidadeNove = $('9a');
const unidadeDez = $('10a');
const unidadeOnze = $('11a');
const unidadeDoze = $('12a');
const unidadeTreze = $('13a');
const unidadeCatorze = $('14a');
const unidadeQuinze = $('15a');


const num = parseInt(prompt("Entre com um número: "));
const dezena = parseInt(num / 10);
const unidade = parseInt(num % 10);
if (num >= 0 && num < 100) {
    console.log(dezena)
    console.log(unidade)

    if (dezena === 0) {
        $('5a').style.backgroundColor = "white"
        $('8a').style.backgroundColor = "white"
        $('11a').style.backgroundColor = "white"
    }
    if (dezena === 1) {
        dezenaUm.style.backgroundColor = "white"
        $('2a').style.backgroundColor = "white"
        $('4a').style.backgroundColor = "white"
        $('5a').style.backgroundColor = "white"
        $('7a').style.backgroundColor = "white"
        $('8a').style.backgroundColor = "white"
        $('10a').style.backgroundColor = "white"
        $('11a').style.backgroundColor = "white"
        $('13a').style.backgroundColor = "white"
        $('14a').style.backgroundColor = "white"
    }
    if (dezena === 2) {
        $('4a').style.backgroundColor = "white"
        $('5a').style.backgroundColor = "white"
        $('11a').style.backgroundColor = "white"
        $('12a').style.backgroundColor = "white"
    }
    if (dezena === 3) {
        $('4a').style.backgroundColor = "white"
        $('5a').style.backgroundColor = "white"
        $('7a').style.backgroundColor = "white"
        $('11a').style.backgroundColor = "white"
        $('10a').style.backgroundColor = "white"
    }
    if (dezena === 4) {
        $('5a').style.backgroundColor = "white"
        $('2a').style.backgroundColor = "white"
        $('10a').style.backgroundColor = "white"
        $('11a').style.backgroundColor = "white"
        $('13a').style.backgroundColor = "white"
        $('14a').style.backgroundColor = "white"
    } if (dezena === 5) {
        $('5a').style.backgroundColor = "white"
        $('6a').style.backgroundColor = "white"
        $('10a').style.backgroundColor = "white"
        $('11a').style.backgroundColor = "white"
    }
    if (dezena === 6) {
        $('5a').style.backgroundColor = "white"
        $('6a').style.backgroundColor = "white"
        $('11a').style.backgroundColor = "white"
    }
    if (dezena === 7) {
        $('4a').style.backgroundColor = "white"
        $('5a').style.backgroundColor = "white"
        $('7a').style.backgroundColor = "white"
        $('8a').style.backgroundColor = "white"
        $('10a').style.backgroundColor = "white"
        $('11a').style.backgroundColor = "white"
        $('13a').style.backgroundColor = "white"
        $('14a').style.backgroundColor = "white"
    }
    if (dezena === 8) {
        $('5a').style.backgroundColor = "white"
        $('11a').style.backgroundColor = "white"
    }
    if (dezena === 9) {
        $('5a').style.backgroundColor = "white"
        $('10a').style.backgroundColor = "white"
        $('11a').style.backgroundColor = "white"
    }

    if (unidade === 0) {
        $('5b').style.backgroundColor = "white"
        $('8b').style.backgroundColor = "white"
        $('11b').style.backgroundColor = "white"
    }
    if (unidade === 1) {
        $('1b').style.backgroundColor = "white"
        $('2b').style.backgroundColor = "white"
        $('4b').style.backgroundColor = "white"
        $('5b').style.backgroundColor = "white"
        $('7b').style.backgroundColor = "white"
        $('8b').style.backgroundColor = "white"
        $('10b').style.backgroundColor = "white"
        $('11b').style.backgroundColor = "white"
        $('13b').style.backgroundColor = "white"
        $('14b').style.backgroundColor = "white"
    }
    if (unidade === 2) {
        $('4b').style.backgroundColor = "white"
        $('5b').style.backgroundColor = "white"
        $('11b').style.backgroundColor = "white"
        $('12b').style.backgroundColor = "white"
    }
    if (unidade === 3) {
        $('4b').style.backgroundColor = "white"
        $('5b').style.backgroundColor = "white"
        $('7b').style.backgroundColor = "white"
        $('11b').style.backgroundColor = "white"
        $('10b').style.backgroundColor = "white"
    }
    if (unidade === 4) {
        $('5b').style.backgroundColor = "white"
        $('2b').style.backgroundColor = "white"
        $('10b').style.backgroundColor = "white"
        $('11b').style.backgroundColor = "white"
        $('13b').style.backgroundColor = "white"
        $('14b').style.backgroundColor = "white"
    } if (unidade === 5) {
        $('5b').style.backgroundColor = "white"
        $('6b').style.backgroundColor = "white"
        $('10b').style.backgroundColor = "white"
        $('11b').style.backgroundColor = "white"
    }
    if (unidade === 6) {
        $('5b').style.backgroundColor = "white"
        $('6b').style.backgroundColor = "white"
        $('11b').style.backgroundColor = "white"
    }
    if (unidade === 7) {
        $('4b').style.backgroundColor = "white"
        $('5b').style.backgroundColor = "white"
        $('7b').style.backgroundColor = "white"
        $('8b').style.backgroundColor = "white"
        $('10b').style.backgroundColor = "white"
        $('11b').style.backgroundColor = "white"
        $('13b').style.backgroundColor = "white"
        $('14b').style.backgroundColor = "white"
    }
    if (unidade === 8) {
        $('5b').style.backgroundColor = "white"
        $('11b').style.backgroundColor = "white"
    }
    if (unidade == 9) {
        $('5b').style.backgroundColor = "white"
        $('10b').style.backgroundColor = "white"
        $('11b').style.backgroundColor = "white"
    }
}