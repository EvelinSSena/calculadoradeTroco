function calcularTroco() {
    const valorProduto = parseFloat(document.getElementById('valorProduto').value);
    const valorPago = parseFloat(document.getElementById('valorPago').value);

    if (isNaN(valorProduto) || isNaN(valorPago)) {
        document.getElementById('troco').textContent = 'Insira valores válidos';
        return;
    }

    if (valorPago >= valorProduto) {
        const troco = (valorPago - valorProduto).toFixed(2);
        document.getElementById('troco').textContent = troco;
    } else {
        document.getElementById('troco').textContent = 'Valor pago insuficiente';
    }
}
