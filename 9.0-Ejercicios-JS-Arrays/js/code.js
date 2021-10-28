/* Ejercicio 1 */
var componente_clientes = document.querySelector("#listado-clientes")
var clientes = ["Mariano","Paulina","Lazaro","Jose","Luis","Belinda","Helena","Vanessa","Luciano","Amaranta"]
componente_clientes.innerHTML = `${clientes.join(' - ')}`
/* Fin Ejercicio 1 */

/* Ejercicio 2 */
function felicitar(){

    Swal.fire({
        title: `Felicitaciones a nuestros mejores clientes ${clientes[4]} y ${clientes[7]} `,
        width: 600,
        padding: '3em',
        background: '#fff url(img/fondo-gris_alerta.png)',
        backdrop: `
        rgba(0,0,123,0.4)
        url("img/gato.gif")
        left top
        no-repeat
        `
    })

}
/* Fin Ejercicio 2 */

/* Ejercicio 3 */
var componente_clientes_actualizado = document.querySelector('#listado-clientes-actualizado')
clientes.push("Manuela")
clientes.push("Alex")
clientes.push("Norma")
clientes.push("Robert")
componente_clientes_actualizado.innerHTML = `${clientes.join(' - ')}`
/* Fin Ejercicio 3 */

/* Ejercicio 4 */
/* Fin Ejercicio 4 */

/* Ejercicio 5 */
var componente_cantidad_clientes = document.querySelector('#cantidad-clientes')
componente_cantidad_clientes.innerHTML = `La cantidad de clientes registrados (buenos) son ${clientes.length}`
/* Fin Ejercicio 5 */

/* Ejercicio 6 */
var componente_lista_clientes = document.querySelector('#lista-clientes')
clientes[8] = "Paco"
componente_lista_clientes.innerHTML = `${clientes.join(' - ')}`
/* Fin Ejercicio 6 */

/* Ejercicio 7 */
var componente_lista_vetados = document.querySelector('#lista-vetados')
var clientes_vetados = ["Max","Clara","Rosa"]
for (let index = 0; index < clientes_vetados.length; index++) {
    componente_lista_vetados.innerHTML += `<li>${clientes_vetados[index]}</li>`
}
/* Fin Ejercicio 7 */

/* Ejercicio 8 */
var componente_lista_total = document.querySelector('#lista-total')
var lista_total_clientes = clientes.concat(clientes_vetados).sort().reverse()
for (let index = 0; index < lista_total_clientes.length; index++) {
    componente_lista_total.innerHTML += `<li>${lista_total_clientes[index]}</li>`
}
/* Fin Ejercicio 8 */