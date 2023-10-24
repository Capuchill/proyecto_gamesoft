//se crea a clase para clientes

class Cliente {
    constructor(id, nombres, apellidos, telefono, correo, fechaNacimiento, nacionalidad, puntosFide=0) {
        this.id = id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.correo = correo;
        this.fechaNacimiento = fechaNacimiento;
        this.nacionalidad = nacionalidad;
        this.puntosFide = puntosFide
        this.nivel = "Noob"
    }
}

export { Cliente };