import React from 'react';
import { connect } from 'react-redux';

const Card = props => {
    // If card[0] is not undefined
    if (!props.cards[0]) return null;

    // Current drawn card
    const { value, suit, image } = props.cards[0];

    return (
        <div>
            <h3>{value} of {suit}</h3>
            <img src={image} alt='card-image'/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cards: state.deck.cards
    };
}

const componentConnector = connect(
    mapStateToProps
);

export default componentConnector(Card)