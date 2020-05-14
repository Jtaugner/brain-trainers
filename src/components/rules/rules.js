import React from 'react';
import './rules.scss'
import popUpBlackout from "../../decorators/pop-up-blackout/PopUpBlackout";

function Rules(props) {
    const {gameName, onClick} = props;
    return (
        <div className={'rules'}>
            <h2>{gameName}</h2>
            {
                props.children
            }
            <div
                className="close-rules"
                onClick={onClick}
            >Играть</div>
        </div>

    );
}

export default popUpBlackout(Rules);
