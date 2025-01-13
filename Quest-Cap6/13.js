const obterValorEmReal = () => {
    const valor = parseFloat(prompt("Digite o valor em Real (R$):"));
    return valor;
}

const converterParaDolar = (valorReal, taxaDeCambio) => {
    return valorReal / taxaDeCambio;
}

const exibirResultado = (valorReal, valorDolar) => {
    console.log(`R$ ${valorReal} é equivalente a US$ ${valorDolar.toFixed(2)}.`);
}

const conversorDeMoeda = () => {
    const valorReal = obterValorEmReal();
    const taxaDeCambio = 6.1; // Exemplo de taxa de câmbio (R$1 = US$5.2)
    
    if (isNaN(valorReal) || valorReal <= 0) {
        console.log("Por favor, insira um valor válido em Real.");
        return;
    }

    const valorDolar = converterParaDolar(valorReal, taxaDeCambio);
    exibirResultado(valorReal, valorDolar);
}

conversorDeMoeda();


