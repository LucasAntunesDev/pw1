function mostrarNome(){
    // Acessar um determinado elemento
    const input = document.getElementById('nome')

    // Mostrar o valor deste elemento (dinâmico)
    console.log(input.value)

    // Mostrar o valor deste elemento (estático)
    console.log(input.getAttribute('value'))
}