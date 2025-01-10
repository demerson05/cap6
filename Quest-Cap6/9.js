const testarEscopos = () => {
    if (true) {
        let variavelEscopoBloco = "Estou dentro de um bloco";
        var variavelEscopoFuncao = "Estou no escopo da função";
    }

    // Tentando acessar a variável declarada com 'let' fora do bloco
    console.log(variavelEscopoBloco); // Isso causará um erro

    // Acessando a variável declarada com 'var' fora do bloco
    console.log(variavelEscopoFuncao); // Isso funcionará
}

testarEscopos();

