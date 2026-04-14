let valorCarro = parseFloat(prompt("Digite o valor do carro:"));
let formaPagamento = prompt("Escolha a forma de pagamento:\n1- PIX (15% desconto)\n2 - Cartão (5% juros)\n3- Financiamento (20% juros)");

let valorFinal, parcelas

if (FormaPagamento === "1") {
    valorFinal = valorCarro * 0.85;
    console.log('Pagamento PIX: R$ ${valorFinal.toFixed(2)}');
} else if (formaPagamento === "2") {
    valorFinal = valorCarro * 1.05;
    let numParcelas = parseInt(prompt("Em quantas vezes? (Ate 24x)"));
    parcelas = valorFinal / numParcelas;
    console.log('Total no cartão: R$ ${valorFinal.toFixed(2)} (${numParcelas}x de R$ ${parcelas.toFixed(2)})');
} else if (formaPagamento === "3") {
    valorFinal = valorCarro * 1.20;
    let numParcelas = parseInt(prompt("Em quantas vezes? (Até 48x"));
    parcelas = valorFinal / numParcelas;
    console.log('Total Financiado: R$ ${valorFinal.toFixed(2)} (${numParcelas}x de R$ $parcelas.toFixed(2)})');
    