//Escoplo global : Variável existe em todo o código
//Escopo de bloco : Variável existe apenas no trecho em que ela foi declarada

///var | let | const

//int | float (real) | string | boolean [true|false] | null (existe, mas não tem valor)(valor da variável definido como nulo) 
//| array | object | undifined (é como se não existisse)(valor da variável indefinido [se não foi inicializada]) > Tipos

var nome;

nome = "Lucas";

if (true) {
    let nome = "Outro";
    console.log(nome);
}

console.log(nome);

//Crase (não precisa ficar concatenado o código) *Concatenar => Juntar strings: 
let primeiroNome = "Lucas", ultimoNome = "Antunes"
console.log(`A palavra ${primeiroNome} tem ${primeiroNome.length} caracteres`)
//let nomeCompleto = primeiroNome + ' ' + ultimoNome => Normal
//let nomeCompleto = `${primeiroNome} ${ultimoNome}` =>Template string (crase)

//Em uma soma de string com número, a STRING É PRIORIDADE, 
//logo, ele cancatena os dois (número também vira string)
//console.log(1 + 2+ 3 + "T") => "6T"

//Exemplo de atribuição de variáveis:
let produto = "Arroz" //String
let quantidade = 2 //Int
let preco = 4.59 //Float
let temEstoque = true //Boolean

// Esquerda do "=" > variável
// Direita do "=" > expressão
//Ex: variável (recebe o valor da expressão) = expressão (manda seu valor para a variável)

//Expressão artimética: let soma = 2 + 3

//Expressões lógicas (resposta SEMPRE será um valor LÓGICO):
//Os operandos da expressão lógica podem ser:
//números(operadores relacionais) ou valores lógicos (operadores lógicos)
//EX: let r = 3 > 5 
//console.log(r) => false