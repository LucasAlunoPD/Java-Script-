// Função pra calcular quanto tempo falta até a data futura
function calcularTempoRestante(dataFutura) {
  const agora = new Date(); // pega o momento atual
  const diferenca = dataFutura - agora; // vê quantos milissegundos faltam

  // Se já passou da data... zeramos tudo
  if (diferenca <= 0) {
    return {
      dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0
    };
  }

  // Bora transformar essa diferença em dias, horas, minutos e segundos
  const segundos = Math.floor((diferenca / 1000) % 60);
  const minutos = Math.floor((diferenca / 1000 / 60) % 60);
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

  return { dias, horas, minutos, segundos };
}

// Função que vai jogar o tempo lá no HTML
function atualizarTemporizador() {
  const dataFutura = new Date('2025-12-31T23:59:59'); // 🎯 Aqui você coloca o seu objetivo final
  const tempo = calcularTempoRestante(dataFutura);

  const temporizador = document.getElementById('temporizador');
  temporizador.textContent = `${tempo.dias}d ${tempo.horas}h ${tempo.minutos}m ${tempo.segundos}s`;
}

// Atualiza o tempo na tela a cada segundo (1000 milissegundos)
setInterval(atualizarTemporizador, 1000);

// E já atualiza assim que a página carrega, né... ninguém quer esperar!
atualizarTemporizador();
