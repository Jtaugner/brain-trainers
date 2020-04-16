import {SKIP_LEVEL} from "../common";


export const skipLevel = (game, level) => ({
    type: SKIP_LEVEL,
    payload:{
        game, level,
        money: 10
    },
    buying: true
});