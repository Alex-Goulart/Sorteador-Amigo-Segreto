let nomeAmigos = [];
//Criando a Função Adicionar nomes
function adicionar(){
    let adicionarNome = document.getElementById('nome-amigo').value;

    // Verifica se o campo está vazio
    if(adicionarNome === ''){
        alert('Por favor, insira um nome antes de adicionar.');
        return; // Sai da função se o campo estiver vazio
    }
    // Adiciona o nome ao array
    nomeAmigos.push(adicionarNome); 
    // Atualiza a lista de amigos na tela
    document.getElementById('lista-amigos').textContent = nomeAmigos.join(', '); 
    // Limpa o campo depois de adicionar
    document.getElementById('nome-amigo').value = '';
}

//Criando a Função Sortear Nomes
function sortear(){
    // Verifica se existe uma quantidade par de amigos
    if (nomeAmigos.length <2 || nomeAmigos.length %2 !==0){
        alert('Para realizar o sorteio a quantidade de amigos tem que ser par!!');
        return
    }
    let sorteio = Math.floor(Math.random() * nomeAmigos.length);
    document.getElementById('lista-sorteio').textContent = nomeAmigos[sorteio];
}

// Criar funação para reiniciar o sorteio
function reiniciar(){
    nomeAmigos = [];
}

document.getElementById('lista-amigos').textContent = '';
document.getElementById('lista-sorteio').textContent = '';
document.getElementById('nome-amigos').textContent = '';