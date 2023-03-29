// Captura do elementos HTML
const inputTarefas = document.getElementById('input-tarefas');
const deleteTarefas = document.getElementById('delete-tarefas');
const praFazerList = document.querySelector('.pra-fazer-list');
const planejarList = document.querySelector('.planejar-list');
const botaoCriar = document.querySelector('#input-Tarefas');
const botaoDeletar = document.querySelector('#delete-tarefas');

// Evento do click criando tarefa
const criarTarefa = botaoCriar.addEventListener('click', () =>{
    console.log('oi')
    const formTarefa = document.createElement("form");
    const pTarefa = document.createElement("h3");
    pTarefa.textContent = 'Informe a nova tarefa aqui abaixo'
    formTarefa.classList.add("form");
    const inputTarefa = document.createElement("input");    
    inputTarefa.type = 'text';    
    const botaoEnviar = document.createElement("button");
    botaoEnviar.textContent = 'Criar tarefa';
    formTarefa.appendChild(pTarefa);
    formTarefa.appendChild(inputTarefa);
    formTarefa.appendChild(botaoEnviar);
    document.body.appendChild(formTarefa);

});


// Evento do click excluindo tarefa
const deletarTarefa = botaoDeletar.addEventListener('click', () =>{
    //const inputTarefa = document.createElement("input");
    console.log('oi')
});


