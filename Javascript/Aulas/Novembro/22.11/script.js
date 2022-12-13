const div = document.getElementById('div');
const body = document.getElementById('body');
const form = document.getElementById('form');
const botao = document.getElementById('botao');
const perguntas =
    [
        {
            pergunta: 'Qual banda é brasileira?',
            resposta: "Sepultura",
            alternativa:
                [{ letra: 'A', texto: 'Sepultura', id: 'sepultura' },
                { letra: 'B', texto: 'Metallica', id: 'metallica' },
                { letra: 'C', texto: 'Iron Maiden', id: 'maiden' }]
        },

        {
            pergunta: 'Qual é um álbum do Angra?',
            resposta: "Rebirth",
            alternativa:
                [{ letra: 'A', texto: 'Fragile Equality', id: 'equality' },
                { letra: 'B', texto: 'Ritual', id: 'ritual' },
                { letra: 'C', texto: 'Rebirth', id: 'rebirth' }]
        }
    ]


const montarP = () => {
    for (let i = 0; i < perguntas.length; i++) {
        const p = document.createElement('h3');
        form.appendChild(p);
        p.setAttribute('id', i)
        p.innerHTML = perguntas[i].pergunta;
        perguntas[i].alternativa.forEach(a => {
            const respo = document.createElement('input');
            form.appendChild(respo);
            respo.setAttribute("type", "radio");
            respo.setAttribute('name', perguntas[i].pergunta);
            respo.setAttribute('id', perguntas[i].pergunta);
            const label = document.createElement('label');
            label.setAttribute('for', perguntas[i].pergunta);
            label.innerHTML = a.texto;
            form.appendChild(respo);
            form.appendChild(label);
        });
    }

}

montarP();

const montarDiv = () => {
    const divRespsotas = document.createElement('div');
    divRespsotas.setAttribute('id','div-respostas');
}

botao.addEventListener('click', () => {
    // const form = document.forms[0]
    // const x =form.elemnts.namedItem('p1').value
    // alert(x)
    const divRespsotas = document.createElement('div');
    divRespsotas.setAttribute('id','div-respostas');
    const resposta1 = document.createElement('h4');
    const resposta2 = document.createElement('h4');
    resposta1.innerHTML = perguntas[0].resposta;
    divRespsotas.appendChild(resposta1);
    resposta2.innerHTML = perguntas[1].resposta;
    divRespsotas.appendChild(resposta2);

})

//Document.forms [i]

//form.elements.nameItem('p1').value

// const form = document.forms[0]
// const x =form.elemnts.namedItem('p1').value
// alert(x)











// {Pergunta: "Qual foi o campeão do Mundial de Clubes da FIFA de 2006?", Resposta: "Inter", Alternativas: [{letra:'', Texto: ''},{letra:'', Texto: ''},{letra:'', Texto: ''}]},
    // {Pergunta: "Em que ano foi lançado do disco Temple of Shadows?", Resposta: "2004", Alternativas: [{letra:'', Texto: ''},{letra:'', Texto: ''},{letra:'', Texto: ''}]},
    // {Pergunta: "Qual é fornecedora de material esportivo do Inter?", Resposta: "Adidas", Alternativas: [{letra:'', Texto: ''},{letra:'', Texto: ''},{letra:'', Texto: ''}]},
    // {Pergunta: "", Resposta: "", Alternativas: [{letra:'A', Texto: ''},{letra:'B', Texto: ''},{letra:'', Texto: 'C'}]},