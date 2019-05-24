import { DECK } from './types';

export const fetchDeckSuccess = deckJson => {
    const { remaining, deck_id } = deckJson;

    return { type: DECK.FETCH_SUCCESS, remaining, deck_id };
}

export const fetchDeckError = error => {
    return { type: DECK.FETCH_ERROR, message: error.message };
}

export const fetchNewDeck = () => dispatch => {
    return fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(response => { 
            if (response.status !== 200) {
                throw new Error('Unsuccessful request to deckofcard api');
            }
            return response.json()})
        .then(json => dispatch(fetchDeckSuccess(json)))
        .catch(error => dispatch(fetchDeckError(error)));
}