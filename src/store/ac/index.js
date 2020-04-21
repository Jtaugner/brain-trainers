import {CHOOSE_DIFFICULT, CHOOSE_GAME, SKIP_LEVEL, TOGGLE_SETTINGS, TOGGLE_SOUNDS} from "../common";


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
export const chooseDifficult = (diff) => ({
    type: CHOOSE_DIFFICULT,
    diff
});