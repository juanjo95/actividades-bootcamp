function enviar_info(){

    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let edad = document.getElementById("edad").value

    localStorage.setItem("nombre",nombre)
    localStorage.setItem("apellido",apellido)
    localStorage.setItem("edad",edad)

}