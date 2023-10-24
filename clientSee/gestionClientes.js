
// gestionar clientes
import { listaClientes} from "../registrofunc/listaClientes.js";
import { tarjetaCliente } from "../registrofunc/tarjetaCliente.js";
/* import { mostrarAtributosCliente } from "./atributosCliente.js"; */
import { eliminarCliente } from "./eliminarCliente.js";

let ClientListG = []

//verificar si hay algo en el localStorage
if (JSON.parse(localStorage.getItem("listaClientes"))){
    ClientListG = JSON.parse(localStorage.getItem("listaClientes"))
}
else{
    ClientListG = listaClientes
}

let contenedorClientes = document.getElementById("data-clientes")


//lista los clientes
function mostrarClientes(){
    contenedorClientes.innerHTML = ""
    ClientListG.forEach(element => {
        let tarjeta = tarjetaCliente(element)
        contenedorClientes.insertAdjacentHTML("beforeend", tarjeta)
    });

}



contenedorClientes.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-danger")){
        // Obtiene el ID del cliente desde el botón
        const id = event.target.getAttribute("data-cliente-id");
        eliminarCliente(id,ClientListG)
        console.log(ClientListG);
        mostrarClientes()
    }
});



//input de busqueda
const busquedaCliente = document.getElementById("busquedaCliente");

//busqueda por nombre
busquedaCliente.addEventListener("keyup",() => {
    let clienteBuscado = busquedaCliente.value.toLowerCase();
    contenedorClientes.innerHTML = "";
    for (let cliente of ClientListG){
        let nombreCliente = cliente.nombres.toLowerCase();
        if (nombreCliente.indexOf(clienteBuscado) !== -1){
            let tarjeta = tarjetaCliente(cliente)
            contenedorClientes.insertAdjacentHTML("beforeend", tarjeta)
        }else if(clienteBuscado==' '){
            alert('madure')
        }
    }
    if (contenedorClientes.innerHTML.trim() === "") {
        contenedorClientes.textContent="Este cliente no se encuentra registrado"
    }
})

function modificarCliente(btn){
    alert("entroooo")
    
    let idclien = btn.getAttribute("data-id")
    
    let id = document.getElementById("dniModi"+idclien)
    let nombres = document.getElementById("nombresModi"+idclien)
    let apellidos = document.getElementById("apellidosModi"+idclien)
    let tlf =  document.getElementById("telefonoModi"+idclien)
    let correo = document.getElementById("correoModi"+idclien)
    let fechaNaci = document.getElementById("fechaNaciModi"+idclien)
    let nacionalidad = document.getElementById("nacionalidaModi"+idclien)

    let vacio = false

    if (id.value.trim()==="" ||
        nombres.value.trim()==="" ||
        apellidos.value.trim()==="" ||
        tlf.value.trim()==="" ||
        correo.value.trim()==="" ||
        fechaNaci.value.trim()==="" ||
        nacionalidad.value.trim()===""){
        vacio= true
    }

    if(vacio){
        alert ("No deje espacios vacios")
        mostrarClientes()
    }
    else{
        alert("muy bieeen")
        id = parseInt(id.value) 
        tlf = parseInt(tlf.value)
        ClientListG.forEach(cliente => {
            alert("entro al for")

            if(cliente.id == id){
                alert("despues del for")
                cliente.id = id
                cliente.nombres = nombres.value
                cliente.apellidos = apellidos.value
                cliente.telefono = tlf
                cliente.correo = correo.value
                cliente.fechaNacimiento = fechaNaci.value
                cliente.nacionalidad = nacionalidad.value
                if (Array.isArray(ClientListG) && ClientListG.every(item => typeof item === 'object')) {
                    alert("se envio al local")
                    localStorage.setItem("listaClientes", JSON.stringify(ClientListG));
                    mostrarClientes()
                    alert("modificado con exito")
                } else {
                console.error("ClientList no es una estructura de datos válida para almacenar en localStorage.");
                }
               
            }else{
                alert("nooooooooooooooo")
            }
        }); 
    }
}

/* export{mostrarClientes} */
window.modificarCliente = modificarCliente
window.eliminarCliente = eliminarCliente
window.addEventListener("load",mostrarClientes)
