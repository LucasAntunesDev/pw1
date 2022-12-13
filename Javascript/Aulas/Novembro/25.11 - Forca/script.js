$ = (id) => {
    return document.getElementById(id);
}

const div = $('div');

// const perguntas = [
//     {Pergunta: 'Qual banda é brasileira?', 
//     Resposta: "Sepultura", Alternativas: 
//     [{Letra:'A', Texto: ''},
//     {Letra:'B', Texto: ''},
//     {Letra:'C', Texto: ''}]},

// ]

const body = $('body');

const perguntas = 
    {pergunta: 'Qual banda é brasileira?', 
    resposta: "Sepultura",
    alternativa: 
    [{Letra:'A', Texto: 'Sepultura'},
    {Letra:'B', Texto: 'Metallica'},
    {Letra:'C', Texto: 'Iron Maiden'}]},


montarP =  () => {
    for(let i = 0; i < perguntas.lenght; i++){
        const p = document.createElement('p');
        p.innerHTML = perguntas['i'].pergunta;
        body.appendChild(p);
        perguntas[i].alternativa.array.forEach(a => {
            const respo = document.createAttribute('input');
            respo.se
        });
    }

create = (create) => {
    return document.createElement(create);
}

//     const pergunta = document.createElement('p');
//     pergunta.innerHTML = perguntas.Pegunta
//     // const pergunta = perguntas[0].Pergunta;
//     console.log(perguntas.Pergunta);
// }


//Document.forms [i]

//form.elements.nameItem('p1').value

const form = document.forms[0]
const x =form.elemnts.namedItem('p1').value
alert(x)











// {Pergunta: "Qual foi o campeão do Mundial de Clubes da FIFA de 2006?", Resposta: "Inter", Alternativas: [{Letra:'', Texto: ''},{Letra:'', Texto: ''},{Letra:'', Texto: ''}]},
    // {Pergunta: "Em que ano foi lançado do disco Temple of Shadows?", Resposta: "2004", Alternativas: [{Letra:'', Texto: ''},{Letra:'', Texto: ''},{Letra:'', Texto: ''}]},
    // {Pergunta: "Qual é fornecedora de material esportivo do Inter?", Resposta: "Adidas", Alternativas: [{Letra:'', Texto: ''},{Letra:'', Texto: ''},{Letra:'', Texto: ''}]},
    // {Pergunta: "", Resposta: "", Alternativas: [{Letra:'A', Texto: ''},{Letra:'B', Texto: ''},{Letra:'', Texto: 'C'}]},
function $$(classe) {
    return document.getElementsByClassName(classe);
}