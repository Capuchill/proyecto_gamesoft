
import { eliminarJuego } from "./eliminarJuego.js"
import { Juego } from "./juego.js"
import { tarjetaJuego } from "./tarjetaVideojuego.js"

let dataGames = []

if(JSON.parse(localStorage.getItem("listaJuegos"))){
    dataGames = JSON.parse(localStorage.getItem("listaJuegos"))
}


function agregarJuego(){
    
    let idJuego = document.getElementById("idJuego").value
    /*  */
    let nombreJuego = document.getElementById("nombreJuego").value
    let tematicaJuego = document.getElementById("tematicaJuego").value
    let imgJuego = document.getElementById("imgJuego").value
    let licenciaJuego = document.getElementById("licenciaJuego").value
   /*   */
    let ptsFideJuego = document.getElementById("pstFideJuego").value
    /*  */

    let vacio = false
    
    if(idJuego.trim()==""||nombreJuego.trim()==""||tematicaJuego.trim()==""||imgJuego.trim()==""||
    licenciaJuego.trim()==""||ptsFideJuego.trim()==""){
        vacio = true
    }


    if (vacio) {
        alert("No deje campos vacios")
    } else {

        let existe = false

        dataGames.forEach(game => {
            if (game.id == idJuego) {
                existe = true
            }
        });

        if (existe) {
            alert("El ID de este juego ya se encuentra registrado")
        } else {
            idJuego = parseInt(idJuego)
            licenciaJuego = parseInt(licenciaJuego)
            ptsFideJuego = parseInt(ptsFideJuego)
            let nuevoJuego = new Juego(idJuego,nombreJuego,tematicaJuego,imgJuego,licenciaJuego,ptsFideJuego)
            dataGames.push(nuevoJuego)
            localStorage.setItem("listaJuegos", JSON.stringify(dataGames))
            alert("se guardooooo")
            mostrarJuegos()
        }
    }

}

let contenedorJuegos = document.getElementById("dataJuegos")

function mostrarJuegos() {
    contenedorJuegos.innerHTML = ""
    dataGames.forEach(game => {
        let tarjeta = tarjetaJuego(game)
        contenedorJuegos.insertAdjacentHTML("beforeend", tarjeta)
    });
}

function eliminarJuegos(btn){
    let idJuego = btn.getAttribute("id-juego") 
    eliminarJuego(idJuego,dataGames)
    mostrarJuegos()
}

let buscarJuego = document.getElementById("buscarJuego")

buscarJuego.addEventListener("keyup",() => {
    let JuegoBuscado = buscarJuego.value.toLowerCase();
    contenedorJuegos.innerHTML = "";
    for (let juego of dataGames){
        let nombrejuego = juego.nombre.toLowerCase();
        if (nombrejuego.indexOf(JuegoBuscado) !== -1){
            let tarjeta = tarjetaJuego(juego)
            contenedorJuegos.insertAdjacentHTML("beforeend", tarjeta)
        }else if(JuegoBuscado==' '){
            alert('madure')
        }
    }
    if (contenedorJuegos.innerHTML.trim() === "") {
        contenedorJuegos.innerHTML= `<p style="color: white;">Este juego no se encuentra registrado</p>`
    }
})

window.agregarJuego = agregarJuego
window.addEventListener("load",mostrarJuegos)
window.eliminarJuegos = eliminarJuegos