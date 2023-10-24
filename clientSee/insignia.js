import { niveles } from "./nivelesFide.js"

function insigniaCliente(cliente){
    let insignia = ''
    if(cliente.puntosFide<niveles.comun){
        insignia = "../assets/aire-fresco.png"
    }
    if(cliente.puntosFide>=niveles.comun && cliente.puntosFide<niveles.raro){
        insignia ="../assets/arco-y-flecha.png"
    }
    if(cliente.puntosFide>=niveles.raro && cliente.puntosFide<niveles.lendario){
        insignia = "../assets/flor-de-cerezo.png"
    }
    if(cliente.puntosFide>=niveles.lendario){
        insignia = "../assets/fuego.png"
    }
    
    return insignia 
}

export {insigniaCliente}