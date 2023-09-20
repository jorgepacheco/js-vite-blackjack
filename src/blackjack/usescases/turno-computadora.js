import { pedirCarta } from "./pedir-carta"
import { valorCarta } from "./valor-carta"
import { crearCarta } from "./crear-carta-html"


export const turnoComputadora = (puntosMinimos, puntosJugadores, deck, puntosHTML, divCartasJugadores) => {
    let puntosComputadora = 0
    do {
        const carta = pedirCarta(deck)
        puntosComputadora = acumulaPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosHTML)
        const imgCarta = crearCarta(carta)
        divCartasJugadores[puntosJugadores.length - 1].append(imgCarta)

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21))
    determinarGanador(puntosJugadores)
}

/* export const crearCarta = (carta, turno, divCartasJugadores) => {
    const imgCarta = document.createElement('img')
    imgCarta.src = `assets/cartas/${carta}.png`
    imgCarta.classList.add('carta')
    divCartasJugadores[turno].append(imgCarta)
} */

export const acumulaPuntos = (carta, turno, puntosJugadores, puntosHTML) => {
    console.log('POr Aqui', carta, turno, puntosJugadores)
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta)
    puntosHTML[turno].innerText = puntosJugadores[turno]
    return puntosJugadores[turno]
}

const determinarGanador = (puntosJugadores) => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores
    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}