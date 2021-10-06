let numero_ej1 = prompt("Hasta qué número desea sumar?");
let suma = 0;
let operacion = 0;

for (let x=1; x<= numero_ej1; x++){
    
    operacion = suma + x;
    console.log(`La operación de ${x} + ${suma} es: ${operacion}`)
    suma = suma + x;
    
}