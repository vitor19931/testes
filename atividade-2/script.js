function calcular() {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);

    // Validação básica
    if (isNaN(n1) || isNaN(n2)) {
        alert("Tripulante, digite os números corretamente!");
        return;
    }

    // Cálculos
    const soma = n1 + n2;
    const media = soma / 2;
    const produto = n1 * n2;
    const maior = Math.max(n1, n2);
    const menor = Math.min(n1, n2);

    // Exibição dos resultados (uma linha para cada)
    const display = document.getElementById('resultados');
    display.innerHTML = `
        <div class="res-item">Média: ${media}</div>
        <div class="res-item">Soma: ${soma}</div>
        <div class="res-item">Produto: ${produto}</div>
        <div class="res-item">Maior: ${maior}</div>
        <div class="res-item">Menor: ${menor}</div>
    `;
}