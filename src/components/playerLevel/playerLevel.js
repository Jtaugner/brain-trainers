import React from 'react';
import './playerLevel.scss'
import {connect} from "react-redux";
import {selectExp, selectPlayerLevel} from "../../store/selectors";
import {getExpLevel} from "../../projectCommon";

const classNames = require('classnames');

function PlayerLevel(props) {
    const {level, exp} = props;
    let levelClasses = classNames({
        "playerLevel_level": true,
        "playerLevel_level_small": level > 9
    });
    const bg = 'linear-gradient(to right, #d8d0ff ' + (exp / getExpLevel(level) * 100)+ '%, #eee 0%)';
    return (
        <div className="playerLevel">
            <div className="playerLevel__progress-bar"
            style={{background: bg}}
            >
                <div className={levelClasses}>{level + 1}</div>
                <div className="progress-bar__dec progress-bar__dec_1"/>
                <div className="progress-bar__dec progress-bar__dec_2"/>
                <div className="progress-bar__dec progress-bar__dec_3"/>
                <div className="progress-bar__dec progress-bar__dec_4"/>

            </div>
        </div>
    );
}

export default connect((store) => ({
        level: selectPlayerLevel(store),
        exp: selectExp(store)
    })
)(PlayerLevel);
