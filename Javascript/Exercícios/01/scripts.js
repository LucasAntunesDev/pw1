const data = [
    {
        name: "Produto1",
        quantity: 2,
    },
    {
        name: "Produto2",
        quantity: 0,
    },
    // {
    //   name: "Produto3",
    //   quantity: 0
    // },
];
console.log(data);



$ = (id) => {
    return document.getElementById(id);
}

const btn = $('btn');
const btnTexto = btn.innerHTML;
let input = $('item');

const montarTabela = (vetor) => {
    //1 - Recuperar o elemnto HTML
    const tbody = $('corpo');
    tbody.innerHTML = " ";

    for (let i = 0; i < data.length; i++) {
        // creates a table row
        const tr = document.createElement('tr');

        for (let j = 0; j < 1; j++) {
            const td1 = document.createElement('td');
            td1.innerHTML = vetor[i].name;
            const td2 = document.createElement('td');
            td2.innerHTML = vetor[i].quantity;
            //Adicionando as td's como filhas
            tr.appendChild(td1);
            tr.appendChild(td2);
            tbody.appendChild(tr);
        }
    
    }
}

let todos = true;

let estoque = montarTabela(data.filter(d => todos || d.quantity > 0));

btn.addEventListener('click', (d) => {
    // /*todos ? false :*/ montarTabela(data.filter(d => todos || d.quantity > 0))
    if(todos == true){
        montarTabela(data.filter(d => todos || d.quantity > 0));
    }else{
        montarTabela();
    }
    
    // estoque(vetor)
    btn.innerHTML = todos ? "Todos" : "Somente com estoque";
    // if(todos == true){
    //     btn.innerHTML == 'Somente com estoque'
    //     todos = false;
    // }else{
    //     btn.innerHTML == 'Todos'
    //     todos = true;
    // }
    todos = !todos;
    console.log(todos)

}
)

  //localeCompare => compara strings [usar] orderna as strings, coloca em ordem alfabética