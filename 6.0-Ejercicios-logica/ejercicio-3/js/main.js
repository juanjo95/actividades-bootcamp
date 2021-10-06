let genero = prompt("Ingrese el genero (hombre / mujer)?");
let edad = prompt("Ingrese la edad?");

if(edad < 0){
    console.error("Numero no valido")
}else if(edad < 10 && genero == "hombre"){
    console.log("Deber ir a reclamar un jugo.")
}else if(edad > 18 && genero == "mujer"){
    console.log("Debe ir a reclamar una cerveza y una porcion de pizza hawaiana")
}else if(edad > 18 && genero == "hombre"){
    console.log("Debe ir a reclamar una cerveza y una porcion de pizza tres carnes")
}else{
    console.log("Desafortunadamente, no recibe ningun premio")
}
