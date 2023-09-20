import _ from 'underscore';
import crearDeck, { miNombre } from './usescases/crear-deck'
import { pedirCarta } from './usescases/pedir-carta';
import { valorCarta } from './usescases/valor-carta';
import { turnoComputadora, acumulaPuntos } from './usescases/turno-computadora';
import { crearCarta } from './usescases/crear-carta-html';


'use strict'
let deck = []

const tipos = ['C', 'D', 'H', 'S'], especiales = ['A', 'J', 'Q', 'K']

let puntosJugadores = []

// Referencias HTML

const btnPedir = document.querySelector('#btnPedir')
const btnNuevo = document.querySelector('#btnNuevo')
const btnDetener = document.querySelector('#btnDetener')

const puntosHTML = document.querySelectorAll('small')

const divCartasJugadores = document.querySelectorAll('.divCartas')

deck = crearDeck(tipos, especiales)

const inicializarjuego = (numJugadores = 2) => {

    deck = crearDeck(tipos, especiales)
    puntosJugadores = []
    for (let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0)

    }
    puntosHTML.forEach(elem => elem.innerText = 0)
    divCartasJugadores.forEach(elem => elem.innerHTML = '')

    btnPedir.disabled = false
    btnDetener.disabled = false
}


btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck)

    const puntosJugador = acumulaPuntos(carta, 0, puntosJugadores, puntosHTML)

    const imgCarta = crearCarta(carta)
    divCartasJugadores[0].append(imgCarta)

    if (puntosJugador > 21) {
        console.warn('Lo siento has perdido')
        btnPedir.disabled = true
        btnDetener.disabled = true
        turnoComputadora(puntosJugador, puntosJugadores, deck, puntosHTML, divCartasJugadores)
    } else if (puntosJugador === 21) {
        console.warn('21 genial')
        btnPedir.disabled = true
        btnDetener.disabled = true
        turnoComputadora(puntosJugador, puntosJugadores, deck, puntosHTML, divCartasJugadores)
    }
})


btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true
    btnDetener.disabled = true
    turnoComputadora(puntosJugadores[0], puntosJugadores, deck, puntosHTML, divCartasJugadores)
})



btnNuevo.addEventListener('click', () => {
    console.clear();
    inicializarjuego()

});


