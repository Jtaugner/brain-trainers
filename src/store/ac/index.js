import {
    ADD_DONE_LEVEL,
    ADD_EXP,
    ADD_MONEY,
    CHOOSE_DIFFICULT,
    CHOOSE_GAME,
    CHOOSE_LEVEL,
    SKIP_LEVEL,
    TOGGLE_SETTINGS,
    TOGGLE_SOUNDS
} from "../common";


export const skipLevel = (game, level) => ({
    type: SKIP_LEVEL,
    payload:{
        game, level,
        money: 10
    },
    buying: true
});

export const toggleSettings = () => ({
    type: TOGGLE_SETTINGS,
});
export const toggleSounds = () => ({
    type: TOGGLE_SOUNDS,
});
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