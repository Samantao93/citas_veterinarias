import { formulario, listaCitas } from "./selectores.js";
import { editarCita } from "./funciones.js";

export class alert {
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

export class citas {
    constructor(){
        this.citas = [];     
    }

    agregarCita(citaAnimal) {        
        this.citas = [...this.citas, citaAnimal];
        this.mostrarCita();                
    }

    editarCita(citaActualizada) {        
        this.citas =  this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita);
        this.mostrarCita();                
    }

    eliminarCita(citaEliminar) {             
        this.citas =  this.citas.filter(cita => cita.id !== citaEliminar.id);
        this.mostrarCita();                
    }

    mostrarCita() {
        // limpiar HTML
        while (listaCitas.firstChild) {
            listaCitas.removeChild(listaCitas.firstChild)
        }

        if(this.citas.length===0){
            listaCitas.innerHTML=`<p class="text-xl mt-5 mb-10 text-center">No Hay Pacientes</p>`;
            return
        }

        // Generar citas
        this.citas.forEach(cita => {
            // console.log(cita);
            
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
        
            // Botones de Editar y Eliminar
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('py-2', 'px-10', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2', 'btn-editar');
            btnEditar.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'
            const clon = {...cita};
            btnEditar.onclick = () => editarCita(clon);


            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('py-2', 'px-10', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2', 'btn-eliminar');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
            btnEliminar.onclick = () => this.eliminarCita(clon);

            const contenedorBotones = document.createElement('DIV');
            contenedorBotones.classList.add('flex','justify-between','mt-10');
            contenedorBotones.appendChild(btnEditar);
            contenedorBotones.appendChild(btnEliminar);


            // Agregar al HTML
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            divCita.appendChild(contenedorBotones);
            listaCitas.appendChild(divCita);
        }); 
    }
}

