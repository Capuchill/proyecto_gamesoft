import { Cliente } from "./cliente.js";

//lista por defecto

let listaClientes = []

let nuevoCliente = new Cliente(111, "Graymilk", "Gruñon", 3114256789, "graymilk780@gmail.com", "05-07-2019", "Colombiano")
listaClientes.push(nuevoCliente)

nuevoCliente = new Cliente(555, "Andromeda", "Hermosa", 3113145678, "andromeda780@gmail.com", "27-05-2021", "Colombiana")
listaClientes.push(nuevoCliente)

nuevoCliente = new Cliente(777, "Moon", "Puichikito", 3117786500, "Moon000@gmail.com", "11-01-2023", "Colombiano")
listaClientes.push(nuevoCliente)

export {listaClientes}

