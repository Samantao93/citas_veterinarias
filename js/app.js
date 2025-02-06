// Variables to interact
const paciente=document.querySelector('#paciente');
const propietario=document.querySelector('#propietario');
const email=document.querySelector('#email');
const fecha=document.querySelector('#fecha');
const sintomas=document.querySelector('#sintomas');

// To show alerts
const formulario = document.querySelector('#formulario-cita');

// To add patient to the list
const actionButton = document.querySelector('input[type="submit"]');

// Place to show patients
const listaCitas = document.querySelector('#citas');

// Object to add information
animal = {
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''

}

// Listeners
paciente.addEventListener('change',readValue)
propietario.addEventListener('change',readValue)
email.addEventListener('change',readValue)
fecha.addEventListener('change',readValue)
sintomas.addEventListener('change',readValue)
actionButton.addEventListener('click',addPatient);

// Functions
function readValue(e){
    e.preventDefault()
    animal[e.target.name] = e.target.value;  
}

function validarEmail(texto){
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return regex.test(texto);        
}

function addPatient(e) {
    e.preventDefault();
    // if(Object.values(animal).includes(''))
    // Vemos si algún valor del objecto está vacío sin espacios
    if(Object.values(animal).some(valor => valor.trim() === '')){
        new alert("Todos los campos son obligatorios","error");
        return
    }
    
    new alert("Paciente añadido correctamente","check")

}

class alert {

    constructor(mensaje,tipo){
        this.mensaje=mensaje
        this.tipo=tipo

        this.mostrarAlerta()
    }

    mostrarAlerta() {
        const alerta = document.createElement('DIV');
        alerta.classList.add('text-center','w-full','p-3','text-white','my-5','alert','uppercase','font-bold','text-sm')

        // Comprobamos si ya existe la alerta
        const alertaPrevia = document.querySelector('.alert')
        alertaPrevia?.remove() // nueva opción: optional chaininig
        
        this.tipo === 'error' ? alerta.classList.add('bg-red-500') : alerta.classList.add('bg-green-500');
        alerta.textContent = this.mensaje;

        // Insertamos mensaje
        formulario.parentElement.insertBefore(alerta,formulario); // primera opción es lo que queremos integrar y la segunda dónde

        setTimeout(() => {
            alerta.remove()
        }, 3000)


    }
    
}