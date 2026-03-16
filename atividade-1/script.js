function gerarTabuada() {
    // A única alteração foi o "N" maiúsculo em "Numeroinput" para bater com o HTML
    const numeroInput = document.getElementById("Numeroinput");
    let numero = parseInt(numeroInput.value);

    const resultadoDiv = document.getElementById("ResultadoTabuada");
    resultadoDiv.innerHTML = "";

    if (isNaN(numero)) {
        resultadoDiv.innerHTML = "<p>Por favor, digite um número válido.</p>";
        return;
    }

    resultadoDiv.innerHTML += `<h2>Tabuada do número ${numero}</h2>`;

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`;
    }
}

const botaoGerar = document.getElementById("btnGerar");
botaoGerar.addEventListener("click", gerarTabuada);