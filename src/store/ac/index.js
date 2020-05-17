import {
    ADD_DONE_LEVEL,
    ADD_EXP,
    ADD_MONEY, BUY_GAME, BUY_LEVELS_DIFF,
    CHANGE_EXP_FROM_PLAYER_DATA,
    CHANGE_LEVEL_FROM_PLAYER_DATA, CHANGE_LEVEL_INFO,
    CHANGE_MONEY_FROM_PLAYER_DATA, CHANGE_NOT_ENOUGH_MONEY, CHANGE_PREMIUM_GAME, CHANGE_PREMIUM_TIME,
    CHANGE_PROGRESS_FROM_PLAYER_DATA, CHANGE_RAND_GAME,
    CHOOSE_DIFFICULT,
    CHOOSE_GAME,
    CHOOSE_LEVEL, CLOSE_NEW_LEVEL, SET_PREMIUM,
     SWITCH_OFF_CONFETTI,
    TOGGLE_SETTINGS,
    TOGGLE_SOUNDS
} from "../common";





export const toggleSettings = () => ({
    type: TOGGLE_SETTINGS,
});
export const toggleSounds = () => ({
    type: TOGGLE_SOUNDS,
});

//Выбор игры, сложности, уровня
export const chooseGame = (game) => ({
    type: CHOOSE_GAME,
    game
});
export const chooseDifficult = (difficult) => ({
    type: CHOOSE_DIFFICULT,
    difficult
});
export const chooseLevel = (level) => ({
    type: CHOOSE_LEVEL,
    level
});

//Покупки
export const buyGame = (game, money) => ({
    type: BUY_GAME,
    payload:{
        money, game
    },
    buying: true
});
export const buyLevelsDiff = (game, level, money) => ({
    type: BUY_LEVELS_DIFF,
    payload:{
        game, level, money
    },
    buying: true
});
//Прогресс
export const addMoney = (money) => ({
    type: ADD_MONEY,
    money
});
export const addExp = (exp) => ({
    type: ADD_EXP,
    exp
});
export const addDoneLevels = (game, difficult, doneLevels) => ({
    type: ADD_DONE_LEVEL,
    payload:{
        game, difficult, doneLevels
    }
});
//Player Data
export const changeProgress = (progress) => ({
    type: CHANGE_PROGRESS_FROM_PLAYER_DATA,
    progress
});
export const changeLevel = (level) => ({
    type: CHANGE_LEVEL_FROM_PLAYER_DATA,
    level
});
export const changeExp = (exp) => ({
    type: CHANGE_EXP_FROM_PLAYER_DATA,
    exp
});
export const changeMoney = (money) => ({
    type: CHANGE_MONEY_FROM_PLAYER_DATA,
    money
});
//Random game
export const changeRandomGame = (isRandGame) => ({
    type: CHANGE_RAND_GAME,
    isRandGame
});
//confetti
export const switchOffConfetti = ()=>({
    type: SWITCH_OFF_CONFETTI
});
//not enough
export const changeNotEnoughMoney = (show) =>({
    type: CHANGE_NOT_ENOUGH_MONEY,
    show
});


export const changeLevelInfo = (levelInfo) => ({
    type: CHANGE_LEVEL_INFO,
    levelInfo
});
export const changePremiumGame= (premiumGame) => ({
    type: CHANGE_PREMIUM_GAME,
    premiumGame
});


export const changePremiumTime = (time) => ({
    type: CHANGE_PREMIUM_TIME,
    time
});
export const setPremium = (isPremium) => ({
    type: SET_PREMIUM,
    isPremium
});
export const closeNewLevel = () => ({
    type: CLOSE_NEW_LEVEL
});