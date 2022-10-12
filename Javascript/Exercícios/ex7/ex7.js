// Faça um HTML com uma div contendo um texto 
// e um botão. Você deve definir o texto
//da div. Em sueguida, crie um csript que
// quando clicar no botão a div alterne entre
//visível (block) e invisível (none).
// O botão deve alternar o seu conteúdo também.
//Quando o texto estiver visível, você 
//irá mostrar 'Esconder' no tetxo do botão.
//Quando o texto estiver oculto, você 
//irá mostrar 'Mostar' no tetxo do botão.

botao.style.backgroundColor = 'crimson'
botao.style.color = 'whitesmoke'
botao.style.borderRadius = '10px'
botao.style.padding = '10px'
botao.style.margin = '20px'
botao.style.border = 'none'


function toggle(){
   const btn = document.getElementById('botao')
   const div = document.getElementById('texto')
    
   if (div.style.display !== 'none'){
       div.style.display = 'none'
       btn.innerHTML = "Mostar"
   }
   else{
    div.style.display = ''
    btn.innerHTML = "Esconder"
   }
}
