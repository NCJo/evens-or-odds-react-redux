import React from 'react';
// Because need to read from store and dispatch action to store
import { connect } from 'react-redux';
import { expandInstructions, collapseInstructions } from '../actions/settings';

const Instructions = props => {
    // state, dispatch, dispatch
    const { instructionsExpanded, expandInstructions, collapseInstructions } = props;

    if (instructionsExpanded) {
        return (
            <div>
                <h3>Instructions</h3>
                <p>Welcome to evens or odds.</p>
                <p>The deck is shuffled. You will predict whether the next card will be even or odd.</p>
                <p>You will gain a point for every card you get right.</p>
                <p>Face cards will be ommited.</p>
                <br/>
                <button onClick={collapseInstructions}>Show less</button>
            </div>
        );
    }

    return (
        <div>
            <h3>Instructions</h3>
            <p>Welcome to evens or odd. The deck is shuffled...</p>
            <button onClick={expandInstructions}>Read more</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        expandInstructions: () => dispatch(expandInstructions()),
        collapseInstructions: () => dispatch(collapseInstructions())
    }
}

const mapStateToProps = state => {
    return { instructionsExpanded: state.settings.instructionExpanded };
}

const componentConnecttor = connect(mapStateToProps, mapDispatchToProps);

export default componentConnecttor(Instructions);

// Refractor:

// export default connect(
//     state => ({ instructionsExpanded: state.instructionsExpanded }),
//     { expandInstructions, collapseInstructions }
// )(Instructions);