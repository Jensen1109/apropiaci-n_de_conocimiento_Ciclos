let boletos = 15;

while (boletos > 0) {
let edad = parseInt(prompt("Ingrese la edad del comprador:"), 10);
let esParaAdultos = prompt("¿La película es para adultos? (sí/no)").toLowerCase();

if (edad < 18 && esParaAdultos === "sí") {
    alert("Venta rechazada: el comprador es menor de edad y la película es para adultos.");
} else if (edad >= 0 && (esParaAdultos === "sí" || esParaAdultos === "no")) {
    alert("Venta realizada.");
    boletos--;
    alert(`Boletos restantes: ${boletos}`);
} else {
    alert("Entrada inválida. Intente nuevamente.");
}
}

alert("Se han vendido todos los boletos. Fin del programa.");
