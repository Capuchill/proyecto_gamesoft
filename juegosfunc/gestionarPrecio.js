
//3 calculo el iva sobre el precio con impuesto especial
function iva(precioConImpuestoEspecial){
    let iva = precioConImpuestoEspecial * 0.16
    return iva
} 


//1 calculo el impuesto especial
function impuestoEspecial(precio){
    let impuestoEspecial = precio * 0.04
    return impuestoEspecial
}

//2 agrego el impuesto especial al precio
function precioConImpuestoEspecial(precio,impuestoEspecial){
    let precioConImpuestoEspecial = precio + impuestoEspecial
    return precioConImpuestoEspecial
}

//4 agrego el iva al precio con el impuesto especial para obtener el precio final
function precioFinal(precioConImpuestoEspecial,iva){
    let precioFinal = precioConImpuestoEspecial + iva
    return precioFinal
}

export{precioConImpuestoEspecial,impuestoEspecial,precioFinal,iva}
