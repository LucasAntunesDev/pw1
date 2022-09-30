function mostrarCurso(){
    const curso = document.getElementById('curso')
    const body = document.body

    if (curso.value === "INFO"){
        body.style.backgroundColor = "#0d4ebd"
        console.log(curso.value)
        alert("Informatica! Parabéns pela sensatez!")
    }
    else if ( curso.value === "MEIO" ) {
        body.style.backgroundColor = "#f9ff4d"
        console.log(curso.value)
    }
    else if ( curso.value === "AGRO" ) {
        body.style.backgroundColor = "#0dbd4b"
        console.log(curso.value)
    }
    else if ( curso.value === "ADM" ) {
        body.style.backgroundColor = "grey"
        console.log(curso.value)
    }
    else{
        body.style.backgroundColor = "#700024"
        console.log(curso.value)
    }
}