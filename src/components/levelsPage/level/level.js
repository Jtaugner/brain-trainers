import React from 'react';
import './level.scss'
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {chooseLevel} from "../../../store/ac";
import {selectSounds} from "../../../store/selectors";
import {clickSound} from "../../../sounds";

function Level(props) {
    const {level, closedLevel, newLevel, chooseLevel,
        isSounds} = props;
    const levelOnClick = () => {
        if(isSounds){
            clickSound.play();
        }
        chooseLevel();
    }
    if(closedLevel) return (
        <div className={'level closed-level'}>
            {level+1}
        </div>
    );
    return (
        <Link
            to={'/game'}
              onClick={levelOnClick}
            onKeyDown={levelOnClick}
            className={'level ' + (newLevel ? 'new-level' : '')}
        >
            {level+1}
        </Link>

    );
}

export default connect((store) => ({
        isSounds: selectSounds(store)
    }),
    (dispatch, props)=>({
        chooseLevel: () => dispatch(chooseLevel(props.level))
    }))(Level);
