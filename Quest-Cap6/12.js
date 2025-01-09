function calculadora(){
    const primeiroNumero = prompt("Digite o primeiro número:")
    const operacao = prompt("Digite a operação:")
    const segundoNumero = prompt("Digite o segundo número:")

    switch(operacao){
        case "+":
            exibirResultado(soma(primeiroNumero, segundoNumero))
        case "*":
            exibirResultado(multiplica(primeiroNumero, segundoNumero))
            break
    }
}

function exibirResultado(resultado){
    console.log(resultado);
}
