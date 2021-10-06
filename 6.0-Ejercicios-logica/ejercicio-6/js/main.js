let promedio = parseFloat(prompt("Ingrese el promedio academico"))

let matricula = 1000000
const DESCUENTO_5 = 0.05
const DESCUENTO_50 = 0.5

if(promedio < 0){
    console.error("Ingrese un promedio valido")
}else if(promedio < 3){
    console.log("No le aplica descuento y debe pagar $"+matricula)
}else if(promedio >= 3 && promedio <=4){
    let descuento = matricula - (matricula * DESCUENTO_5)
    console.log("Se le aplicó un descuento del 5% y debe pagar $"+descuento)
}else{
    let descuento = matricula - (matricula * DESCUENTO_50)
    console.log("Se le aplicó un descuento del 50% y debe pagar $"+descuento)
}



