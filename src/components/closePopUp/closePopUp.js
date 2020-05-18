import React, {useEffect} from 'react';
import './closePopUp.scss'
import popUpBlackout from "../../decorators/pop-up-blackout/PopUpBlackout";
import ConfettiGenerator from "confetti-js";
import {connect} from "react-redux";
import {selectShowConfetti, selectSounds} from "../../store/selectors";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {openNewGameSound} from '../../sounds'

function ClosePopUp(props) {
    const {
        gameClass, name, money,
        parText, headerText,
        openedParText, openedHeaderText,
        onClick,
        nameColor,
        buyGame, showConfetti, isSounds
    } = props;
    useEffect(() => {
        if (showConfetti) {
            const confettiSettings = {
                target: 'show-confetti',
                clock: 35,
                start_from_edge: true,
                colors: [
                    [216, 208, 255],
                    [176, 156, 253],
                    [251, 194, 48],
                    [208, 238, 255],
                    [210, 255, 208],
                    [242, 255, 208],
                    [255, 250, 208],
                    [131, 218, 143],
                    [239, 101, 101],
                    [226, 84, 84],
                    [48, 176, 66],
                    [118, 232, 121],
                    [89, 228, 227],
                    [87, 183, 215]

                ]
            };
            const confetti = new ConfettiGenerator(confettiSettings);
            confetti.render();
            document.getElementById('show-confetti').style.zIndex = '2';
            if(isSounds){
                openNewGameSound.play()
            }

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
        showConfetti: selectShowConfetti(store),
        isSounds: selectSounds(store)
    })
)(popUpBlackout(ClosePopUp));
