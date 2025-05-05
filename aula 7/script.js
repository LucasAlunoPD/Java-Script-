// Recupera lista do localStorage 
let curtidas = JSON.parse(localStorage.getItem("curtidas")) || [];

function atualizarMensagem() {
  const msg = document.getElementById("mensagem");
  const tamanho = curtidas.length;

  if (tamanho === 0) {
    msg.textContent = "Ninguém curtiu";
  } else if (tamanho === 1) {
    msg.textContent = `${curtidas[0]} curtiu`;
  } else if (tamanho === 2) {
    msg.textContent = `${curtidas[0]} e ${curtidas[1]} curtiram`;
  } else {
    msg.textContent = `${curtidas[0]}, ${curtidas[1]} e mais ${tamanho - 2} pessoas curtiram`;
  }
}

document.getElementById("curtirBtn").addEventListener("click", () => {
  const nomeInput = document.getElementById("nome");
  const nome = nomeInput.value.trim();

  if (nome && !curtidas.includes(nome)) {
    curtidas.push(nome);
    localStorage.setItem("curtidas", JSON.stringify(curtidas));
    atualizarMensagem();
  }

  nomeInput.value = "";
});

document.getElementById("limparBtn").addEventListener("click", () => {
  curtidas = [];
  localStorage.removeItem("curtidas");
  atualizarMensagem();
});

// Atualiza mensagem ao carregar a página
atualizarMensagem();
