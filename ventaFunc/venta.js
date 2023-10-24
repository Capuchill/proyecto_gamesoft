/* mport { mostrarClientes } from "../clientSee/gestionClientes.js"; */
import { niveles } from "../clientSee/nivelesFide.js";
import { impuestoEspecial, iva, precioConImpuestoEspecial, precioFinal } from "../juegosfunc/gestionarPrecio.js";
import { listaClientes } from "../registrofunc/listaClientes.js";

let ClientListG = []
let listaJuegos = []
//verificar si hay algo en el localStorage
if (JSON.parse(localStorage.getItem("listaClientes"))){
    ClientListG = JSON.parse(localStorage.getItem("listaClientes"))
}
else{
    ClientListG = listaClientes
}

if (JSON.parse(localStorage.getItem("listaJuegos"))){
    listaJuegos = JSON.parse(localStorage.getItem("listaJuegos"))
}

function venderJuego(){

    let idCliente = document.getElementById("idClienteVender").value
    idCliente = parseInt(idCliente)
    let idJuego = document.getElementById("idJuegoVender").value 
    idJuego = parseInt(idJuego)

    let inputs = document.querySelectorAll("input")

    let vacio = false 

    let clienteVender = ""
    let juegoVender = ""

    inputs.forEach(input => {
        if (input.value.trim() == "") {
            vacio = true
        }
    });

    if (vacio) {
        alert("No deje campos vacios")
    } else {

        let existeCliente = false

        ClientListG.forEach(cliente => {
            if (cliente.id == idCliente) {
                existeCliente = true
                clienteVender = cliente
            }
        });

        if (existeCliente) {

            let existeJuego = false

            listaJuegos.forEach(juego => {
                if (juego.id == idJuego) {
                    existeJuego = true
                    juegoVender = juego
                }
            });

            if (existeJuego) {
                let puntosFideJuego = juegoVender.pFide
                let precioLicenciaV = juegoVender.valorLicencia
                let impuestoEspecialV = impuestoEspecial(precioLicenciaV)
                let precioConImpuestoEspecialV = precioConImpuestoEspecial(precioLicenciaV,impuestoEspecialV)
                let ivaV = iva(precioConImpuestoEspecialV)
                let precioFinalV = precioFinal(precioConImpuestoEspecialV,ivaV)
                let factura = document.getElementById("facturaCompra")
                factura.innerHTML = `<div><p>Juego vendido: ${juegoVender.nombre}</p>
                <p>Valor iva: ${ivaV}</p></div>
                <p>Valor impuesto especial: ${impuestoEspecialV}</p>
                <p>Precio final: ${precioFinalV}</p>
                <p>Puntos fidelización: ${juegoVender.pFide}</p>
                <p>Cliente: ${clienteVender.nombres}</p>`
                clienteVender.puntosFide = clienteVender.puntosFide + puntosFideJuego
                if(clienteVender.puntosFide>=niveles.comun && clienteVender.puntosFide<niveles.raro){
                    clienteVender.nivel = "Común"
                  }
                  if(clienteVender.puntosFide>=niveles.raro && clienteVender.puntosFide<niveles.lendario){
                    clienteVender.nivel = "Raro"
                  }
                  if(clienteVender.puntosFide>=niveles.lendario){
                    clienteVender.nivel = "Legendario"
                  }
                localStorage.setItem("listaClientes", JSON.stringify(ClientListG));
                /* mostrarClientes() */
                alert("hizo las cuentas")
            } else {
                alert("El juego no se encuentra registrado")
            }

        } else {
            alert("El cliente no se encuentra registrado")
        }
    }
}

window.venderJuego = venderJuego
