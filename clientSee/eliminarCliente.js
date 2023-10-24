function eliminarCliente(idCliente,lista){
    if(confirm("Esta seguro de eliminar?")){
        for (let i = 0; i < lista.length; i++) {
            const element = lista[i];
            if (element.id == idCliente){
                lista.splice(i,1)
                localStorage.setItem("listaClientes", JSON.stringify(lista))
            }
        }
    }
   
}

export{eliminarCliente}