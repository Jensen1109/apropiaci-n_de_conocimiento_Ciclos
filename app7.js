let suma = 0;

for (let n = 1; n <= 100; n++) {
if (n > 90 && n % 2 === 0) {
    console.log(`Número ${n} es mayor a 90 y par. Se interrumpe el ciclo.`);
    break;
}

suma += n;
}

console.log(`La suma total es: ${suma}`);
