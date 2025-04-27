// Seleciona o título e muda o texto
const titulo = document.getElementById('titulo');
titulo.textContent = 'Título Alterado! 🚀';

// Seleciona todos os itens da lista e altera o estilo
const itensLista = document.querySelectorAll('#lista li');
itensLista.forEach(item => {
  item.style.color = 'green';     // Muda a cor da letra
  item.style.fontSize = '20px';    // Aumenta o tamanho da fonte
});

// Seleciona todos os parágrafos e adiciona uma classe
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach(p => {
  p.classList.add('destaque');
});

// Seleciona o botão e muda o texto
const botao = document.getElementById('botao');
botao.textContent = 'Novo Texto do Botão 😎';
