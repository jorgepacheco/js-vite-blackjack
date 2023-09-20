

export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) {
        throw 'No quedan cartas en la baraja'
    }
    return deck.pop();
}