import { tarjetaCliente } from "../registrofunc/tarjetaCliente";

//inseta la tarjeta de cliente en un contenedor
function insertarTarjeta(elem,contenedor){
    
    let tarjeta = tarjetaCliente(elem)
    contenedor.insertAdjacentHTML("beforeend", tarjeta)


}

export {insertarTarjeta}