import React, {useEffect} from 'react';
import './closePopUp.scss'
import popUpBlackout from "../../decorators/pop-up-blackout/PopUpBlackout";
import ConfettiGenerator from "confetti-js";
import {connect} from "react-redux";
import {selectShowConfetti} from "../../store/selectors";
import {switchOffConfetti} from "../../store/ac";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import GameDone from "../gamePage/gameDone/gameDone";
import GameDoneLose from "../gamePage/gameDoneLose/gameDoneLose";

function ClosePopUp(props) {
    const {
        gameClass, name, money,
        parText, headerText,
        openedParText, openedHeaderText,
        onClick,
        nameColor,
        buyGame, showConfetti
    } = props;
    useEffect(() => {
        if (showConfetti) {
            const confettiSettings = {
                target: 'show-confetti',
                clock: 29,
                start_from_edge: true
            };
            const confetti = new ConfettiGenerator(confettiSettings);
            confetti.render();
            document.getElementById('show-confetti').style.zIndex = '2';

        }

    }, [showConfetti]);
    return (

        <SwitchTransition>
            <CSSTransition
                key={showConfetti}
                addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                classNames='fade-pop-up'
            >
                {showConfetti ?
                    <div className={'close-game ' + gameClass}>
                        <div className={'close-game__header'}>
                            <h3>{openedHeaderText}</h3>
                        </div>
                        <p>{openedParText}</p>
                        <div className="menu-game__icon"/>
                        <div className="close-game__name" style={{color: nameColor}}>{name}</div>
                    </div>

                    :

                    <div className={'close-game ' + gameClass}>
                        <div className={'close-game__header'}>
                            <h3>{headerText}</h3>
                            <div className="close-game__close" onClick={() => onClick()}/>
                        </div>
                        <p>{parText}</p>
                        <div className="menu-game__icon"/>
                        <div className="close-game__name" style={{color: nameColor}}>{name}</div>
                        <div className="buyGame" onClick={buyGame}>
                            Открыть {money}
                            <div className={'money-img'}/>
                        </div>
                    </div>}
            </CSSTransition>
        </SwitchTransition>


    );
}

export default connect(
    (store) => ({
        showConfetti: selectShowConfetti(store)
    })
)(popUpBlackout(ClosePopUp));
