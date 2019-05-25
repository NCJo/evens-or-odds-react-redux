import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startGame, cancelGame } from '../actions/settings';
import { fetchNewDeck } from '../actions/deck';
import fetchStates from '../reducers/fetchStates';
import Instructions from './Instructions';
import DrawCard from './DrawCard';
import Card from './Card';
import Guess from './Guess';
import GameState from './GameState';


class App extends Component {

    startGame = () => {
        this.props.startGame();
        this.props.fetchNewDeck();  
    }
    
    render() { 
        console.log('this', this);

        if (this.props.fetchState === fetchStates.error) {
            return (
                <div>
                    <p>Please reload the app.</p>
                    <p>{this.props.message}</p>
                </div>
            )
        }

        return (
            <div>
                <h2>♠️ ♦️ Evens or Odds ♥️ ♣️</h2>
                {
                    this.props.gameStarted ? (
                        <div>
                            <h3>The game is on!</h3>
                            <GameState />
                            <br />
                            <Guess />
                            <br />
                            <DrawCard />
                            <hr />
                            <Card />
                            <hr />
                            <button onClick={this.props.cancelGame}>Abort! Abort!</button>
                        </div>
                    ) : (
                        <div>
                            <h3>A new game awaits!</h3>
                            <br />
                            <button onClick={this.startGame}>Start Game!</button>
                            <hr />
                            <Instructions />
                        </div>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('state', state);

    return { 
        gameStarted: state.settings.gameStarted,
        fetchState: state.deck.fetchState,
        message: state.deck.message
    };
}

// 'dispatch' is a method
// const mapDispatchToProps = dispatch => {
//     return {
//         startGame: () => dispatch(startGame()),
//         cancelGame: () => dispatch(cancelGame()),
//         fetchNewDeck: () => fetchNewDeck(dispatch)
//     };
// }

// const componentConnector = connect(mapStateToProps, mapDispatchToProps);
const componentConnector = connect(
    mapStateToProps,
    { startGame, cancelGame, fetchNewDeck }
    );

export default componentConnector(App);
















// // These are equal:
// const { gameStarted } = state.settings;
// const { fetchState, message } =  state.deck;

// // and

// const {
//     settings: { gameStarted },
//     deck: { fetchState, message }
// } = state;