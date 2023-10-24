import { niveles } from "./nivelesFide.js"

function avatarCliente(cliente){
    let avatar = ''
    if(cliente.puntosFide<niveles.comun){
      avatar = "../assets/fantasma (1).png"
    }
    if(cliente.puntosFide>=niveles.comun && cliente.puntosFide<niveles.raro){
      avatar = "../assets/elfo (1).png"
    }
    if(cliente.puntosFide>=niveles.raro && cliente.puntosFide<niveles.lendario){
      avatar = "../assets/kitsune.png"
    }
    if(cliente.puntosFide>=niveles.lendario){
        avatar = "../assets/dragon.png"
    }
    return avatar 
}

export {avatarCliente}

