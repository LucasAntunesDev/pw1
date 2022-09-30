//Objetos: Contém um conjunto finito de propiedades e funções


//Sintaxe
//const pessoa = {nome:Lucas}


//Mostar valor da propiedade
//console.log(pessoa)

//Remoção de propiedade
// delete pessoa.nome

const pessoa = { nome: 'Lucas', sobrenome: 'Antunes' }

//const nome = pessoa.nome
//const sobrenome = pessoa.sobrenome

const { nome, sobrenome } = pessoa  //Cria uma varável nome e uma variável sobrenome com os valores utilizados no objeto
//(Desestruturando o objeto)

// const vetor = [1,2]
// const [n1,n2] = vetor > Desestruturação do vetor

function $(id) {
    return document.getElementById(id)
}

function mostar() {
    //alert(`${pessoa.nome} ${pessoa.sobrenome}`) //Template string => Coloca um JS dentro das chaves
    $('nome').innerHTML = pessoa.nome
    $('sobrenome').innerHTML = pessoa.sobrenome
}

const estados = [
    { sigla: 'RS', nome: 'Rio Grande do Sul', regiao: 'Sul' },
    { sigla: 'SC', nome: 'Santa Catarina', regiao: 'Sul' },
    { sigla: 'PR', nome: 'Paraná', regiao: 'Sul' },
    { sigla: 'RJ', nome: 'Rio de Janeiro', regiao: 'Sudeste' },
    { sigla: 'SP', nome: 'São Paulo', regiao: 'Sudeste' },
    { sigla: 'MG', nome: 'Minas Gerais', regiao: 'Sudeste' },
    { sigla: 'ES', nome: 'Espírito Santo', regiao: 'Sudeste' },
]

// for(let x = 0; x < estados.length; x++){
//     console.log(estados[x].nome)
// }

// for (index in estados){
//     console.log(estados[index].nome)
// }



// for (estado of estados){
//     console.log(`${estado.nome} - ${estado.sigla}`)
// }

// for (let {nome, sigla, regiao } of estados){
//     if(regiao !== "Sul") continue;
        
//     console.log(`${nome} - ${sigla}`)
    
// }


// for (let x = 0; x < 10; x++){
//     if(x === 5) continue;
//     console.log(x)
// }

function mostarEstados($re){
    // if(Regiao == "Sul"){
    //     console.log(`${nome} - ${sigla}`)
    // }

    for (let {nome, sigla, regiao } of estados){
        if(regiao !== $re) continue;
        
        console.log(`${nome} - ${sigla}`)
        
    }
}