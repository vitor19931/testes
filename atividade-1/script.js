function gerarTabuada() {
    // ATENÇÃO: Os IDs aqui precisam estar exatamente iguais aos do seu HTML
    const numeroInput = document.getElementById("Numeroinput");
    // Correção: É parseInt (para transformar em número inteiro) e .value (com 'v' minúsculo)
    let numero = parseInt(numeroInput.value);

    const resultadoDiv = document.getElementById("ResultadoTabuada");
    resultadoDiv.innerHTML = "";

    // Correção: isNaN já é suficiente para verificar se não é um número válido
    if (isNaN(numero)) {
        // Correção: Fechar a tag <p> corretamente com </p>
        resultadoDiv.innerHTML = "<p>Por favor, digite um número válido.</p>";
        return;
    }

    // Correção: Uso de crases (`) em vez de aspas para usar variáveis com ${}
    // Correção: Fechamento da tag h2 corrigido para </h2>
    resultadoDiv.innerHTML += `<h2> Tabuada do número ${numero} </h2>`;

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        // Correção: Novamente, usar crases (`) para que o ${} funcione!
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`;
    }
}

const botaoGerar = document.getElementById("btnGerar");
botapGerar.addEvent