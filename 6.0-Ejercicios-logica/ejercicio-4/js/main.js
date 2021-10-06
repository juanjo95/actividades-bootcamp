let menu="---------- MENU ----------\n"
    menu+="1. Hamburguesa ----> $15.000\n"
    menu+="2. Perro ----------> $9.000\n"
    menu+="3. Pizza ----------> $8.000\n"
    menu+="4. Gaseosa --------> $3.500\n"
    menu+="5. Pagar cuenta\n"
    menu+="6. Salir\n"
    menu+="Ingrese una opcion: \n"

let cod=0

let hamburguesa=15000
let perro=9000
let pizza=8000
let gaseosa=3500

var total=0

while (cod != 6) {

    cod = parseInt(prompt(menu))

    switch(cod){
        case 1:
            total+=hamburguesa
            console.log("Disfrute la hamburguesa")
            break

        case 2:
            total+=perro
            console.log("Disfrute el perro")
            break

        case 3:
            total+=pizza
            console.log("Disfrute la pizza")
            break

        case 4:
            total+=gaseosa
            console.log("Disfrute la gaseosa")
            break

        case 5:
            console.log("El total a pagar es: $"+total)
            cod = 6
            break

        case 6:
            console.warn("Chao, se va a salir")
            break
        default:
            console.error("El codigo no existe")
    }   
} 

