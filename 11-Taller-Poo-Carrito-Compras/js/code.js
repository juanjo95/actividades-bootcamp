let productosTienda = [
    {
        id: 1,
        nombre: "Eliminador de Olores Lavanda Relajante",
        precio: 16650,
        imagen: "https://images.ctfassets.net/ozvjkvyngwhv/3o6UW7AwSBKjrfdPDFmsFK/fce08599d5a393d067cae494e40efb20/petys_eliminador-de-olores-lavanda_web.png"
    },
    {
        id: 2,
        nombre: "Suaves Pañitos Húmedos Lavanda Relajante",
        precio: 12500,
        imagen: "https://images.ctfassets.net/ozvjkvyngwhv/1CE9ZNakfpdiSzc8ftJY6u/b3113874329b93c02991af6e75ac009d/petys_panitos-humedos-lavanda_relajante.png"
    },
    {
        id: 3,
        nombre: "Tapetes Absorbentes con fragancia chocolate",
        precio: 18500,
        imagen: "https://images.ctfassets.net/ozvjkvyngwhv/6qbWIyizRQnzqkHXa5x0a4/aa25a16507224d15b70e9cac9afbbd16/8_Productos_P__ginaWeb.png"
    },
    {
        id: 4,
        nombre: "Pañitos Húmedos con Fragancia a chicle",
        precio: 13000,
        imagen: "https://images.ctfassets.net/ozvjkvyngwhv/7CUFtV4XDbdklmWHS9XwcN/9c9fdae857290496b4d6d8068d99112d/9_Productos_Pa__ginaWeb.png"
    },
    {
        id: 5,
        nombre: "Pañitos Húmedos Clorhexidina",
        precio: 12600,
        imagen: "https://images.ctfassets.net/ozvjkvyngwhv/hLPZTm6pocZX6SbSfTkGZ/c51294776ee99fb09e47eb30a1c9b65d/5_Productos_P__ginaWeb.png"
    },
    {
        id: 6,
        nombre: "Arena para Gatos Fragancia",
        precio: 54000,
        imagen: "https://images.ctfassets.net/ozvjkvyngwhv/52qgT5bY3pzqORBijhjCPU/d53de3ca37ffd3dfa24330d6cd9a76d7/1_Productos_P__ginaWeb.png"
    },
    {
        id: 7,
        nombre: "Shampoo Limpieza y Suavidad",
        precio: 14500,
        imagen: "https://images.ctfassets.net/ozvjkvyngwhv/GW5VtleokYT6biw18Oa5I/d53cd6c7a0bf27fba500bc6ec5d667b8/4_Productos_P__ginaWeb.png"
    },
    {
        id: 8,
        nombre: "Shampoo Repelente y Suave",
        precio: 19500,
        imagen: "https://images.ctfassets.net/ozvjkvyngwhv/53tJnzEhy1g8R4Muv4PA1s/6fde73c751326e8e0f07bca8a0c9770f/7_Productos_P__ginaWeb.png"
    },
    {
        id: 9,
        nombre: "Halloween",
        precio: 105000,
        imagen: "https://s3.amazonaws.com/cratejoy_vendor_images/ec167370072249318fb907879532263e.jpeg"
    },
    {
        id: 10,
        nombre: "Cumpleaños",
        precio: 84000,
        imagen: "https://s3.amazonaws.com/cratejoy_vendor_images/54fd5e5a981a4383810b228206cc6e17.jpeg"
    },
    {
        id: 11,
        nombre: "Animal Park",
        precio: 74000,
        imagen: "https://s3.amazonaws.com/cratejoy_vendor_images/2b2811025c334dd1a15b90159edee78c.jpeg"
    },
    {
        id: 12,
        nombre: "Aventura",
        precio: 57000,
        imagen: "https://s3.amazonaws.com/cratejoy_vendor_images/b55dc1093f5c4e1b83f8b3fc604dad96.jpeg"
    },



];

function formato_decimal(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

/* Si existe este elemento en alguna pagina html */
if(document.getElementById("listado-productos")){

    let contenedor_productos = document.getElementById("listado-productos");

    for (const producto of productosTienda) {
        contenedor_productos.innerHTML += `
        <div class="col-sm-6 col-md-4 col-lg-3 mb-5 item-card d-flex-column justify-content-center align-items-center">
            <img src="${producto['imagen']}" alt="imagen-producto" class="w-100">
            <span>${producto['nombre']}</span><br>
            <small><strong>$${formato_decimal(producto['precio'])}</strong></small><br>
            <button type="button "class="btn boton" onclick="agregar_producto(${producto['id']})">Añadir al carro <i class="fas fa-cart-plus"></i></button>
        </div>
        `
    }
}

class CarroCompras {

    total_carrito = 0;

    constructor() {
        this.productos = [];

        if(localStorage.getItem('carrito') != null){
            this.productos = JSON.parse(localStorage.getItem('carrito'));
        }
    }

    nuevo_producto(producto_nuevo){
        this.productos.push(producto_nuevo);
        this.nuevo_producto_localStorage();
        this.total_cuenta_carrito();
    }

    nuevo_producto_localStorage(){
        localStorage.setItem('carrito',JSON.stringify(this.get_productos()));
    }

    total_cuenta_carrito(){

        let carrito_localStorage = JSON.parse(localStorage.getItem('carrito'));
    
        let total_cuenta = 0

        if(carrito_localStorage != null){
            carrito_localStorage.forEach(function(producto) {
                total_cuenta = parseInt(total_cuenta) + parseInt(producto['precio'])
            });
            this.total_carrito = total_cuenta;
        }else{
            this.total_carrito = 0;
        }
        
    }

    eliminar_producto(id_producto){
        let carrito_localStorage = JSON.parse(localStorage.getItem('carrito'));
        this.productos = carrito_localStorage.filter(producto => producto['id'] != id_producto);

        if(this.get_productos().length == 0){
            localStorage.clear();        
        }else{
            this.nuevo_producto_localStorage();
        }
        this.total_cuenta_carrito();
    }

    realizar_pago(){
        localStorage.clear();
        this.total_cuenta_carrito();
    }

    get_productos(){
        return this.productos;
    }

    get_total_carrito(){
        return this.total_carrito;
    }

}

let carrito = new CarroCompras();
var total = document.querySelector('.total');
pintando_total_carrito();
checkout();

function pintando_total_carrito(){
    let carrito_localStorage = JSON.parse(localStorage.getItem('carrito'));

    if(carrito_localStorage != null){
        let total_cuenta = 0
        carrito_localStorage.forEach(function(producto) {
            total_cuenta = parseInt(total_cuenta) + parseInt(producto['precio'])
        });
        total.innerHTML = `${formato_decimal(total_cuenta)}`;
    }
}

function agregar_producto(id_producto) {
    
    for (const producto of productosTienda){
        if(producto['id'] == id_producto){
            carrito.nuevo_producto(producto);
            pintando_total_carrito();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Producto agregado con éxito',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
}

function checkout(){

    var table_body = document.getElementById('table-body-check');
    var table_footer = document.getElementById('total-cuenta');
    var btn_pagar = document.getElementById('btn-pagar');

    var secc_tabla = document.querySelector('.seccion-tabla');

    let carrito_localStorage = JSON.parse(localStorage.getItem('carrito'));

    if(carrito_localStorage != null && table_body && table_footer){

        table_body.innerHTML = '';
        table_footer.innerHTML = '';

        carrito.total_cuenta_carrito();
        let total_cuenta = carrito.get_total_carrito();

        for (const producto of carrito_localStorage) {

            table_body.innerHTML += `
            <tr>
                <th scope="row">${producto['id']}</th>
                <td><img src="${producto['imagen']}" alt="imagen-producto" width="50"></td>
                <td>${producto['nombre']}</td>
                <td>$${formato_decimal(producto['precio'])}</td>
                <td><button class="btn btn-danger" onclick="eliminar_producto(${producto['id']})"><i class="fas fa-trash-alt"></i></button></td>
            </tr>
            `;
        }

        table_footer.innerHTML = `
            <tr>
                <td colspan="3" class="text-end">Total a pagar</td>
                <td><strong>$${formato_decimal(total_cuenta)}</strong></td>
            </tr>
        `;

        btn_pagar.innerHTML = `<button type="button" class="btn btn-success" onclick="pago_checkout()">Procesar pago</button>`;
    
    }else{
        
        if(document.getElementById('seccion-checkout')){
            document.getElementById('seccion-checkout').style.display = "none";
    
            secc_tabla.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 text-center mt-5">
                        <h2>No tienes productos en tu carrito de compras</h2>
                        <button type="button" class="btn btn-success"><a href="productos.html" class="text-decoration-none text-white">Ir a productos</a></button>
                    </div>
                </div>
            </div>
            `
        }
    }

}

function eliminar_producto(id_producto){

    Swal.fire({
        title: 'Estas seguro?',
        text: "No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, bórralo!'
    }).then((result) => {
        if (result.isConfirmed) {

            carrito.eliminar_producto(id_producto);
            checkout();
            total.innerHTML = `${formato_decimal(carrito.get_total_carrito())}`;

            Swal.fire(
                'Eliminado!',
                'Su archivo ha sido eliminado.',
                'success'
            )
        }
    });
}

function pago_checkout(){

    carrito.realizar_pago();
    checkout();
    total.innerHTML = `${formato_decimal(carrito.get_total_carrito())}`;

    Swal.fire({
        title: 'Felicidades, muy pronto recibiras tu pedido para tu mascota',
        width: 600,
        padding: '3em',
        background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
        backdrop: `
            rgba(0,0,123,0.4)
            url("https://sweetalert2.github.io/images/nyan-cat.gif")
            left top
            no-repeat
        `
    });
}