//FUNÇÕES
let a = 7, b = 8;


function soma(a, b) { //Parâmetro obrigatório (não deviniu um valor p/ o parâmetro) 
    //Parâmetro opcional -> Define um valor pro parâmetro EX: soma(a, b = 3)
    //Parâmetro obrigatório primeiro, opcional depois
   return a + b;   
}

// const resultado2 = soma(7,5,2) || soma(7,2,5);
// const resultado3 = soma(7, 5) || soma(7,5,5);
// const resultado4 = soma(7, 3, 7) || (7,7);
//const resultado5 = soma(7,3,8) || soma(7,8); Valor opcional mais usado ganha preferência
//Arrow Function
const soma1 = (a ,b = 7) => {
    a++
    return a + b;
}

const soma2 = (a ,b = 7) => ++a + b;

const resultado = soma(b, a);

console.log(soma1(2,3), soma2(2,3));