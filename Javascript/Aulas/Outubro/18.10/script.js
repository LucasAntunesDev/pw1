//0)Faça um script que mostre todos os valorws do vetor, um de cada vez.


// const vetor = [1, 2, 3, 5];
// // const vetor = [2, 4, 6, 8];
// for (let i = 0; i < vetor.length; i++) {
//     // console.log(vetor[i]);
// }

//1) Faça um script que crie um novo veotr igual ao dobro
//do prmeiro. EX: [2,3,5] => [4,6,10]

// let novo = [];
// for (let i = 0; i < vetor.length; i++) {
//     novo[i] = vetor[i] * 2;
//     console.log(novo[i]);
// }

//O VETOR é uma const, mas suas posições não,
//logo podemos mudar as suas posições,
//o que não é possível é mudar o valor da variável

//2) Faça ums script que crie um novo vetor
//somentwe com os números pares que estão no primeiro
// let pares = [];

// for (let i = 0, cont = 0; i < vetor.length; i++) {
//     if (vetor[i] % 2 === 0) {
//         pares[cont] = vetor[i];
//         cont++
//     }
// }
//Função filter
//Função map
//Função every

//3) Faça um script que verifique se todos os
//elementos de um vetor são pares ou não
// let todosPares = true;
// let numPares = 0;
// for (let i = 0; i < vetor.length; i++) {
//     if(vetor[i]%2===0) continue;
//     todosPares = false;
//     break;
//     //todosPares = numPares === vetor.length;
// }
// console.log("São todos pares?", todosPares);
//Sintaxe ternário -> condicao ? true : false

//4) Faça um script que verifique se pelos menos um dos
//elementos de um vetor são pares ou não

// const vetor = [1, 2, 3, 5];

// for (let i = 0; i < vetor.length; i++) {
// }

// let algumPar = false;
// for (let i = 0; i < vetor.length; i++) {
//     if (vetor[i] % 2 === 0){
//         algumPar = true;    
//         break;
//     }
// }
// console.log("Há algum par?", algumPar);

//5)Faça um script que calcule a soma dos números do vetor
const vetor = [2,3,4,6,7];
let soma = 0;

for(let i = 0; i < vetor.length; i++){
    soma += vetor[i];
}
console.log(soma);