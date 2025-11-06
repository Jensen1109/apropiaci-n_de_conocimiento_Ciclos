let contador = 0;

while (contador < 5) {
let nombre = prompt("Ingrese el nombre de la persona:");
let edad = parseInt(prompt("Ingrese la edad de " + nombre + ":"), 10);

if (nombre === "" || edad < 0) {
    alert("Datos inválidos. Intente nuevamente.");
    continue;
}

if (edad >= 18) {
    alert("Ciudadano de mayor edad: " + nombre);
} else {
    alert(nombre + " no cumple con la edad.");
}

contador++;
}

alert("Fin del programa.");
