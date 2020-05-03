import React from "react";
import './gameProgressLine.scss'

function GameProgressLine(props) {
    const {round, rounds} = props;
    const bgStyle = 'linear-gradient(to right, #d8d0ff ' + (round / rounds * 100)+ '%, white 0%)';
    return (
        <div className="game-line-rounds" style={{background: bgStyle}} />
    )

}

export default GameProgressLine