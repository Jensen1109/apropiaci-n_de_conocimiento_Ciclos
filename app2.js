for(let estudiante  = 1; estudiante <=5; estudiante++)
{
    console.log("El estudiante tiene carnet estudiantil");
    let ingresa = prompt("Ingresar si o no: ");

    let bandera = (ingresa == "si") ? "puede ingresar" : "No puede ingresar";
    alert(bandera)
    
}