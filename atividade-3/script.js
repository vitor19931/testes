function calcularMedia() {
    let n1 = parseFloat(document.getElementById('nota1').value) || 0;
    let n2 = parseFloat(document.getElementById('nota2').value) || 0;
    let n3 = parseFloat(document.getElementById('nota3').value) || 0;

   
    let media = (n1 + n2 + n3) / 3;
    
  
    let resultadoDiv = document.getElementById('resultado');

    if (media >= 7) {
        resultadoDiv.innerHTML = `Média: ${media.toFixed(1)} <br> APROVADO! <br><span style="font-size: 0.8em; font-weight: normal;">A matematica nunca para! </span>`;
        resultadoDiv.className = "resultado aprovado";
    } else {
        resultadoDiv.innerHTML = `Média: ${media.toFixed(1)} <br> REPROVADO. <br><span style="font-size: 0.8em; font-weight: normal;">Falta notas para chegar ao resultado </span>`;
        resultadoDiv.className = "resultado reprovado";
    }
}