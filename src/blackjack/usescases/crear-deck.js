import _ from 'underscore'

// ejemplo de exportacion
export const miNombre = 'Jorge'

/**
 * Crea UN NUEVO DECK
 * @param {Array<string>} tiposDeCarta Ejemplo ['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposEspeciales Ejemplo ['C', 'D', 'H', 'S'],
 * @returns {Array<string>}
 */
const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if (!tiposDeCarta || tiposDeCarta.length === 0) {
        throw new Error('Tipo de Carta es Obligatorio como array y tiene que tener longuitud mayor que 1')
    }

    if (!tiposEspeciales || tiposEspeciales.length === 0) {
        throw new Error('Tipo de Carta es Obligatorio como array y tiene que tener longuitud mayor que 1')
    }

    let deck = []
    for (let i = 2; i <= 10; i++) {

        for (const tipo of tiposDeCarta) {
            deck.push(i + tipo)
        }
    }
    for (const tipo of tiposDeCarta) {
        for (const esp of tiposEspeciales) {
            deck.push(esp + tipo)
        }
    }

    return _.shuffle(deck)

}

// Exportacion por defecto

export default crearDeck;