// DOM

const botonModoFacil = document.getElementById("botonModoFacil");
const botonModoNormal = document.getElementById("botonModoNormal");
const botonModoDificil = document.getElementById("botonModoDificil");
const grilla = document.querySelector(".grilla")
const grilla2 = document.querySelector(".grilla2")
const portaaviones = document.getElementById("portaaviones");
let barquitoSeleccionado = false

// VACIAR CADA GRILLA

const vaciarGrilla2 = () => {
    grilla2.innerHTML = ''
}
const vaciarGrilla = () => {
    grilla.innerHTML = ''
}

// BOTONES

botonModoFacil.onclick = () => {
    crearGrilla(10, 6)
    crearGrilla2(10, 6)
};

botonModoNormal.onclick = () => {
    crearGrilla(10, 10)
    crearGrilla2(10, 10)
};

botonModoDificil.onclick = () => {
    crearGrilla(15, 10)
    crearGrilla2(15, 10)
};



// CREAR LA GRILLA Y ASIGNAR GOTITAS

const crearGrilla = (ancho, alto) => {
    const anchoDeGrilla = 50 * ancho
    grilla.style.width = `${anchoDeGrilla}px`

    const tamanioGrilla = ancho * alto

    // alternativa
    // grilla.style.width = String(anchoDeGrilla) + 'px'
    // grilla.style.width = anchoDeGrilla + 'px'

    const items = ['💧']

    vaciarGrilla()

    for (let i = 0; i < tamanioGrilla; i++) {
        let bloqueGrilla = `<div data-id="${i}" class="bloque">${items[0]}</div>`
        grilla.innerHTML += bloqueGrilla


    };

    const bloques = document.querySelectorAll(".bloque")
    for (let i = 0; i < bloques.length; i++) {
        let bloque = bloques[i]
        bloque.onclick = () => {
            console.log("Esta es tu posicion" + " " + bloque.dataset.id)

        }
    }

    function ponerBarquito(barco) {
        if (barquitoSeleccionado) {
barco.classList.replace("grilla", "grillaSeleccionado");
        }
    }
    
    portaaviones.onclick = () => {
        ponerBarquito(portaaviones)
        barquitoSeleccionado = true
    }
}



// CREAR LA GRILLA 2 Y ASIGNAR GOTITAS

const crearGrilla2 = (ancho, alto) => {
    const anchoDeGrilla = 50 * ancho
    grilla2.style.width = `${anchoDeGrilla}px`

    // alternativa
    // grilla.style.width = String(anchoDeGrilla) + 'px'
    // grilla.style.width = anchoDeGrilla + 'px'

    const obtenerNumeroAlAzar = () => {
        return Math.floor((Math.random() * 1))
    }

    const items = ['💧']

    const obtenerFrutaAlAzar = (items) => {
        return items[obtenerNumeroAlAzar()]
    }

    const arrayDeGrilla = []

    for (let i = 0; i < alto * ancho; i++) {
        arrayDeGrilla[i] = obtenerFrutaAlAzar(items)
    }

    vaciarGrilla2()

    for (let i = 0; i < arrayDeGrilla.length; i++) {
        grilla2.innerHTML += `<div>${arrayDeGrilla[i]}</div>`
    }
}