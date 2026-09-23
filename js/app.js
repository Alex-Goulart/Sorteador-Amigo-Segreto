let nomeAmigos = [];

// Função Para Formatar o nome
function formatarNome(nome){
    return nome
    .toLowerCase()
    .split('')
    .map( function(palavra){
        return palavra.charAt(0).toUpperCase() + palavra.slice(1);
    })
    .join('');
}
// Função Adicionar nomes
function adicionar(){
    let adicionarNome = document.getElementById('nome-amigo').value; // Pega o Nome digitado pelo Usuário
    adicionarNome = adicionarNome.trim(); // O trim remove o espaço do começo e do final do nome

    // Verifica se o campo está vazio
    if(adicionarNome === ''){
        alert('Por favor, insira um nome antes de adicionar.');
        return;
    }
    //Verifca se o nome está repeditido
    let nomeNormalizado = adicionarNome.toLowerCase(); // toLowerCase converte a entrada para minúscula
    if (nomeAmigos.some(function (nome){
        return nome.toLowerCase() === nomeNormalizado;
    })){
        alert('Esse nome já foi adicionado à lista!'); 
        return;
    }

    adicionarNome = formatarNome(adicionarNome); // Chamando a função que formata os nomes
    nomeAmigos.push(adicionarNome); // Adiciona o nome ao array
    mostrarLista(); // Atualiza a lista de amigos na tela
    document.getElementById('nome-amigo').value = ''; // Limpa o campo depois de adicionar
}

/// Mostrar lista de amigos
function mostrarLista() {

    let lista = document.getElementById('lista-amigos');

    // Limpar a lista antes de mostrar novamente
    lista.innerHTML = '';

    for (let i = 0; i < nomeAmigos.length; i++) {

        // Criar um elemento span para cada nome
        let nome = document.createElement('span');

        nome.textContent = nomeAmigos[i];

        // Permitir clicar no nome para remover
        nome.onclick = function() {
            removerAmigo(i);
        };

        lista.appendChild(nome);

        // Adicionar vírgula entre os nomes
        if (i < nomeAmigos.length - 1) {
            lista.appendChild(document.createTextNode(', '));
        }
    }
}


// Remover amigo
function removerAmigo(indice) {

    nomeAmigos.splice(indice, 1);

    mostrarLista();
}

//Criando a Função Sortear Nomes
function sortear(){

    if (nomeAmigos.length <2 || nomeAmigos.length %2 !==0){ // Verifica se existe uma quantidade par de amigos
        alert('Para realizar o sorteio a quantidade de amigos tem que ser par!!');
        return
    }
    
    nomeAmigos.sort(()=> Math.random()-0.5); // Embaralha os nomes
    let pares = " "; // Cria uma variável para guardar os pares
    for (let i = 0; i < nomeAmigos.length; i +=2){
        pares += nomeAmigos[i] + ' -> '  +nomeAmigos[i + 1] +'<br>'; // Percorre a lista de 2 em 2
    }
   
    document.getElementById('lista-sorteio').innerHTML = pares; // Mostra os pares na página
}

// Criar funação para reiniciar o sorteio
function reiniciar(){
    nomeAmigos = [];

    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
