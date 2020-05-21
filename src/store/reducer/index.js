import {combineReducers} from 'redux'
import {moneyReducer} from "./moneyReducer";
import {levelReducer} from "./levelReducer";
import {expReducer} from "./expReducer";
import {premiumReducer} from "./premiumReducer";
import {progressReducer} from "./progressReducer";
import {settingsReducer} from "./settingsReducer";
import {soundsReducer} from "./soundsReducer";
import {gameReducer} from "./gameReducer";
import {difficultReducer} from "./difficultReducer";
import {gameLevelReducer} from "./gameLevelReducer";
import {randomGameReducer} from "./randomGameReducer";
import {showConfettiReducer} from "./showConfettiReducer";
import {notEnoughMoneyReducer} from "./notEnoughMoneyReducer";
import {levelInfoReducer} from "./levelInfoReducer";
import {premiumGameReducer} from "./premiumGameReducer";
import {premiumTimeReducer} from "./premiumTimeReducer";
import {newLevelReducer} from "./newLevelReducer";
import {giftTimeReducer} from "./giftTimeReducer";
import {canOpenGiftReducer} from "./canOpenGiftReducer";
import {gameSDKReducer} from "./gameSDKReducer";
import {giftOpensReducer} from "./giftOpensReducer";
import {rewardedVideoTimeReducer} from "./rewardedVideoTimeReducer";

const reducer = combineReducers({

    money: moneyReducer,
    playerLevel: levelReducer,
    exp: expReducer,
    progress: progressReducer,
    settings: settingsReducer,
    sounds: soundsReducer,
    game: gameReducer,
    difficult: difficultReducer,
    gameLevel: gameLevelReducer,
    randomGame: randomGameReducer,
    showConfetti: showConfettiReducer,
    notEnoughMoney: notEnoughMoneyReducer,
    levelInfo: levelInfoReducer,
    premiumGame: premiumGameReducer,
    premium: premiumReducer,
    premiumTime: premiumTimeReducer,
    newLevel: newLevelReducer,
    giftTime: giftTimeReducer,
    canOpenGift: canOpenGiftReducer,
    gameSDK: gameSDKReducer,
    giftOpens: giftOpensReducer,
    rewardedTime: rewardedVideoTimeReducer

});

export {reducer};