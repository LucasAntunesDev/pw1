/*
*WHILE
*Essa estrutura tem zero ou mais interações;
*Precisa criar uma variável para controlar as interações;
*As interaões terminam quando a condição se tornar falsa;
*As interações também podem erminar com o comando break;
*
*Sintaxe
*while (condição  //A condição DEVE ser uma expressão lógica){
*    comandos
*}
*
*1) Faça um script que receba um número inteiro positivo e mostre
*todos os números inteiros positivios menores que ele.
let x = parseInt(prompt('Entre com um número: '));
let i = 1
while (i < x) {
    console.log(i);
    i++;
}*/

/*2) Acrescente no exercício anterior para solicitar um número
*enquanto o usuário não informar um número positivio.
let x ;
let i = 1
do{
   x = parseInt(prompt('Entre com um número: '));
}while (x < 1) {
        x = parseInt(prompt('Por favor, entre com um número positivo: '));
}
while (i < x) {
    console.log(i);
    i++;
}
*/
/*
3) Caso não exista números positivos menores que o informado
pelo usuário, deve-se mostrar uma mensgaem: "Não existem números 
menores que o informado".
let x ;
let i = 1
do{
   x = parseInt(prompt('Entre com um número: '));
}while (x < 1) {
        x = parseInt(prompt('Por favor, entre com um número positivo: '));
}
if(x === 1) console.log('Não existem números menores que o informado');
while (i < x) {
    console.log(i);
    i++;
}
*/



/**
 * FOR
 * Possui um
 * let $x
    for($x = 0; x < 1;  $x = parseInt(prompt('Entre com um número: ')));
       
    if ($x === 1) console.log('Não existem números menores que o informado');
    for (let $i = 1; $i < $x; i++){
        console.log($i);
    }
 */

//Números pares menores que o número e maiores que a sua metade

const x = parseInt(prompt("Entre com um número: "));
const metade = x / 2;

for (let i = metade; i < x; i++ ) {
    if (i % 2 === 0) {
        console.log(i);
    }
}