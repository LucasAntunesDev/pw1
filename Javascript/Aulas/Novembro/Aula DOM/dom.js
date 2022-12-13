function $(id) {
    return document.getElementById(id);
}

const cursos = [
    { nome: 'Técnico em Informática para Internet', id: 'INFO' },
    { nome: 'Técnico em Meio Ambiente', id: 'MEIO' },
    { nome: 'Técnico em Agropecuária', id: 'AGRO' },
]

const createOption = (value, label) => {
    //Criar um option
    const option = document.createElement('option');
    //Definir atributos
    option.setAttribute('value', value);
    //Definir um texto 
    option.innerHTML = label;
    //Adicionar option como filho do select
    return option;
}

const montarSelectCursos = () => {
    const select = $('cursos');
    select.appendChild(createOption('','Selecione'));
    
    for (let i = 0; i < cursos.length; i++){
        //Criar um option
        const option = createOption(cursos[i].id, cursos[i].nome);
        select.appendChild(option);
    }
}

const turnos = [
    { nome: 'Manhã', id: 'Manhã' },
    { nome: 'Tarde', id: 'Tarde' },
    { nome: 'Noite', id: 'Noite' },
]

const montarSelectTurnos = () => {
    const select = $('turnos');
    select.appendChild(createOption('','Selecione'));

    for (let i = 0; i < cursos.length; i++){
        const option = createOption(turnos[i].id, turnos[i].nome);
        select.appendChild(option);
    }
}

montarSelectCursos();
montarSelectTurnos();