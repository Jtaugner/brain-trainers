import React, {useState} from 'react';
import './mainPage.scss'
import {connect} from "react-redux";
import PlayerLevel from "../playerLevel/playerLevel";
import Premium from "../premium/premium";
import Money from "../money/money";
import TopMenu from "../topMenu/topMenu";
import MenuGameLevel from "../menuGameLevel/menuGameLevel";
import {gamesNames, getRandPrize, giftTimes} from "../../projectCommon";
import Gift from "../gift";
import CloseGame from "../close-game";
import {getGameLevelOpenCosts} from '../../projectCommon'
import RandomMenuGame from '../randomMenuGame/randomMenuGame'
import {addMoney, addOpenGift, buyGame, changeCanOpenGift, changeGiftTime, switchOffConfetti} from "../../store/ac";
import BottomMainMenu from "../bottomMainMenu/bottomMenu";
import {selectCanOpenGift, selectGiftOpens} from "../../store/selectors";
import GiftPopUp from  '../giftPopUp/giftPopUp'
let indexGame = 0;
let gamesClosedName = [];

function MainPage(props) {
    const {buyGame, switchOffConfetti, canOpenGift,
        addMoney, giftOpens, addOpenGifts,
        changeGiftTime, changeCanOpenGift} = props;
    const [gameClosed, changeGameClosed] = useState(false);
    const [giftPopUp, changeGiftPopUp] = useState(false);
    const [moneyPerGift, changeMoneyPerGift] = useState(0);
    const openGift = () => {
      if(canOpenGift){
          changeCanOpenGift();

          let prize = getRandPrize();
          changeMoneyPerGift(prize);
          addMoney(prize);
          changeGiftPopUp(true);
          let gifts = giftOpens;
          if(giftOpens !== giftTimes.length-1){
              gifts++;
              addOpenGifts();
          }
          const time = (+new Date()) + giftTimes[gifts];
          changeGiftTime(time);
      }
    };
    const closeGift = ()=>{changeGiftPopUp(false)};
    return (
        <div className={'mainPage'}>
            <TopMenu>
                <PlayerLevel/>
                <Premium/>
                <Money/>
            </TopMenu>
            <div className="top-tip">
                <div className="top-tip__name">Упражнения</div>
                <Gift onClick={openGift}/>
            </div>
            <div className="mainPage__games">
                <RandomMenuGame />
                {Object.keys(gamesNames).map((key, index) =>
                    <MenuGameLevel key={key}
                                   name={gamesNames[key]}
                                   gameClass={key}
                                   gameDoneColor={'#d8d0ff'}
                                   onClick={() => {
                                       changeGameClosed(true);
                                       gamesClosedName = key;
                                       indexGame = index;
                                   }
                                   }
                    />
                )
                }
            </div>

            {gameClosed ? <CloseGame gameClass={gamesClosedName}
                                     name={gamesNames[gamesClosedName]}
                                     buyGame={()=>buyGame(gamesClosedName, getGameLevelOpenCosts(indexGame))}
                                            onClick={()=>{
                                                changeGameClosed(false);

                                                switchOffConfetti();
                                            }}
                                           money={getGameLevelOpenCosts(indexGame)}

            /> : ''}
            <BottomMainMenu/>
            {giftPopUp ?
                <GiftPopUp
                    onClick={closeGift}
                moneyPerGift={moneyPerGift}/> : ''}
        </div>
    );
}

export default connect(
    (store)=>({
        canOpenGift: selectCanOpenGift(store),
        giftOpens: selectGiftOpens(store)
    })
    ,
    (dispatch)=>({
        buyGame: (game, money) => dispatch(buyGame(game, money)),
        switchOffConfetti: () => dispatch(switchOffConfetti()),
        addMoney: (money) => dispatch(addMoney(money)),
        addOpenGifts: () => dispatch(addOpenGift()),
        changeGiftTime: (time) => dispatch(changeGiftTime(time)),
        changeCanOpenGift: () => dispatch(changeCanOpenGift(false))
    })

    )(MainPage);
