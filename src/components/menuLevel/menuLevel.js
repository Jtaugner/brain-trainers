import React from 'react';
import './menuLevel.scss'
import {clickSound} from "../../sounds";
import {selectSounds} from "../../store/selectors";
import {connect} from "react-redux";

const classNames = require('classnames');

function MenuLevel(props) {
    const {
        name, gameClass, chooseLevel,
        levelsDone, isGameClosed, allLevels,
        difficult,
        showProgress,
        gameDoneColor,
        isSounds
    } = props;
    const menuGameClasses = classNames({
        'menu-game': true,
        [gameClass]: true,
        'menu-game_closed': isGameClosed,
        'difficult-icon': (difficult + 1)
    });
    const onClickLevel = () => {
        if(isGameClosed){
            props.onClick()
        }else{
            chooseLevel();
            if(isSounds) clickSound.play();
        }

    };
    const bgStyle = 'linear-gradient(to right, ' + gameDoneColor + ' ' + (levelsDone/allLevels*100)+ '%, #eee 0%)';
    return (
        <div className={menuGameClasses}
             onClick={onClickLevel}
        >
            <div
                className={'menu-game__icon'}>
                {(difficult+1) ? difficult+1 : ''}
            </div>
            <div className="menu-game__additional">
                <div className="game-name">{name}</div>
                {
                    showProgress ? <>
                        <div className="game-progress" style={{background: bgStyle}} />
                        <div className="game-doneLevels">
                            Пройдено: {levelsDone} / {allLevels}
                        </div>
                    </> : ''
                }

            </div>
        </div>
    )
}

export default connect(
    (store)=>({
    isSounds: selectSounds(store)
})
)(MenuLevel);
