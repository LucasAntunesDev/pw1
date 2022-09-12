//Vetores

// for (let x = 1; x <= 10; x++){
//     console.log(x)
// }
// //Let só funciona no bloco (contexto específico)
// const vetor = []

// vetor[0] = 2;
// vetor[1] = 3;

//Fila > Remove o primeiro que entrou primeiro
// 6
// 5
// 4
// 2

// Fila > Remove o último que entrou primeiro
// 3
// 4
// 5
// 6

// const vetor = [10]

// for (let i = 0; i < 10; i++){
//     //vetor[i] = i+1
//     vetor.push(i+1)
// }



//Crie um vetor com 10 índices e peça ao usúario 10 números.
//Depois, mostre a soma desses números
// const vetor = [10]

// for(let i = 0; i < 10; i++){
//     const x = parseInt(prompt("Entre com um número: "))
//     vetor.push(x)
// }

// let soma = 0
// while(vetor.length > 0){
//     const x = vetor.pop()
//     soma += x //variável acumuladora (aparence tanto na esquerda quanto na direita[sempre precisa ser inicializada][soma = soma + x])
// }

// alert(soma)

//Crie um vetor com índices indefinidos e peça ao usúario números.
//Quando for digitado zero, ele para de pedir números
//Depois, mostre a soma desses números
// const vetor = []
// let x = 0
// while((parseInt(prompt("Entre com um número: "))>0)){
//     vetor.push(x)
// }

// let soma = 0
// while(vetor.length > 0){
//     const x = vetor.pop()
//     soma += x
// }

const vetor = []
let x = 0

while((parseInt(prompt("Entre com um número: "))>0)){
    vetor.push(x)
}

x = (parseInt(prompt("Entre com outro número")))
let encontrou = false

for(let i = 0; i < vetor.length; i++){
    if(vetor[i] === x){
        encontrou = true
        break;
    }
}

if(encontrou){
    alert("O número está no vetor")
}
else{
    alert("O número NÃO está no vetor")
}





// const total = vetor.length
// let soma = 0
// while(vetor.length > 0){
//     const x = vetor.pop()
//     soma += x
// }
// alert(soma / total)