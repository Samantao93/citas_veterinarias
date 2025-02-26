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

const animal = {
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

// Clases
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

class citas {
    constructor(){
        this.cita = [];  
        this.mostrarCita();      
    }

    agregarCita(citaAnimal) {        
      /*   console.log(citaAnimal); */
     /*    console.log(this.cita); */
        this.cita = [...this.cita, citaAnimal];
    /*     console.log('----------------------'); */

        this.mostrarCita();
                
    }

    mostrarCita() {
        // limpiar HTML
        while (listaCitas.firstChild) {
            listaCitas.removeChild(listaCitas.firstChild)
        }

        // Generar citas
        this.cita.forEach(cita => {
            console.log(cita);
            
            const divCita = document.createElement('div');
            divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10' ,'rounded-xl', 'p-3');
        
            const paciente = document.createElement('p');
            paciente.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            paciente.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${cita.paciente}`;
        
            const propietario = document.createElement('p');
            propietario.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            propietario.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${cita.propietario}`;
        
            const email = document.createElement('p');
            email.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            email.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${cita.email}`;
        
            const fecha = document.createElement('p');
            fecha.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            fecha.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${cita.fecha}`;
        
            const sintomas = document.createElement('p');
            sintomas.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            sintomas.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${cita.sintomas}`;
        
            // Agregar al HTML
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            listaCitas.appendChild(divCita);
        }); 
    }
}


// Funciones
function resetObj() {
    // Object to add information
    /* animal.paciente= '';
    animal.propietario= '';
    animal.email= '';
    animal.fecha= '';
    animal.sintomas= '';  lo mismo que lo de después*/

    Object.assign(animal, {
        paciente: '',
        propietario: '',
        email: '',
        fecha: '',
        sintomas: ''
    })
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

const citaClass = new citas;

function addPatient(e) {
    e.preventDefault();
    // if(Object.values(animal).includes(''))
    // Vemos si algún valor del objecto está vacío sin espacios
    if(Object.values(animal).some(valor => valor.trim() === '')){
        new alert("Todos los campos son obligatorios","error");
        return
    }
    
    new alert("Paciente añadido correctamente","check")

    citaClass.agregarCita(animal)
    formulario.reset();  
    resetObj();
}
