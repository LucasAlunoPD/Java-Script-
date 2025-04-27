// Array para armazenar as tarefas
const tarefas = [];

// Seleciona os elementos da página
const tarefaInput = document.getElementById('tarefaInput');
const adicionarBtn = document.getElementById('adicionarBtn');
const listaTarefas = document.getElementById('listaTarefas');

// Função para renderizar a lista de tarefas na tela
function renderizarTarefas() {
  listaTarefas.innerHTML = ""; // Limpa a lista antes de redesenhar

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = tarefa.status;
    checkbox.addEventListener('change', () => {
      tarefa.status = checkbox.checked;
      renderizarTarefas(); // Atualiza a tela quando muda o status
    });

    const span = document.createElement('span');
    span.textContent = tarefa.descricao;
    span.className = tarefa.status ? 'concluida' : 'pendente';

    li.appendChild(checkbox);
    li.appendChild(span);
    listaTarefas.appendChild(li);
  });
}

// Quando clicar no botão adicionar...
adicionarBtn.addEventListener('click', () => {
  const descricao = tarefaInput.value.trim();

  if (descricao !== "") {
    tarefas.push({
      descricao: descricao,
      status: false // Começa como "não concluído"
    });
    tarefaInput.value = ""; // Limpa o campo
    renderizarTarefas(); // Atualiza a lista
  }
});
