const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];

function solucao(notas) {
    //seu codigo aqui
    const maiorNota = Math.max(...notas);
    const menorNota = Math.min(...notas);
    let somaNotas = 0;

    for (nota of notas) {

        somaNotas += nota
    }

    somaNotas -= (maiorNota + menorNota);
    somaNotas /= (notas.length - 2);

    console.log(somaNotas);
}