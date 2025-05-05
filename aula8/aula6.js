
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

const tarefaInput = document.getElementById('tarefaInput');
const adicionarBtn = document.getElementById('adicionarBtn');
const listaTarefas = document.getElementById('listaTarefas');

function salvarLocalStorage() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function renderizarTarefas() {
  listaTarefas.innerHTML = "";

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = tarefa.status;
    checkbox.addEventListener('change', () => {
      tarefa.status = checkbox.checked;
      salvarLocalStorage();
      renderizarTarefas();
    });

    const span = document.createElement('span');
    span.textContent = tarefa.descricao;
    span.className = tarefa.status ? 'concluida' : 'pendente';

    const excluirBtn = document.createElement('button');
    excluirBtn.textContent = "Excluir";
    excluirBtn.style.marginLeft = "10px";
    excluirBtn.addEventListener('click', () => {
      tarefas.splice(index, 1);
      salvarLocalStorage();
      renderizarTarefas();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(excluirBtn);
    listaTarefas.appendChild(li);
  });
}

adicionarBtn.addEventListener('click', () => {
  const descricao = tarefaInput.value.trim();

  if (descricao !== "") {
    tarefas.push({ descricao, status: false });
    tarefaInput.value = "";
    salvarLocalStorage();
    renderizarTarefas();
  }
});

renderizarTarefas();
