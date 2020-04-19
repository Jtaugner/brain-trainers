import {SKIP_LEVEL, TOGGLE_SETTINGS, TOGGLE_SOUNDS} from "../common";


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