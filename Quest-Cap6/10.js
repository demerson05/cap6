const media = (num1, num2) => {
    return (num1 + num2 ) / 2;
}

const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o segundo número:"));


const resultado = media(num1, num2).toFixed(1);
console.log(`A média dos dois números é: ${resultado}`);

