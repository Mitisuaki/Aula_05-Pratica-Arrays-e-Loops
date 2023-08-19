const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];

function solucao(notas) {
    //seu codigo aqui
    let maiorNota = notas[0];
    let menorNota = notas[0];
    let somaNotas = 0;

    for (let nota of notas) {

        somaNotas += nota

        if (nota > maiorNota) {

            maiorNota = nota;
        }

        if (nota < menorNota) {

            menorNota = nota;
        }
    }

    somaNotas -= (maiorNota + menorNota);
    somaNotas /= (notas.length - 2);

    console.log(somaNotas);
}

console.log(`${solucao(notas)}`);