import React, {useEffect} from 'react';
import './closeDifficultLevel.scss'
import popUpBlackout from "../../../decorators/pop-up-blackout/PopUpBlackout";
import {connect} from "react-redux";
import ConfettiGenerator from "confetti-js";
import {selectShowConfetti} from "../../../store/selectors";
import {CSSTransition, SwitchTransition} from "react-transition-group";

function CloseDifficultLevel(props) {
    const {onClick, name, number, buyLevelsDiff, showConfetti, money} = props;
    useEffect(() => {
        if (showConfetti) {
            const confettiSettings = {
                target: 'show-confetti',
                clock: 15,
                start_from_edge: true,
                colors: [
                    [226, 84, 84]
                ]
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
                    <div className={'close-game close-game_diff'}>
                        <div className={'close-game__header'}>
                            <h3>Уровни открыты!</h3>
                        </div>
                        <p>Поздравляем! Вы открыли экспертные уровни!</p>
                        <div className="menu-game__icon menu-game__icon-diff">
                            {number}
                        </div>
                        <div className="close-game__name">{name}</div>
                    </div>

                    :

                    <div className={'close-game close-game_diff'}>
                        <div className={'close-game__header'}>
                            <h3>Уровни закрыты</h3>
                            <div className="close-game__close" onClick={onClick}/>
                        </div>
                        <p>Откройте уровни за {money} монет</p>
                        <div className="menu-game__icon menu-game__icon-diff">
                            {number}
                        </div>
                        <div className="close-game__name">{name}</div>
                        <div className="buyGame" onClick={buyLevelsDiff}>
                            Открыть {money}
                            <div className={'money-img'}/>
                        </div>
                    </div>
                }
            </CSSTransition>
        </SwitchTransition>

    );
}

export default connect(
    (store) => ({
        showConfetti: selectShowConfetti(store)
    })
)(popUpBlackout(CloseDifficultLevel));
