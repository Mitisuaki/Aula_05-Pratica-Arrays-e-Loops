const sequencia = ">>><>";


function solucao(sequencia) {

    let indice = 0;

    for (let click of sequencia) {

        if (indice === 0 && click === "<") {

            indice = 6;

        }

        else if (indice === 6 && click === ">") {

            indice = 0;
        }

        else if (click === ">") {

            indice++;
        }

        else if (click === "<") {

            indice--
        }

    }

    console.log(indice)
}
