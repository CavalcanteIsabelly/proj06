let valorCompra = parseFloat(prompt("Valor da compra:"));
let regiao = prompt("Região: 1-Sul, 2-Sudeste, 3-Outras");
let frete = 0;

of (valorCompra = 250) {
    if (regiao ==="1") frete = 20;
else if (regiao === "2") frete = 10;
else frete = 30;
}

let totalGeral = valorCompra + frete;
console.log('Compra: R$ ${valorCompra.toFixed(2)} | Frete: R$ ${frete.toFixed(2)} | Tolatl: R$ ${totalGeral.toFixed(2)}');