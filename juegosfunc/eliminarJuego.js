function eliminarJuego(idjuego,lista){
    if(confirm("Esta seguro de eliminar?")){
        for (let i = 0; i < lista.length; i++) {
            const element = lista[i];
            if (element.id == idjuego){
                lista.splice(i,1)
                localStorage.setItem("listaJuegos", JSON.stringify(lista))
            }
        }
    }
   
}

export{eliminarJuego}