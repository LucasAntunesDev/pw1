//  Estruturas condicionais
//Uma consição SEMPRE deve ser uma EXPRESSÃO LÓGICA

// SE
if (3>2) {
    console.log('Entrou aqui')
}

// SE...SENAO
var liTermosDeUso = true

if (liTermosDeUso) {
    console.log('Você leu os temos de uso')
}else {
    console.log('Você NÃO leu os temos de uso')
}



// SE...SENAO SE...SENAO

var media = 7
if (media >= 7){
    console.log("Aprovado")
}else if(media >= 1.6){
    console.log("Exame")
}else{
    console.log("Reprovado")
}

// ESCOLHA
//USANDO SE:
var codigo = "INFO"

if(codigo === "INFO"){
    console.log("Técnico em Informática para Internet")
}
else if(codigo === "ADM"){
    console.log("Técnico em Administração")
}
else if(codigo === "VITIENO"){
    console.log("Técnico em Viticultura e Enologia")
}
else if(codigo === "MEIO"){
    console.log("Técnico em Meio Ambiente")
} else{
    console.log("Técnico em Agropecuária")
}


//USANDO ESCOLHA:
switch(codigo){
    case "INFO": console.log("Técnico em Informática para Internet")
    ;break// BREAK INTERROMPE
    case "ADM": console.log("Técnico em Administração")
    ;break
    case "VITIENO": console.log("Técnico em Viticultura e Enbreakologia")
    ;break
    case "MEIO": console.log("Técnico em Meio Ambiente")
    ;break
    /*SENAO -->*/ default: console.log("Técnico em Agropecuária") //O ÚLTIMMO NÃO NESSECITA DE BREAK
    
}