let numero = prompt("Ingrese el numero");
let suma = 0;

if(numero > 0){
    for(i = 1;i<=10;i++){
        suma += numero * i
        console.log(numero + " x " + i + " = " + numero * i +" suma al momento: "+suma);
    }
}else{
    console.error("Numero no valido")
}

