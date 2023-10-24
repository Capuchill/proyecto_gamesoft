import { Cliente } from "./cliente.js"
import { listaClientes } from "./listaClientes.js"

let ClientList = []

//verifico si existe la llave en el localStorage y si existe
// pido los datos 

if (JSON.parse(localStorage.getItem("listaClientes"))){
    ClientList = JSON.parse(localStorage.getItem("listaClientes"))
}
else{
    ClientList = listaClientes
}


function agregarCliente(){
    //tomo los datos del formulario
    
    let id =  document.getElementById("dni").value
    id = parseInt(id)
    let nombres = document.getElementById("nombres").value
    let apellidos = document.getElementById("apellidos").value
    let tlf =  document.getElementById("telefono").value
    tlf = parseInt(tlf)
    let correo = document.getElementById("correo").value
    let fechaNaci = document.getElementById("fechaNaci").value
    let nacionalidad = document.getElementById("nacionalida").value
    let container = document.getElementById("registroCliente")
    let inputs = container.querySelectorAll('input')
    
    //valido que llenen los campos

    let bandera = false;

    inputs.forEach(input => {
        if(input.value.trim() == ""){
            bandera = true;
            return
        }
    });

    if(bandera){
        alert("No deje espacios vacios")
    }
    else{

        //valido si el usuario ya está registrado
        let existe = false
        ClientList.forEach(client => {
            if(client.id == id){
                existe = true
            }
        });

        if (existe) {
            alert("Este cliente ya se encuentra registrado")
        } else {
           //creo los clientes a partir de la clase
            let newClient = new Cliente(id,nombres,apellidos,tlf,correo,fechaNaci,nacionalidad)
            ClientList.push(newClient)

            //valido la lista que podria venir del localStorage
            if (Array.isArray(ClientList) && ClientList.every(item => typeof item === 'object')) {
                localStorage.setItem("listaClientes", JSON.stringify(ClientList));
            } else {
            console.error("ClientList no es una estructura de datos válida para almacenar en localStorage.");
            }
            alert("Agregado") 
        }
    }
}

window.agregarCliente = agregarCliente