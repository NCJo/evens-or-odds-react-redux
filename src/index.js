import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/App';
import rootReducer from './reducers';
import './index.css';



const store = createStore(rootReducer, applyMiddleware(thunk));

console.log('store', store);
console.log('store.getState()', store.getState());

store.subscribe(() => console.log('store.getState()', store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);





// const DEFAULT_SETTINGS = {
//     gameStarted: false,
//     instructionExpanded: false
// }

// const SET_GAME_STARTED = 'SET_GAME_STARTED';
// const SET_INSTRUCTIONS_EXPANDED = 'SET_INSTRUCTIONS_EXPANDED';

// const rootReducer = (state = DEFAULT_SETTINGS, action) => {
//     console.log('state', state, 'action', action);

//     switch(action.type) {
//         case SET_GAME_STARTED:
//             return {
//                 ...state,
//                 instructionsExpanded: state.instructionExpanded
//             };
//         case SET_INSTRUCTIONS_EXPANDED:
//             return {
//                 // gameStarted: state.gameStarted,
//                 // instructionExpanded : state.instructionExpanded
//                 // 2 lines above are same with '...state'
//                 ...state,
//                 instructionExpanded : action.instructionExpanded
//             };
//         default:
//             return state;
//     }   

// };

// const store = createStore(rootReducer);

// console.log('store', store);
// console.log('store.getState()', store.getState());

// store.subscribe(() => console.log('store.getState()', store.getState()));

// const startGame = () => {
//     return { type: SET_GAME_STARTED, gameStarted: true };
// }

// const cancelGame = () => {
//     return { type: SET_GAME_STARTED, gameStarted: false };
// }

// const expandInstructions = () => {
//     return { type: SET_INSTRUCTIONS_EXPANDED, instructionExpanded: true }
// }

// const cancelInstructions = () => {
//     return { type: SET_INSTRUCTIONS_EXPANDED, instructionExpanded: false }
// }

// store.dispatch(startGame());
// store.dispatch(cancelGame());
// store.dispatch(expandInstructions());
// store.dispatch(cancelInstructions());


// ReactDOM.render(<App />, document.getElementById('root')
// );
