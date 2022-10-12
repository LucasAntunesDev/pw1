function mostrarCurso() {
    const curso = document.getElementById('curso').value;
    const body = document.body;
    let cursoSelecionado = document.getElementById('curso-selecionado');
    console.log(document.getElementById('curso-selecionado').innerHTML);
    const texto = "Seu curso é: "
    const info = "Técnico em Informatica para Internet";
    const eno = "Técnico em Enologia e Viticultura";
    const meio = "Técnico em Meio Ambiente";
    const adm = "Técnico em Administração";
    const agro = "Técnico em Agropecuária";

    switch (curso) {
        case "INFO":
            alert(`${info}! Parabéns pela sensatez!`);
            body.style.backgroundColor = "#0d4ebd";
            body.style.color = "white";
            cursoSelecionado.innerHTML = `${texto}${info}`
            ; break// BREAK INTERROMPE

        case "ADM":
            alert(adm);
            body.style.backgroundColor = "gray";
            body.style.color = "white";
            cursoSelecionado.innerHTML = `${texto}${adm}`
            ; break
        case "ENO":
            alert(eno);
            body.style.backgroundColor = "#700024";
            body.style.color = "white";
            cursoSelecionado.innerHTML = `${texto}${eno}`
            ; break
        case "MEIO":
            alert(meio);
            body.style.backgroundColor = "#f9ff4d";
            body.style.color = "rgb(93 96 10)";
            cursoSelecionado.innerHTML = `${texto}${meio}`
            ; break
        default: //=> else
            alert(agro);
            body.style.backgroundColor = "#0dbd4b";
            body.style.color = "white";
            cursoSelecionado.innerHTML = `${texto}${agro}` //O ÚLTIMMO NÃO NESSECITA DE BREAK
    }
}