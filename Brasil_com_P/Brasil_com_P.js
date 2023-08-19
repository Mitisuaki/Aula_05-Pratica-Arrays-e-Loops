const primeiraLetra = "a", segundaLetra = "v";
const palavras = [
    "aveia",
    "manha",
    "ave"
];


function solucao() {

    let palavrasContem = [];

    for (let palavra of palavras) {

        if (palavra[0] === primeiraLetra) {

            if (palavra[1] === segundaLetra) {

                palavrasContem.push(palavra);
            }

        }
    }

    if (palavrasContem[0] !== undefined) {

        for (let indice in palavrasContem) {

            console.log(`${palavrasContem[indice]}`)
        }

    }

    else {

        console.log("NENHUMA")
    }
}
