import React from "react";
import './gameProgressLine.scss'

function GameProgressLine(props) {
    const {round, rounds} = props;
    return (
        <div className="game-line-rounds">
            <div className="done-round" style={{width:
                    (round
                        / rounds
                        * 100 + '%')
            }}/>
        </div>
    )

}

export default GameProgressLine