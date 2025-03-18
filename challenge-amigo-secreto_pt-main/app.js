let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeDoAmigo = inputAmigo.value.trim();

    
    if (nomeDoAmigo === "") {
        alert("Por favor, insira um nome.");
        return; 
    }
  
    
    if (amigos.includes(nomeDoAmigo)) {
      alert(`O nome ${nomeDoAmigo} já está na lista.`);
      return;
   }

   amigos.push(nomeDoAmigo);
   
   inputAmigo.value = "";

   atualizarLista();
  }

  
function atualizarLista() {
  const listaDeAmigos = document.getElementById('listaDeAmigos');
  
  listaDeAmigos.innerHTML = ""; 

  for (let i = 0; i < amigos.length; i++) {
      const li = document.createElement('li');
      li.textContent = amigos[i];
      listaAmigos.appendChild(li);
  }
}
