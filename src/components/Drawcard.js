import React from 'react';
import { connect } from 'react-redux';
import { fetchDrawCard } from '../actions/deck';

const DrawCard = props => {
    console.log('DrawCard props', props);
    
    const { deck_id, fetchDrawCard } = props;

    return (
        <div>
            <button onClick={fetchDrawCard(deck_id)}>Draw more card!</button>
        </div>
    )
}

const mapStateToProps = state => {
    return { deck_id: state.deck.deck_id };
}

const mapDispatchToProps = dispatch => {
    return {
        // This format is used because the inline jsx fetchDrawCard call is passing the 'deck_id' parameter
        fetchDrawCard: deck_id => () => dispatch(fetchDrawCard(deck_id))
    };
}

const componentConnector = connect(mapStateToProps, mapDispatchToProps);

export default componentConnector(DrawCard);