function init() {
    const peso = parseFloat(prompt("Informe o seu peso (em kg): "));
    const altura = parseFloat(prompt("Informe sua altura (em metros): "));

    // Calculando o IMC
    const imc = calculaIMC(peso, altura);

    // Classificando o IMC
    const classificacao = classificarIMC(imc);

    // Exibindo o resultado
    exibirResultado(imc, classificacao);
}

function calculaIMC(peso, altura) {
    return peso / (altura * altura); // Fórmula correta do IMC
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}

function exibirResultado(imc, classificacao) {
    alert(`Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}`);
}

// Iniciando o programa
init();

