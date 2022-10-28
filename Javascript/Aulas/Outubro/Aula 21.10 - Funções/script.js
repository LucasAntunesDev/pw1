// [2,3,4] => [4,6,8]; (Map)
// [2,3,4] => [2,4]; (Filter)
// [2,3,4] = > FALSE; (Every)
// [2,3,4] => TRUE;  (Some)

//MAP -> Quando a resposta(vetor) tem o mesmo valor(vetor) da entrada e é possível modificar os valores
const valores = [2, 3, 4, 5, 6, 7];
// const novo = valores.map(function (valor, posicao, vetor) { //1º valor atual, 2º posição, 3º própio vetor 
//     console.log(valor, posicao, vetor);
//     //return 'R$' + valores.toFixed(2);=> R$ 00,00 
//     return valor * 2;
// })

const novo = valores.map(v => v * 2);
console.log(valores, novo);

/*SINTAXE ARROW FUNCTION -> const teste (valor) =>{return valor * 2;} OU (valor) => {return valor * 2;} [FUNÇÃO ANÔNIMA]
Quando a única cosia que a função faz é um return, podemos omiti-lo do código, só escrtevendo o que queremso retornar*/

//FILTER -> Não muda os valores do vetors, mas pega alguma parte dele (SUBCONJUNTO) EX: [2,3,4] => (filter) [2,4]{Pares}
//SEMPRE retorna um valor lógico
// const novo2 = valores.filter(function(valor){
//     if (valor % 2 === 0) return true;

//     return false;
// }) OPÇÃO MAIS VERBOSA

// const novo2 = valores.filter(valor => valor % 2 === 0
//      //Vai retornar vardadeiro, então não precisa escrever RETURN TRUE, como no exemplo de cima 
//      //Opção menos verbosa
// )
// console.log(valores, novo2);

//Return é o último comando a ser executado, qualquer linha abaixo dele NÃO é executada

// EVERY -> Verifica um && (E lógico) (testa se determinada condição é verdadeira para todos os índices de um vetor)
// const todosPares = valores.every(valor => valor % 2 === 0);
// console.log(valores, todosPares);

// SOME (Verifica um|| (OU lógico))
const pelosMenosUm = valores.some(valor => valor % 2 === 0);
console.log(valores, pelosMenosUm);













































//REDUCE
/*const numeros = [3,4,5,7,2,3,6];
let soma = 0;
for(let i=0; i<numeros.length; i++){
    soma = soma + numeros[i];
}
console.log(soma);*/