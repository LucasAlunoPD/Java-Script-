// Cria o array para guardar os nomes que curtiram
const curtidas = [];

// Pega os elementos da página
const nomeInput = document.getElementById('nomeInput');
const curtirBtn = document.getElementById('curtirBtn');
const mensagem = document.getElementById('mensagem');

// Função pra atualizar o parágrafo com a mensagem certa
function atualizarMensagem() {
  const quantidade = curtidas.length;

  if (quantidade === 0) {
    mensagem.textContent = "Ninguém curtiu";
  } else if (quantidade === 1) {
    mensagem.textContent = `${curtidas[0]} curtiu`;
  } else if (quantidade === 2) {
    mensagem.textContent = `${curtidas[0]} e ${curtidas[1]} curtiram`;
  } else {
    mensagem.textContent = `${curtidas[0]}, ${curtidas[1]} e mais ${quantidade - 2} pessoas curtiram`;
  }
}

// Quando clicar no botão...
curtirBtn.addEventListener('click', () => {
  const nome = nomeInput.value.trim(); // Pega o nome sem espaços extras

  // Só adiciona se o nome não estiver vazio e não estiver repetido
  if (nome !== "" && !curtidas.includes(nome)) {
    curtidas.push(nome);
  }

  // Atualiza a mensagem
  atualizarMensagem();

  // Limpa o campo depois que clicar
  nomeInput.value = "";
});
