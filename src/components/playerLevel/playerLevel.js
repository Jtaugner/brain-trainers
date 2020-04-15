import React from 'react';
import './playerLevel.scss'
import {connect} from "react-redux";
import {selectExp, selectLevel} from "../../store/selectors";
import {getExpForLevel} from "../../projectCommon";

function PlayerLevel(props) {
    const {level, exp} = props;
    const expProgress = exp / getExpForLevel(level) * 100;
    return (
        <div className="playerLevel">
            <div className="playerLevel__progress-bar">
                <div className="playerLevel_level">{level + 1}</div>
                <div className="progress"
                     style={{width: expProgress + '%'}}/>

                <div className="progress-bar__dec progress-bar__dec_1"/>
                <div className="progress-bar__dec progress-bar__dec_2"/>
                <div className="progress-bar__dec progress-bar__dec_3"/>
                <div className="progress-bar__dec progress-bar__dec_4"/>

            </div>
        </div>
    );
}

export default connect((store) => ({
        level: selectLevel(store),
        exp: selectExp(store)
    })
)(PlayerLevel);
