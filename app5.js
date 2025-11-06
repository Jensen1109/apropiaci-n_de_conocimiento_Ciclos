for (let corredor = 1; corredor <= 8; corredor++) {
let vueltas = 0;
let cansado = false;

alert(`Corredor ${corredor} inicia su competencia.`);

while (vueltas < 4 && !cansado) {
    let respuesta = prompt(`¿El corredor ${corredor} se cansó en la vuelta ${vueltas + 1}? (sí/no)`).toLowerCase();

    if (respuesta === "sí") {
    alert(`El corredor ${corredor} se salió por cansancio.`);
    cansado = true;
    } else if (respuesta === "no") {
    vueltas++;
    alert(`El corredor ${corredor} completó la vuelta ${vueltas}.`);
    } else {
    alert("Respuesta inválida. Escribe 'sí' o 'no'.");
    }
}

alert(`Corredor ${corredor} terminó su participación.\n`);
}

alert("Fin de la competencia.");
