
document.getElementById("buscarBtn").addEventListener("click", () => {
  const termo = document.getElementById("buscaInput").value.trim();
  const lista = document.getElementById("resultado");
  lista.innerHTML = "";

  if (termo === "") {
    alert("Digite um nome de usuário para buscar.");
    return;
  }

  fetch(`https://api.github.com/search/users?q=${encodeURIComponent(termo)}`)
    .then(res => res.json())
    .then(data => {
      if (data.items && data.items.length > 0) {
        data.items.forEach(user => {
          const li = document.createElement("li");
          

li.innerHTML = '<img src="' + user.avatar_url + '" alt="avatar" width="50" style="vertical-align: middle; border-radius: 50%;"> ' +
               '<a href="' + user.html_url + '" target="_blank">' + user.login + '</a>';

          lista.appendChild(li);
        });
      } else {
        const li = document.createElement("li");
        li.textContent = "Não foram encontrados usuários para esta pesquisa.";
        lista.appendChild(li);
      }
    })
    .catch(error => {
      console.error("Erro ao buscar usuários:", error);
      const li = document.createElement("li");
      li.textContent = "Ocorreu um erro ao buscar os usuários.";
      lista.appendChild(li);
    });
});
