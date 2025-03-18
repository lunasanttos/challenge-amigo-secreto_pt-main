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
  }