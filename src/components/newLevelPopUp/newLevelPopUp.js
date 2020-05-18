import React from 'react';
import './newLevelPopUp.scss'
import popUpBlackout from "../../decorators/pop-up-blackout/PopUpBlackout";
import {connect} from "react-redux";
import {selectPlayerLevel, selectSounds} from "../../store/selectors";
import {getLevelPrize} from "../../projectCommon";
import {newLevelSound} from "../../sounds";


function NewLevelPopUp(props) {
    const {
        onClick, level, isSounds
    } = props;
    if(level === 0) return <></>;
    //prize.premium
    let prize = getLevelPrize(level - 1);
    let isPrizeMoney = false;
    let premiumDays;
    if(prize.money) {
        isPrizeMoney = true;
    }else{
        premiumDays = prize.premium / 24 / 60 / 60 / 1000;
    }
    if(isSounds){
        setTimeout(()=>{
            newLevelSound.play();
        }, 500);
    }
    return (
        <div className={'close-game new-level-popUp'}>
            <div className={'close-game__header'}>
                <h3>Уровень {level+1} получен!</h3>
                <div className="close-game__close" onClick={() => onClick()}/>
            </div>
            <p>Поздравляем! Вы достигли {level+1} уровня!
                Вам подарок:
            </p>
            {
                isPrizeMoney ?
                    <div className={'prize'}>
                        {prize.money}<div className={'money-img'}/>
                    </div>
                    :
                    <div className={'prize'}>
                        {premiumDays}
                        {(premiumDays === 1 ? ' день' : ' дня')}
                        <div className={'premium-img'}/>
                    </div>

            }
        </div>


    );
}

export default connect(
    (store) => ({
        level: selectPlayerLevel(store),
        isSounds: selectSounds(store)
    })
)(popUpBlackout(NewLevelPopUp));
