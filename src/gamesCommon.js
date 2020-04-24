const shultzGames = [
    [{width: 3}, {width: 3}, {width: 3}, {width: 3},{width: 4}, {width: 5},{width: 6},
        {width: 7}, {width: 8}, {width: 9},
        {width: 10}, {width: 11}, {width: 12},{width: 13}, {width: 14}, {width: 15},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},


    ],
    [{width: 4}, {width: 4}, {width: 4}, {width: 4}],
    [{width: 5}, {width: 5}, {width: 5}],
    [{width: 6}, {width: 6}, {width: 6}, {width: 6}, {width: 6}]
];
export const getAllLevelsByGame = (game) => {
    switch (game) {
        case 'shultz': return shultzGames.reduce((acc, arr)=>acc+arr.length, 0);
    }
};
export const getLevelsAmountByGameAndDiff = (game, diff) => {
    switch (game) {
        case 'shultz': return shultzGames[diff].length;
    }
};
export const getLevelsInfoByGameDiffAndLevel = (game, diff, level) => {
    switch (game) {
        case 'shultz': return shultzGames[diff][level];
    }
};