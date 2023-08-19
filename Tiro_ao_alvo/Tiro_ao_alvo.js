const disparos = [0, 50, 90, 80, 100, 80, 40];

function solucao(disparos) {

    let disparosValidos = [];

    for (let disparo of disparos) {

        if (disparo > 70) {

            disparosValidos.push(disparo);
        }
    }

    if (disparosValidos[2] !== undefined) {

        console.log(disparosValidos.length);
    }

    else {

        console.log("ELIMINADO");
    }

}