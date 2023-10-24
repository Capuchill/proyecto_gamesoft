//creo la tarjeta de cliente (el esqueleto de como quiero que se vea su parte visual)

import { avatarCliente } from "../clientSee/avatarCliente.js"
import { insigniaCliente } from "../clientSee/insignia.js"


function tarjetaCliente(cliente){
    
    let insignia = insigniaCliente(cliente) 
    let avatar = avatarCliente(cliente)
    let tarjeta = 
    `<div class="card mb-3 cliente" style="max-width: 350px;">
        <div class="row g-0">
        <div class="col-md-5">
                <img  class="img-fluid rounded-start" alt=""  src="${avatar}">
                <div class="card border-info mb-3" style="max-width: 15rem;">
                    <div class="card-header">FIDELIZACION</div>
                    <div class="card-body">
                        <img src="${insignia}" class="img-fluid" alt="...">
                        <h5 class="card-title">lv. ${cliente.nivel}</h5>
                        <p class="card-text ptsCliente">Pts: ${cliente.puntosFide}</p>
                        <img  class="img-fluid rounded-start" alt="">
                        <div id="recompensas${cliente.id}">

                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card-body d-flex flex-column botonesCliente">
                    <h5 class="card-title" style="font-size: 2rem;">${cliente.nombres}</h5>
                    <button type="button" class="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal${cliente.id}">
                        ATRIBUTOS
                    </button>
                    <button type="button" class="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop${cliente.id}">
                      MODIFICAR
                    </button>
                    <a class="btn btn-danger" data-cliente-id="${cliente.id}">ELIMINAR</a>
                </div>
            </div>
            <div class="modal fade" id="exampleModal${cliente.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">ATRIBUTOS</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Nombre completo: ${cliente.nombres} ${cliente.apellidos}</p>
        <p>Identificación: ${cliente.id}</p>
        <p>Telefono: ${cliente.telefono}</p>
        <p>Correo: ${cliente.correo}</p>
        <p>Fecha nacimiento: ${cliente.fechaNacimiento}</p>
        <p>Nacionalidad: ${cliente.nacionalidad}</p>
      </div>-
    </div>
  </div>
  </div>
  <!-- Button trigger modal -->

<!-- Modal -->
<div class="modal fade" id="staticBackdrop${cliente.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Título del modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <label for="" class="input-group-text">DNI</label>
          <input type="number" class="form-control" id="dniModi${cliente.id}" value="${cliente.id}">
          <label for="">Nombres</label>
          <input type="text"  class="form-control" id="nombresModi${cliente.id}" value="${cliente.nombres}">
          <label for="">Apellidos</label>
          <input type="text"  class="form-control" id="apellidosModi${cliente.id}" value="${cliente.apellidos}">
          <label for="">Telefono</label>
          <input type="number" class="form-control" id="telefonoModi${cliente.id}" value="${cliente.telefono}">
          <label for="">Correo</label>
          <input type="email" class="form-control" id="correoModi${cliente.id}" value="${cliente.correo}">
          <label for="">Fecha Nacimiento</label>
          <input type="date" class="form-control" id="fechaNaciModi${cliente.id}" value="${cliente.fechaNacimiento}">
          <label for="">Nacionalidad</label>
          <input type="text"  class="form-control" id="nacionalidaModi${cliente.id}" value="${cliente.nacionalidad}">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" onclick="modificarCliente(this)" data-bs-dismiss="modal" id="btnGuardarCambiosCliente" data-id="${cliente.id}">Guardar</button>
      </div>
    </div>
  </div>
</div>
        </div>
    </div>`
    return tarjeta
}

export {tarjetaCliente}