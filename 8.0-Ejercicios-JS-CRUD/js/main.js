listado_productos(1, true)

function listado_productos(contador_actual = 1, actualiza_tabla = false) {

    let body_tabla = document.getElementById('lista-productos')
    let titulo_form = document.getElementById('titulo-formulario')
    titulo_form.innerHTML = `Agregar producto`

    if (localStorage.length <= 1) {
        document.getElementById('listado-contenedor').style.display = "none";
        localStorage.removeItem('contador')
    } else {
        document.getElementById("listado-contenedor").style.display = "block";
    }

    if (actualiza_tabla) {
        let contador_futuro = localStorage.getItem('contador')
        for (let x = 1; x < contador_futuro; x++) {
            if (localStorage.getItem('nom_prod_' + x) != null) {

                body_tabla.innerHTML += `
                <tr>
                    <td>${localStorage.getItem('nom_prod_' + x)}</td>
                    <td>${localStorage.getItem('prec_prod_' + x)}</td>
                    <td>${localStorage.getItem('dist_prod_' + x)}</td>
                    <td>
                        <button type="button" class="btn btn-warning "><i class="fas fa-pen mx-2" onclick="editar_elemento(${x})"></i></button>
                        <button type="button" class="btn btn-danger"><i class="fas fa-trash mx-2" onclick="borrar_elemento(${x})"></i></button>
                    </td>
                </tr>
                `
            }
        }
    } else {
        body_tabla.innerHTML += `
            <tr>
                <td>${localStorage.getItem('nom_prod_' + contador_actual)}</td>
                <td>${localStorage.getItem('prec_prod_' + contador_actual)}</td>
                <td>${localStorage.getItem('dist_prod_' + contador_actual)}</td>
                <td>
                    <button type="button" class="btn btn-warning"><i class="fas fa-pen mx-2" onclick="editar_elemento(${contador_actual})"></i></button>
                    <button type="button" class="btn btn-danger"><i class="fas fa-trash mx-2" onclick="borrar_elemento(${contador_actual})"></i></button>
                </td>
            </tr>
        `

    }
}

function agregar_producto() {

    let contador_data = 1

    let nom_producto = document.getElementById('nombre_producto').value
    let prec_producto = document.getElementById('precio_producto').value
    let dist_producto = document.getElementById('distribuidor_producto').value

    if (nom_producto == "" || prec_producto == "" || dist_producto == "") {

        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Todos los campos deben estar diligenciados!'
        })

        return
    }

    if (localStorage.getItem("contador") == null) {
        localStorage.setItem('contador', contador_data)
    } else {
        contador_data = localStorage.getItem("contador")
    }

    localStorage.setItem("nom_prod_" + contador_data, nom_producto)
    localStorage.setItem("prec_prod_" + contador_data, prec_producto)
    localStorage.setItem("dist_prod_" + contador_data, dist_producto)

    contador_data = parseInt(contador_data) + 1
    localStorage.setItem("contador", contador_data)

    let contador_actual = parseInt(contador_data) - 1
    listado_productos(contador_actual)

    Swal.fire(
        'Producto Agregado!',
        'Se ha agregado exitosamente el nuevo producto!',
        'success'
    )

    document.getElementById('formulario-principal').reset()
}

function editar_elemento(indice_dato) {

    let boton = document.getElementById("boton_formulario")
    boton.setAttribute('onclick', `editar_elemento_accion(${indice_dato})`)
    boton.innerHTML = `Actualizar producto`

    let titulo_form = document.getElementById('titulo-formulario')
    titulo_form.innerHTML = `Actualizar producto`

    let nom_producto = document.getElementById('nombre_producto')
    let prec_producto = document.getElementById('precio_producto')
    let dist_producto = document.getElementById('distribuidor_producto')

    nom_producto.value = localStorage.getItem("nom_prod_" + indice_dato)
    prec_producto.value = localStorage.getItem("prec_prod_" + indice_dato)
    dist_producto.value = localStorage.getItem("dist_prod_" + indice_dato)
}

function editar_elemento_accion(indice_dato) {
    let nom_producto_actualizacion = document.getElementById('nombre_producto').value
    let prec_producto_actualizacion = document.getElementById('precio_producto').value
    let dist_producto_actualizacion = document.getElementById('distribuidor_producto').value

    if (nom_producto_actualizacion == "" || prec_producto_actualizacion == "" || dist_producto_actualizacion == "") {

        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Todos los campos deben estar diligenciados!'
        })

        return

    }

    localStorage.setItem("nom_prod_" + indice_dato, nom_producto_actualizacion)
    localStorage.setItem("prec_prod_" + indice_dato, prec_producto_actualizacion)
    localStorage.setItem("dist_prod_" + indice_dato, dist_producto_actualizacion)

    let body_tabla = document.getElementById('lista-productos')
    body_tabla.innerHTML = ''

    let titulo_form = document.getElementById('titulo-formulario')
    titulo_form.innerHTML = `Actualizar producto`

    listado_productos(1, true)

    let boton = document.getElementById("boton_formulario")
    boton.setAttribute('onclick', `agregar_producto()`)
    boton.innerHTML = `Agregar producto `

    Swal.fire(
        'Producto Actualizado!',
        'Se ha actualizado exitosamente el producto!',
        'success'
    )

    document.getElementById("formulario-principal").reset()
}

function borrar_elemento(indice) {
    Swal.fire({
        title: 'Esta seguro que quiere eliminar el producto?',
        text: "No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#198754',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, bórralo!'
    }).then((result) => {
        if (result.isConfirmed) {

            localStorage.removeItem("nom_prod_" + indice)
            localStorage.removeItem("prec_prod_" + indice)
            localStorage.removeItem("dist_prod_" + indice)

            let body_tabla = document.getElementById('lista-productos')
            body_tabla.innerHTML = ''
            listado_productos(1, true)

            Swal.fire(
                'Eliminado!',
                'Su producto ha sido eliminado.',
                'success'
            )
        }
    })
}