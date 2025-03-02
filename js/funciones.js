import { animal, editando } from './variables.js';
import { alert, citas } from './clases.js';
import { formulario,paciente, propietario, email, fecha, sintomas,actionButton } from './selectores.js';

const citaClass = new citas;

export function resetObj() {

    Object.assign(animal, {
        id: generarID(),
        paciente: '',
        propietario: '',
        email: '',
        fecha: '',
        sintomas: ''
    })

    editando.value = false;
}

export function readValue(e){
    e.preventDefault()
    animal[e.target.name] = e.target.value;  
}

export function validarEmail(texto){
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return regex.test(texto);        
}

export function addPatient(e) {
    e.preventDefault();
    // if(Object.values(animal).includes(''))
    // Vemos si algún valor del objecto está vacío sin espacios
    if(Object.values(animal).some(valor => valor.trim() === '')){
        new alert("Todos los campos son obligatorios","error");
        return
    }

    if (!validarEmail(animal.email)) {
        new alert("El correo electrónico no es válido", "error");
        return;
    }

    if(editando.value){
        new alert("Paciente editado correctamente","check");
        // mapear y modificar los datos de citaClass para ese ID 
        citaClass.editarCita({...animal});
    
    } else {
        new alert("Paciente añadido correctamente","check");
        citaClass.agregarCita({...animal}); // le pasamos una copia {...animal} no el objeto animal
    }

    formulario.reset();
    resetObj();
}

export function editarCita(cita) {
    Object.assign(animal,cita);

    paciente.value = cita.paciente;
    propietario.value = cita.propietario;
    email.value = cita.email;
    fecha.value = cita.fecha;
    sintomas.value = cita.sintomas;

    editando.value = true; 

    actionButton.value = 'Terminar de editar';
    actionButton.onclick = () => actionButton.value = 'Registrar paciente';
}

export function generarID() {
    const id =  Math.random().toString(15).substring(2) + Date.now();
    return(id);
}