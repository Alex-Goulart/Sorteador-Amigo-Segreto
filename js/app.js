let nomeAmigos = [];
//Criando a Função Adicionar nomes
function adicionar(){
    let adicionarNome = document.getElementById('nome-amigo').value;

    // Verifica se o campo está vazio
    if(adicionarNome === ''){
        alert('Por favor, insira um nome antes de adicionar.');
        return; // Sai da função se o campo estiver vazio
    }

    //Verificar se o nome esta repetido
    if (nomeAmigos.includes(adicionarNome)){
        alert('Esse nome já foi adicionado a lista!')
        return
    }
    // Adiciona o nome ao array
    nomeAmigos.push(adicionarNome); 
    // Atualiza a lista de amigos na tela
    mostrarLista(); 
    // Limpa o campo depois de adicionar
    document.getElementById('nome-amigo').value = '';
}

// Mostrar lista de amigos
function mostrarLista(){
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';
    for (let i = 0 ; i < nomeAmigos.length; i++){
        let nome = document.createElement('span');
        nome.textContent = nomeAmigos[i] + ', ';
        nome.onclick = function(){
            removerAmigo(i);
        };
        
        lista.appendChild(nome);
    }
}
// Função Remover amigo
function removerAmigo(indice){
    nomeAmigos.splice(indice, 1);
    mostrarLista();

}

//Criando a Função Sortear Nomes
function sortear(){
    // Verifica se existe uma quantidade par de amigos
    if (nomeAmigos.length <2 || nomeAmigos.length %2 !==0){
        alert('Para realizar o sorteio a quantidade de amigos tem que ser par!!');
        return
    }
    // Embaralha os nomes
    nomeAmigos.sort(()=> Math.random()-0.5);
    let pares = " "; // Cria uma variável para guardar os pares
    for (let i = 0; i < nomeAmigos.length; i +=2){
        pares += nomeAmigos[i] + ' -> '  +nomeAmigos[i + 1] +'<br>'; // Percorre a lista de 2 em 2
    }
    // Mostra os pares na página
    document.getElementById('lista-sorteio').innerHTML = pares;
}

// Criar funação para reiniciar o sorteio
function reiniciar(){
    nomeAmigos = [];

    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
