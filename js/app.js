// Variables to interact
const patient=document.querySelector('#paciente');
const propietario=document.querySelector('#propietario');
const email=document.querySelector('#email');
const date=document.querySelector('#fecha');
const symptoms=document.querySelector('#sintomas');

// region to show patients
const listaCitas = document.querySelector('#citas');

// array to add information
patients = []

// create listeners
eventListeners()
function eventListeners () {
    actionButton = document.querySelector('input[type="submit"]')
    actionButton.addEventListener('click',readValue);
}

// Create class for combine items (Eliminar paciente, validar email, )
class administrative {
    constructor(parameters) {
        
    }
}

// Create class to show items (crear paciente y mostrarlo, alerta de validación de campo, )
class UI {
    addPatient() {

    }
}

// Functions
function readValue(e){
    e.preventDefault()
    
    
    
    
}

function validarEmail(texto){
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return regex.test(texto);        
}