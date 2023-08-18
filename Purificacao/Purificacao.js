const stringCorrompida = "*Canis %lupus )familiaris";

function solucao(stringCorrompida) {

    const corruptedSymbols = ["!", "@", "#", "$", "%", "&", "*", "(", ")"];
    let removedSymbols = [];
    let purifiedString = "";

    for (character of stringCorrompida) {

        for (indice in corruptedSymbols) {

            if (corruptedSymbols[indice] === character) {

                removedSymbols.push(character);

                break
            }
        }
        if (character !== corruptedSymbols[indice]) {

            purifiedString += character;
        }


    }

    return (purifiedString);

}

console.log(solucao(stringCorrompida));
