import { paciente, propietario, email, fecha, sintomas, actionButton } from "./selectores.js";
import { readValue,  addPatient} from "./funciones.js";

// Listeners
paciente.addEventListener('change',readValue)
propietario.addEventListener('change',readValue)
email.addEventListener('change',readValue)
fecha.addEventListener('change',readValue)
sintomas.addEventListener('change',readValue)
actionButton.addEventListener('click',addPatient);