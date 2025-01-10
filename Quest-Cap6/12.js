function soma(a, b) {
    return a + b;
}

function multiplica(a, b) {
    return a * b;
}

function calculadora() {
    const primeiroNumero = parseFloat(prompt("Digite o primeiro número:"));
    const operacao = prompt("Digite a operação (+ ou *):");
    const segundoNumero = parseFloat(prompt("Digite o segundo número:"));

    switch (operacao) {
        case "+":
            exibirResultado(soma(primeiroNumero, segundoNumero));
            break;
        case "*":
            exibirResultado(multiplica(primeiroNumero, segundoNumero));
            break;
        default:
            console.log("Operação inválida");
    }
}

function exibirResultado(resultado) {
    console.log("Resultado: " + resultado);
}

calculadora();

