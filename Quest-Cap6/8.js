function testarEscopoDeBloco() {
    if (true) {
        let variavelEscopoBloco = "Estou dentro de um bloco";
    }

    // Tentando acessar a variável declarada com 'let' fora do bloco
    console.log(variavelEscopoBloco); // Isso causará um erro
}

testarEscopoDeBloco();
