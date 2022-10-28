//Reduce 
//Vetor VIRA-> [], {}, boolean; number, string
//vetor.reduce (valor acumulado, valor atual)

const vetor = [2, 4, 5, 7, 8, 9, 3, 4];

//Faça um script que defina a variavel soma com a 
//soma total dos números do vetor.
//COM REPETIÇÕES
let soma = 0;

for (let i = 0; i < vetor.length; i++) {
    soma = soma + vetor[i];
}
console.log(`A soma dos números do vetor é: ${soma}`);

const x = vetor.reduce((ant, atual) => ant * atual)

console.log(`O produto dos números do vetor é: ${x}`)

//Encontrar o maior número do vetor
// let maior = Number.NEGATIVE_INFINITY; //NEGATIVO INFINITO dá pra usar também vetor[0]
// for (let i = 0; i < vetor.length; i++) {
//     if (vetor[i] > maior) {
//         maior = vetor[i];
//     }
// }
// console.log(`O maior número do vetor é: ${maior}`)

const maior = vetor.reduce((ant, atual) => ant > atual ? ant : atual, vetor[0]);
console.log(`O maior número do vetor é: ${maior}`);