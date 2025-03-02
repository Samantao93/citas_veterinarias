import { generarID } from "./funciones.js";

export let editando = {
    value: false
    }

export const animal = {
    id: generarID(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}