import React from 'react';
import './level.scss'
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {chooseLevel} from "../../../store/ac";

function Level(props) {
    const {level, closedLevel, newLevel, chooseLevel} = props;
    if(closedLevel) return (
        <div className={'level closed-level'}>
            {level+1}
        </div>
    );
    return (
        <Link to={'/game'} onClick={chooseLevel}>
            <div className={'level ' + (newLevel ? 'new-level' : '')}>
                {level+1}
            </div>
        </Link>

    );
}

export default connect(null,
    (dispatch, props)=>({
        chooseLevel: () => dispatch(chooseLevel(props.level))
    }))(Level);
