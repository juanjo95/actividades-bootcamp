class Vehiculo{

    precio = 0;
    tipoGasolina = '';
    capacidad = 0;
    matricula = '';

    constructor(precio,gasolina,capacidad,matricula){
        this.precio = precio;
        this.tipoGasolina = gasolina;
        this.capacidad = capacidad;
        this.matricula = matricula;
    }

    setPrecio(precio){
        this.precio = precio;
    }

    getPrecio(){
        return this.precio;
    }

    getGasolina(){
        return this.tipoGasolina;
    }

    getCapacidad(){
        return this.capacidad;
    }

    getMatricula(){
        return this.matricula;
    }


}

class Avion extends Vehiculo{
    numeroAzadata = 0;

    constructor(precio,gasolina,capacidad,matricula, numeroAzadata){
        super(precio,gasolina,capacidad,matricula);
        this.numeroAzadata = numeroAzadata; 
    }

    setNumeroAzafatas(numero){
        this.numeroAzadata = numero;
    }

    getNumAzafatas(){
        return this.numeroAzadata;
    }
}

var vehiculos = [];
var resul = document.getElementById('resultado');
pintar();

function guardar(){
    var precio = document.getElementById('precio').value;
    var gasolina = document.getElementById('gasolina').value;
    var capacidad = document.getElementById('capacidad').value;
    var matricula = document.getElementById('matricula').value;
    var azafatas = document.getElementById('azafatas').value;

    if(precio === '' || gasolina === '' || capacidad === '' || matricula === '' || azafatas === ''){
        
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debe completar todos los campos del formulario!',
        })
    }else{
        var avion = new Avion(precio,gasolina,capacidad,matricula,azafatas);
        vehiculos.push(avion);
        localStorage.setItem('Aviones', JSON.stringify(vehiculos));

        Swal.fire(
            'Excelente!',
            'Registro con exito!',
            'success'
        );

        pintar();
    }

}

function pintar(){
    
    if(localStorage.length > 0){
        
        resul.innerHTML = "";
        let val = JSON.parse(localStorage.getItem('Aviones'))
        
        val.forEach(avion => {
            
            resul.innerHTML+=`
            <li>Precio: ${avion['precio']}</li>
            <li>Combustible: ${avion['tipoGasolina']}</li>
            <li>Capacidad: ${avion['capacidad']}</li>
            <li>Matricula: ${avion['matricula']}</li>
            <li># Azafatas: ${avion['numeroAzadata']}</li>
            <button class="btn btn-warning">Editar</button>
            <button class="btn btn-danger">Eliminar</button>
            <hr>`;
            });
            
        document.querySelector('#form').reset();
        document.querySelector('.datos').style.display = "block";
    }

}
