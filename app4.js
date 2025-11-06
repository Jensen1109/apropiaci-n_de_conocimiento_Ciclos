let monto = 20000

while(monto<=20000)
{
    retiro = parseInt(prompt(`saldo actual ${monto}\n cuanto desea retirar`))

    if( retiro <= monto)
    {
        monto -= retiro
        alert(`Retiro exitoso. Nuevo saldo ${monto}`)
    }
    else{
        alert("Fondos insuficientes para ese retiro . Intenta con un monto menor")
    }
}
alert("Saldo insuficiente para continuar fin del programa")