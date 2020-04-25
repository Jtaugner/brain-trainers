import React from 'react';

function GamePlayAgain(props) {
    return (
        <div
            className="game-done__button game-done__again"
            onClick={props.playAgain}
        />
    );
}

export default GamePlayAgain;
