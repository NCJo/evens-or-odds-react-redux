import {
    DECK,
    DECK_DRAW
} from '../actions/types';
import fetchStates from './fetchStates';

// Default state
const DEFAULT_DECK = {
    deck_id: '',
    remaining: 0,
    fetchState: '',
    message: '',
    cards: []
};

const deckReducer = (state = DEFAULT_DECK, action) => {
    console.log('deck state', state, 'action', action);

    // Fixed the variables declared more than once
    let remaining, deck_id, cards;

    switch(action.type) {
        case DECK.FETCH_SUCCESS:
            ({ remaining, deck_id } = action);
            return {
                ...state,
                remaining,
                deck_id,
                fetchState: fetchStates.success
            };
        case DECK.FETCH_ERROR:
            return {
                ...state,
                message: action.message,
                fetchState: fetchStates.error
            };
        case DECK_DRAW.FETCH_SUCCESS:
            cards = action.cards;
            remaining = action.remaining;
            return {
                ...state,
                cards,
                remaining,
                fetchState: fetchStates.success
            };
        case DECK_DRAW.FETCH_ERROR:
            return {
                ...state,
                message: action.message,
                fetchState: fetchStates.error
            };
        default:
            return state;
    }   
};

export default deckReducer;