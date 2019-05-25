import { combineReducers } from 'redux';
import settingsReducer from './settings';
import deckReducer from './deck';
import gameStateReducer from './gameState';

export default combineReducers({ 
    settings: settingsReducer, 
    deck: deckReducer,
    gameState: gameStateReducer
});
































// import { 
//     SET_GAME_STARTED, 
//     SET_INSTRUCTIONS_EXPANDED, 
//     DECK
// } from '../actions/types';
// import fetchStates from './fetchStates';

// const DEFAULT_SETTINGS = {
//     gameStarted: false,
//     instructionExpanded: false
// }

// const rootReducer = (state = DEFAULT_SETTINGS, action) => {
//     console.log('state', state, 'action', action);

//     switch(action.type) {
//         case SET_GAME_STARTED:
//             return {
//                 ...state,
//                 gameStarted: action.gameStarted
//             };
//         case SET_INSTRUCTIONS_EXPANDED:
//             return {
//                 // gameStarted: state.gameStarted,
//                 // instructionExpanded : state.instructionExpanded
//                 // 2 lines above are same with '...state'
//                 ...state,
//                 instructionExpanded : action.instructionExpanded
//             };
//         case DECK.FETCH_SUCCESS:
//             const { remaining, deck_id } = action;
//             return {
//                 ...state,
//                 remaining,
//                 deck_id,
//                 fetchState: fetchStates.success
//             };
//         case DECK.FETCH_ERROR:
//             return {
//                 ...state,
//                 message: action.message,
//                 fetchState: fetchStates.error
//             };
//         default:
//             return state;
//     }   

// };

// export default rootReducer;