let contador = 1
let numero;
if( contador===1){
while(contador<10)
{
    numero = parseInt(prompt("Ingrese un numero: "))
    console.log(`numero ingresado ${numero}`);

    contador++;
    console.log(`contador incrementado a:  ${contador}`);
    
}
} else{
    numero=parseInt(prompt("Ingresa un numero: "))

    while(numero>50)
    {
        console.log(`numero ingresado: ${numero}`);
        
        contador++;

        console.log(`Contador incrementado:  ${contador}`);

        numero = parseInt(prompt("Ingrese otro numero: "))
        
    }
}
console.log("Fin del programa");

